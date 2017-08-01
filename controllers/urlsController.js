const URL = require('../models/url');

const urlsController = {};

urlsController.index = (req, res) => {
    URL.findAll()
        .then(urls => {
            res.json({
                message: 'ok',
                urlsData: urls,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({message: '400', err});
        });
};

urlsController.show = (req, res) => {
    URL.findById(req.params.id)
        .then(url => {
            res.json({
                message: 'ok',
                url: url,
            });
        })
        .catch(err => {
            res.status(400).json({message: '400', err});
        });
};

urlsController.create = (req, res) => {
    console.log(req);
    URL.create({
        url_path: res.locals.url_path,
        window_title: res.locals.window_title,
        screenshot_path: res.locals.screenshot_path,
        webpage_data: res.locals.webpage_data,
        category_id: res.locals.category_id,
    })
    .then(url => {
        res.json({message: 'ok', url: url})
    })
    .catch(err => {
        res.status(400).json({message: '400', err});
    });
};


urlsController.edit = (req, res) => {
    URL.findById(req.params.id)
        .then(url => {
            console.log(url);
            res.json({
                message: 'ok',
                url: url,
                id: req.params.id,
            });
        })
        .catch(err => {
            res.status(400).json({message: '400', err});
        });
};

urlsController.update = (req, res) => {
    URL.update({
        url_path: req.body.url_path,
        window_title: req.body.window_title,
        screenshot_path: req.body.screenshot_path,
        webpage_data: req.body.webpage_data,
        category_id: req.body.category_id,
    }, req.params.id)
    .then(url => {
        res.json({message: 'ok', url: url});
    })
    .catch(err => {
        res.status(400).json(err);
    });
};

urlsController.destroy = (req, res) => {
    URL.destroy(req.params.id)
        .then(() => {
            res.json({message: 'url deleted'});
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

module.exports = urlsController;