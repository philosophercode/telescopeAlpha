CREATE TABLE urls (
    id serial PRIMARY KEY,
    url_path TEXT,
    window_title VARCHAR(255),
    screenshot_path TEXT,
    webpage_data JSONB,
    category_id INTEGER REFERENCES categories(id)
);



INSERT INTO urls (
        url_path,
        window_title,
        screenshot_path,
        webpage_data,
        category_id)
    VALUES(
        'https://www.google.com/',
        'Google',
        'https://s3.us-east-2.amazonaws.com/telescopealpha/screenshots/Google.png',
        null,
        9
    ),
    (
        'https://en.wikipedia.org/wiki/Main_Page',
        'Wikipedia, the free encyclopedia',
        'https://s3.us-east-2.amazonaws.com/telescopealpha/screenshots/Wikipedia%2C+the+free+encyclopedia.png',
        null,
        9
    ),
    (
        'https://www.cnn.com',
        'CNN - Breaking News, Latest News and Videos',
        'https://s3.us-east-2.amazonaws.com/telescopealpha/screenshots/CNN+-+Breaking+News%2C+Latest+News+and+Videos.png',
        null,
        7
    );
