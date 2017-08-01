const db = require('../db/config');

const URL = {};

URL.findAll = () => {
    return db.query('SELECT urls.url_path, urls.window_title, urls.screenshot_path, urls.webpage_data, urls.id, categories.category FROM urls INNER JOIN categories ON urls.category_id = categories.id ORDER BY urls.id ASC');
};

URL.findById = id => {
    return db.oneOrNone('SELECT urls.url_path, urls.window_title, urls.screenshot_path, urls.webpage_data, urls.id, categories.category FROM urls INNER JOIN categories ON urls.category_id = categories.id WHERE urls.id = $1', [id]);
};

URL.create = url => {
    return db.one(
        `
        INSERT INTO urls
        (url_path, window_title, screenshot_path, webpage_data, category_id)
        VALUES ($1, $2, $3, $4, $5) RETURNING *
        `,
        [urls.url_path, urls.window_title, urls.screenshot_path, urls.webpage_data, urls.category_id]
    );
};

URL.update = (url, id) => {
    return db.one(
        `
        UPDATE urls SET
        url_path = $1,
        window_title = $2,
        screenshot_path $3,
        webpage_data = $4,
        category_id = $5
        WHERE id = $6
        RETURNING *
        `,
        [urls.url_path, urls.window_title, urls.screenshot_path, urls.webpage_data, urls.category_id, id]
    );
};

URL.destroy = id => {
    return db.none(
        `
        DELETE FROM urls
        WHERE id = $1
        `,
        [id]
    );
};

module.exports = URL;



        // urls.url_path,
        // urls.window_title,
        // urls.screenshot_path,
        // urls.webpage_data,
        // urls.category_id


        // url_path,
        // window_title,
        // screenshot_path,
        // webpage_data,
        // category_id