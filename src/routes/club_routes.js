const express = require('express');
const router = express.Router();
const clubController = require('../controllers/club_controller');

/**
 * @swagger
 * /api/clubs:
 *   get:
 *     summary: Lấy danh sách tất cả các CLB
 *     responses:
 *       200:
 *         description: Trả về mảng các CLB thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', clubController.getAllClubs);

/**
 * @swagger
 * /api/clubs/{id}:
 *   get:
 *     summary: Xem chi tiết một CLB
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của câu lạc bộ
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy CLB
 */

router.get('/:id', clubController.getClubById);

module.exports = router;