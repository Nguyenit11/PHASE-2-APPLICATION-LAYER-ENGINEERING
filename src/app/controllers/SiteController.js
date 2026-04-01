const Course = require('../../models/course');
class SiteController {
    // [GET] /home
    async index(req,res){
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'error!' });
        }
    }
    // res.render('home'); không được xóa dòng này

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