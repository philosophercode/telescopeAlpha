CREATE TABLE IF NOT EXISTS categories (
  id BIGSERIAL PRIMARY KEY,
  category VARCHAR(255)
);


INSERT INTO categories (category)
VALUES
    (
        'Arts/Entertainment'
    ),
    (
        'Business'
    ),
    (
        'Computers/Tech'
    ),
    (
        'Games'
    ),
    (
        'Health'
    ),
    (
        'Home'
    ),
    (
        'News'
    ),
    (
        'Recreation'
    ),
    (
        'Reference/Search'
    ),
    (
        'Regional/NYC'
    ),
    (
        'Shopping'
    ),
    (
        'Society'
    ),
    (
        'Sports'
    ),
    (
        'Travel'
    ),
    (
        'World'
    ),
    (
        'Other'
    );