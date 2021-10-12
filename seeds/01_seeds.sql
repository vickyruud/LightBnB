INSERT INTO users (id, name, email, password)
VALUES
  (1, 'James May', 'cptslow@grandtour.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
  (2, 'Jeremy Clarkson', 'orangutan@grandtour.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
  (3, 'Richard Hammond', 'hamster@grandtour.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
  (4, 'Andy Wilman', 'mrwilman@grandtour.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
  (5, 'Neal Caffery', 'nealc@whitecollar.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
  (6, 'Richard Castle', 'richcastle@castle.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url,cover_photo_url,cost_per_night,parking_spaces,number_of_bathrooms,number_of_bedrooms, country, street, city, province, post_code)
VALUES
  (1, 'Our Man''s Hotel', 'Calm and relaxing', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 75, 2, 1, 2, 'Canada', '2 Slow Lane', 'London', 'Ontario', 2256),
  (2, 'Power Spot', 'Powerrrr', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 150, 3, 2, 4, 'Canada', '1 Fast Lane', 'Montreal', 'Quebec', 4585),
  (3, 'Crash Site', 'Rolling',  'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 110, 1, 1, 1, 'Canada', '1 Crash Lane', 'Winnipeg', 'Manitoba', 7896),
  (3, 'Will Man Resort', 'Creations',  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', 549.56, 5, 2, 3, 'Canada', '1 Crazy Lane', 'Vancouver', 'British Columbia', 6563),
  (5, 'Among Thieves', 'Dedicatied to Mozz',  'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg', 986.47, 3, 5, 6, 'Canada', '6656 Burke Lane', 'Toronto', 'Ontario', 1231),
  (6, 'The Heat', 'Writer''s Delight',  'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg' , 89.65, 2, 2, 3, 'Canada', '8956 Castle Road', 'Edmonton', 'Alberta', 8564),
  (1, 'Slow', 'No Oragutans',  'https://images.pexels.com/photos/2076739/pexels-photo-2076739.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2076739/pexels-photo-2076739.jpeg' , 47.65, 1, 1, 4, 'Canada', '9579 May Road', 'Regina', 'Sasketchwan', 7879),
  (5, 'White Collar', 'Treasure site',  'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350','https://images.pexels.com/photos/1756826/pexels-photo-1756826.jpeg' , 38.65, 1, 2, 1, 'Canada', '8569 Elle Road', 'Halifax', 'Nova Scotia', 5789);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES 
  ('2020-12-25', '2021-1-3', 2, 4),
  ('2021-1-25', '2021-2-3', 1, 5),
  ('2020-10-12', '2020-11-3', 3, 6),
  ('2020-11-20', '2020-11-30', 4, 3),
  ('2020-04-08', '2020-05-08', 5, 2),
  ('2021-05-28', '2020-06-07', 6, 1),
  ('2021-03-11', '2021-04-08', 7, 5),
  ('2021-05-09', '2021-06-11', 8, 2),
  ('2021-05-01', '2021-05-07', 6, 3),
  ('2020-11-17', '2020-11-20', 3, 1);
  
INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES 
  (4, 2, 1, 4, 'message' ),
  (5, 1, 2, 3, 'message' ),
  (6, 3, 3, 2, 'message' ),
  (3, 4, 4, 1, 'message' ),
  (2, 5, 5, 5, 'message' ),
  (1, 6, 6, 4, 'message' ),
  (5, 7, 7, 5, 'message' ),
  (2, 8, 8, 1, 'message' ),
  (3, 6, 9, 4, 'message' ),
  (1, 3, 10, 5, 'message' );











