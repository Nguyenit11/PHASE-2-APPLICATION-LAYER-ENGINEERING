const db = require('../config/db'); 

const Club = {
    // Thêm tham số callback vào đây
    getAll: (callback) => {
        db.query("SELECT * FROM `club`", (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },

    getById: (id, callback) => {
        db.query("SELECT * FROM `club` WHERE id = ?", [id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results[0]);
        });
    }
};

module.exports = Club;