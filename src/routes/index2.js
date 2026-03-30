const newsRouter = require('./news');
const siteRouter = require('./site');
function route(link) {

    link.use('/news', newsRouter); //đường dẫn của trang news
    link.use('/', siteRouter); //đường dẫn của trang site(home, contact, search)

}

module.exports = route;