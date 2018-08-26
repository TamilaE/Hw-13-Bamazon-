CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jumanji: Welcome To The Jungle", "Prime Video", 18.99, 8720),
("FAGE TOTAL, 0% Plain Greek Yogurt, 17.6 oz", "AmazonFresh", 3.49 , 3200),
("Nature's Recipe Grain Free Dry Dog Food", "Pet Supplies", 46.99 , 1503),
("Girl's Bike, 20 inch wheels", "Sports & Outdoors", 149.99 , 750),
("Blow dryer Pro-Dryer", "Beauty & Health", 199.00, 85),
("Movie Projector", "Electronics, computers& Office", 139.43 , 34),
("Pride and Prejudice", "Books & Audible", 12.99, 54),
("Smart Lock Installation", "Home Services", 49.00, 5),
("Robots", "Toys, Kids & Baby", 103.19, 384),
("Smart speaker with Alexa", "Echo & Alexa", 84.99, 248),
("Acer Laptop", "Movies, music & Games", 1199.00, 192),
("Jimmy Choo Eau de Parfum", "Beauty & Health", 112.00, 63),
("Dasani water bottle", "AmazonFresh", 4.99 , 290),
("Aurora World Lil Benny Phant", "Toys, Kids & Baby", 10.39, 2364),
("Fire HD 10 Tablet", "Fire Tablets", 149.99, 5439),
("Aveeno Baby Essential Daily Care", "Beauty & Health", 27.32, 3),
("Vogue magazine", "Books & Audible", 10.00, 724),
("Car stereo", "Electronics, computers& Office", 4.00 , 640),
("LED Cube Shaped Aquarium", "Pet Supplies", 46.99 , 1503),
("Women's Carrson Dress Sandal", "Clothing, Shoes & Jewelry", 18.99, 23),
("Makeup Organizer", "Home, Garden & Tools", 32.69, 2301),
("Kindle E-reader", "Kindle E-readers & Books", 79.99, 422),
("Cactus Earring", "Handmade", 18.00, 92),
("The Foreigner Movie", "Movies, music & Games", 10.99, 40),
("Disney Princess Ariel", "Toys, Kids & Baby", 21.75, 584);

