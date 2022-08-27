DROP TABLE IF EXISTS carts CASCADE;

CREATE TABLE carts (
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER REFERENCES items(id),
  item_quantity INTEGER
);