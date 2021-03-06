INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Agatha', 'agatha@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','A violinist who''s living the rock and roll. Coffee addict, day-dreamer, and nature lover.', 'false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Henckels', 'henckels@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','A detective by day, guitarist by night.','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Clotilde', 'clotilde@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','Jazz music lover and a cello beginner.','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Dmitri', 'dmitri@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','Soul searcher in the far away land.','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Gustave', 'gustave@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','Don''t believe in coincidences. We meet for a reason, let''s jam together.','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Kovacs', 'kovacs@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','I love reggaeton, gotta move it together people...','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Adna', 'adna@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','I just love to meet people with different instrument types, so that we can find a way to jam together. Life''s too short to fixate on a single type!','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Cyrill', 'cyrill@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','Saxophonist and a guitarist. Would like to form a band and jam preferably on weekday nights. Prefer jazz music.','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Suzy', 'suzy@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','A daydreamer by day, classical cellist by night. In need to find a cellist partner to jam together.','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Lionel', 'lionel@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','I am an amazing person, with an amazing voice. Looking to jam some country songs together.','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Jed', 'jed@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','R&B fanatic and a die-hard keyboard player, searching for the right band to join!','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Becky', 'becky@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','Soul singer, and quite an excellent piano player, having a hard time to look for a jam with the like-minded...','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Rudy', 'rudy@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','Reggae for life! A seasonal percussionist, all ready to jam with my fellow reggae lovers!','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Edgar', 'edgar@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','Didgeridoo artist, looking for opportunities in a funky band.','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Dakota', 'dakota@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','Indie singer, I think I have a unique voice, or so Ive been told..','false') RETURNING *;
INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES('Noah', 'noah@gmail.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8','Country song lover and a banjoist, hook me up for some jams people!','false') RETURNING *;

INSERT INTO instrument (name) VALUES('Guitar') RETURNING *;
INSERT INTO instrument (name) VALUES('Bass') RETURNING *;
INSERT INTO instrument (name) VALUES('Ukulele') RETURNING *;
INSERT INTO instrument (name) VALUES('Piano') RETURNING *;
INSERT INTO instrument (name) VALUES('Drums') RETURNING *;
INSERT INTO instrument (name) VALUES('Percussion') RETURNING *;
INSERT INTO instrument (name) VALUES('Banjo') RETURNING *;
INSERT INTO instrument (name) VALUES('Violin') RETURNING *;
INSERT INTO instrument (name) VALUES('Cello') RETURNING *;
INSERT INTO instrument (name) VALUES('Trumpet') RETURNING *;
INSERT INTO instrument (name) VALUES('Saxophone') RETURNING *;
INSERT INTO instrument (name) VALUES('Keyboard') RETURNING *;
INSERT INTO instrument (name) VALUES('Xylophone') RETURNING *;
INSERT INTO instrument (name) VALUES('Vocal') RETURNING *;
INSERT INTO instrument (name) VALUES('Other') RETURNING *;

INSERT INTO genre (name) VALUES('Jazz') RETURNING *;
INSERT INTO genre (name) VALUES('Blues') RETURNING *;
INSERT INTO genre (name) VALUES('Soul') RETURNING *;
INSERT INTO genre (name) VALUES('Reggae') RETURNING *;
INSERT INTO genre (name) VALUES('Indie') RETURNING *;
INSERT INTO genre (name) VALUES('Classical') RETURNING *;
INSERT INTO genre (name) VALUES('Country') RETURNING *;
INSERT INTO genre (name) VALUES('Hip Hop') RETURNING *;
INSERT INTO genre (name) VALUES('R&B') RETURNING *;
INSERT INTO genre (name) VALUES('Latin') RETURNING *;
INSERT INTO genre (name) VALUES('Rock') RETURNING *;
INSERT INTO genre (name) VALUES('Metal') RETURNING *;
INSERT INTO genre (name) VALUES('Alt Rock') RETURNING *;
INSERT INTO genre (name) VALUES('Pop') RETURNING *;
INSERT INTO genre (name) VALUES('Other') RETURNING *;

INSERT INTO user_instrument (user_id, instrument_id) VALUES('1', '1') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('1', '2') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('1', '5') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('2', '10') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('2', '11') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('2', '15') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('3', '8') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('3', '9') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('4', '4') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('4', '12') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('4', '13') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('5', '1') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('5', '3') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('5', '7') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('6', '1') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('6', '3') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('6', '5') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('6', '6') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('6', '7') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('6', '12') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('6', '13') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('6', '14') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('6', '15') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('7', '1') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('7', '3') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('7', '4') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('7', '6') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('7', '7') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('8', '1') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('8', '3') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('8', '4') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('8', '6') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('8', '7') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('9', '1') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('10', '4') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('11', '14') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('12', '3') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('13', '9') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('14', '12') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('15', '7') RETURNING *;
INSERT INTO user_instrument (user_id, instrument_id) VALUES('16', '2') RETURNING *;

INSERT INTO user_genre (user_id, genre_id) VALUES('1', '11') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('1', '12') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('1', '13') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('2', '1') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('2', '5') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('2', '15') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('3', '6') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('3', '7') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('3', '15') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('4', '2') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('4', '3') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('5', '7') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('5', '9') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('6', '4') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('6', '5') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('6', '15') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('7', '1') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('7', '3') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('7', '4') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('7', '5') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('7', '7') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('8', '1') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('8', '3') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('8', '4') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('8', '5') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('8', '7') RETURNING *;

INSERT INTO user_genre (user_id, genre_id) VALUES('9', '9') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('9', '14') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('10', '5') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('10', '6') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('10', '7') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('11', '1') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('11', '2') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('11', '3') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('12', '11') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('12', '12') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('12', '13') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('13', '8') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('13', '9') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('13', '10') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('13', '14') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('14', '5') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('14', '6') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('14', '7') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('15', '1') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('15', '2') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('15', '3') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('16', '11') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('16', '12') RETURNING *;
INSERT INTO user_genre (user_id, genre_id) VALUES('16', '13') RETURNING *;

INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES('Orchard', '2', 'Usually on weekends.', 'Intermediate to Advance', 'Looking to jam with like-minded rock and rollers!', 'active', 'false');
INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES('Bugis', '3', 'Usually weekdays after 7pm.', 'Beginner friendly', 'Looking to jam with like a rock star!', 'active', 'false');
INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES('Holland', '3', 'Usually weekdays after 8pm.', 'Intermediate level', 'Finding a pal to jam in the same genre.', 'active', 'false');
INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES('Hougang', '2', 'Usually weekdays after 9pm.', 'Advance', 'Let''s not be shy and join my jam!', 'active', 'false');
INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES('East Coast', '2', 'Usually weekdays after 10pm.', 'Beginner', 'For the serious jammers only.', 'active', 'false');
INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES('Changi', '1', 'Usually weekdays after 12midnight.', 'Advance', 'Would like to have some casual jam sessions, any instruments, reggae fevers only.', 'active', 'false');
INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES('Joo Chiat', '2', 'Weekends anytime from 12pm onwards', 'Intermediate or Advance', 'Really looking forward to jam with people who likes the same stuff!', 'active', 'false');
INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES('Clementi', '2', 'Sundays from 2-6pm, Saturdays are flexible if necessary.', 'Beginner to Intermediate', 'Flexible with anyone who shares liking of the same music', 'active', 'false');

INSERT INTO user_post (user_id, post_id) VALUES('1', '1');
INSERT INTO user_post (user_id, post_id) VALUES('2', '2');
INSERT INTO user_post (user_id, post_id) VALUES('3', '3');
INSERT INTO user_post (user_id, post_id) VALUES('4', '4');
INSERT INTO user_post (user_id, post_id) VALUES('5', '5');
INSERT INTO user_post (user_id, post_id) VALUES('6', '6');
INSERT INTO user_post (user_id, post_id) VALUES('7', '7');
INSERT INTO user_post (user_id, post_id) VALUES('8', '8');

INSERT INTO request (requester_id, post_id, status) VALUES('7', '1', 'accepted');
INSERT INTO request (requester_id, post_id, status) VALUES('7', '2', 'declined');
INSERT INTO request (requester_id, post_id, status) VALUES('7', '3', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('9', '3', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('9', '6', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('10', '2', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('10', '4', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('11', '1', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('11', '2', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('12', '5', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('12', '7', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('13', '6', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('13', '8', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('14', '2', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('14', '5', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('15', '4', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('15', '5', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('16', '2', 'pending');
INSERT INTO request (requester_id, post_id, status) VALUES('16', '5', 'pending');

INSERT INTO post_instrument (post_id, instrument_id) VALUES('1', '2') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('1', '14') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('2', '1') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('2', '2') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('2', '6') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('3', '4') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('3', '11') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('3', '14') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('4', '1') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('4', '2') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('5', '4') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('5', '5') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('6', '15') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('7', '2') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('7', '14') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('8', '2') RETURNING *;
INSERT INTO post_instrument (post_id, instrument_id) VALUES('8', '14') RETURNING *;

INSERT INTO post_genre (post_id, genre_id) VALUES('1', '11') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('1', '12') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('1', '13') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('2', '1') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('2', '5') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('2', '15') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('3', '6') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('3', '7') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('3', '15') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('4', '2') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('4', '3') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('5', '7') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('5', '9') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('6', '4') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('6', '5') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('6', '15') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('7', '1') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('7', '3') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('7', '4') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('7', '5') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('7', '7') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('8', '1') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('8', '3') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('8', '4') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('8', '5') RETURNING *;
INSERT INTO post_genre (post_id, genre_id) VALUES('8', '7') RETURNING *;











