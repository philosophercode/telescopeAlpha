const db = require('../db/config');

const Category = {};

Category.findAll = () => {
  return db.query('SELECT categories.category, categories.id, COUNT(*) AS num_urls FROM categories JOIN urls ON urls.category_id = categories.id GROUP BY categories.category, categories.id ORDER BY categories.id ASC');
};

Category.findById = id => {
  return db.query('SELECT urls.url_path, urls.window_title, urls.screenshot_path, urls.webpage_data, categories.category, urls.id FROM urls JOIN categories ON categories.id = urls.category_id WHERE categories.id = $1', [id]);
};

module.exports = Category;