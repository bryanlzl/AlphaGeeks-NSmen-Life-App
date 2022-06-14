// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome!',
    });
});

// Import booking controller
var bookingController = require('../controllers/bookingController');

// Food routes
router.route('/booking')
    .get(bookingController.index)
    .post(bookingController.new);

router.route('/booking/:booking_id')
    .get(bookingController.view)
    .patch(bookingController.update)
    .put(bookingController.update)
    .delete(bookingController.delete);


// Export API routes
module.exports = router;