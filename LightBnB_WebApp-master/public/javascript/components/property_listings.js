$(() => {

  const $propertyListings = $(`
  <section class="property-listings" id="property-listings">
      <p>Loading...</p>
    </section>
  `);
  window.$propertyListings = $propertyListings;

  window.propertyListings = {};

  function addListing(listing) {
    $propertyListings.append(listing);
  }
  function clearListings() {
    $propertyListings.empty();
  }
  window.propertyListings.clearListings = clearListings;

  function addProperties(properties, isReservation = false) {
    // if it's a reservation, we don't want to clear the listings a second time in the addProperties function call
    if (!isReservation) {
      clearListings();
    }
    // check for user login
    getMyDetails()
    .then()
    for (const propertyId in properties) {
      const property = properties[propertyId];
      const listing = propertyListing.createListing(property, isReservation);
      addListing(listing);
    }
    if (isReservation) {
      $('.update-button').on('click', function() {
        const idData = $(this).attr('id').substring(16);
        getIndividualReservation(idData).then(data => {
          views_manager.show("updateReservation", data);       
          
        });
      })
      $('.delete-button').on('click', function(event) {
        event.preventDefault();
        const idData = $(this).attr('id').substring(16);
        deleteReservation(idData)
        .then(() => {})
        .catch(err => console.error(err));
        alert('Reservation has been deleted!'); 
        propertyListings.clearListings();
        getFulfilledReservations()
          .then(function(json) {
              propertyListings.addProperties(json.reservations, { upcoming: false });
              getUpcomingReservations()
                .then(json => {
                  propertyListings.addProperties(json.reservations, { upcoming: true })
                })
        views_manager.show('listings');
      })
      .catch(error => console.error(error)); 
        
      })
      $('.add-review').on('click', function() {
        const idData = $(this).attr('id').substring(11);
        views_manager.show("newReview", idData);
        $('.review-form').slideDown("fast");
      })
      
    } else {
      $('.reserve-button').on('click', function() {
        const idData = $(this).attr('id').substring(17);
        console.log(idData, "from reserve button");
        views_manager.show('newReservation', idData);
      })
      $('.review_details').on('click', function() {
        const idData = $(this).attr('id').substring(15);
        views_manager.show('showReviews', idData);
      })
    }
    $('#reservation-details').detach();
  }
  window.propertyListings.addProperties = addProperties;

});
