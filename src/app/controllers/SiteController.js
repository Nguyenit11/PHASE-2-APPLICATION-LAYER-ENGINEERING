class SiteController {
    // [GET] /home
    index(req, res) {
        res.render('home');
    }
    // [GET] /contact
    contact(req, res) {
        res.render('contact');
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();