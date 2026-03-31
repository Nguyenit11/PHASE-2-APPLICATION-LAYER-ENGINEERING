const Club = require('../models/club_model');

exports.getAllClubs = (req, res) => {
    Club.getAll((err, clubs) => {
        if (err) {
            return res.status(500).json({ 
                message: "Lỗi khi lấy danh sách CLB", 
                error: err.message 
            });
        }
        res.status(200).json(clubs);
    });
};

exports.getClubById = (req, res) => {
    const id = req.params.id;
    Club.getById(id, (err, club) => {
        if (err) {
            return res.status(500).json({ message: "Lỗi server", error: err.message });
        }
        if (!club) {
            return res.status(404).json({ message: "Không tìm thấy CLB" });
        }
        res.status(200).json(club);
    });
};