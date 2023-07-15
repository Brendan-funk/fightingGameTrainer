INSERT INTO users (name, email, password)
VALUES ('Denda', 'test@test.com', '1234'),
        ('Kennedy', 'test@gmail.com', '1234'),
        ('Tim', 'tester@test.com', '1234');

INSERT INTO missions(name)
VALUES ('haduken'),('DP'), ('special cancel'), ('supercancel');

INSERT INTO completed(user_id, mission_id, completed)
VALUES (1,1,TRUE), (1,2,FALSE),(1,3,TRUE),(1,4,TRUE),
        (2,1,FALSE), (2,2,FALSE), (2,3,FALSE), (2,4,FALSE),
        (3,1,TRUE),(3,2,TRUE), (3,3,TRUE),(3,4,TRUE);