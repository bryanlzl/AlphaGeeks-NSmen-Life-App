// Import food model
Booking = require('../models/bookingModel');

// Handle index actions
exports.index = function (req, res) {
    Booking.get(function (err, bookingList) {
        if (err) {
            res.status(404).json({
                status: "error",
                message: err,
            });
        }
        res.status(200).json({
            status: "success",
            message: "Booking List retrieved successfully",
            data: bookingList
        });
    });
};

// Handle create booking actions
exports.new = function (req, res) {
    var booking = new Booking();
    booking.userId = req.body.userId ? req.body.userId : booking.userId;
    booking.date = req.body.date;
    booking.time = req.body.time;
    booking.location = req.body.location;
    // save the booking and check for errors
    booking.save(function (err) {
        // Check for validation error
        if (err)
            res.status(404).json({
                status: "error",
                message: err,
            });
        else
            res.status(200).json({
                message: 'New booking created!',
                data: booking
            });
    });
};

// Handle view booking info
exports.view = function (req, res) {
    Booking.findById(req.params.booking_id, function (err, booking) {
        // Check for validation error
        if (err)
            res.status(404).json({
                status: "error",
                message: "Invalid ID detected, unable to find booking",
            });
        else
            res.status(200).json({
                message: 'Booking details loading',
                data: booking
            });
    });
};
// Handle update booking info
exports.update = function (req, res) {
    Booking.findById(req.params.booking_id, function (err, booking) {
        if (err)
            res.status(404).json({
                status: "error",
                message: "Invalid ID detected, unable to update food",
            });
        booking.userId = req.body.userId ? req.body.userId : booking.userId;
        booking.date = req.body.date;
        booking.time = req.body.time;
        booking.location = req.body.location;
        // save the food and check for errors
        booking.save(function (err) {
            // Check for validation error
            if (err)
                res.status(404).json({
                    status: "error",
                    message: err,
                });
            else
                res.status(200).json({
                    message: 'Booking details updated!',
                    data: booking
                });
        });
    });
};

// Handle delete booking
exports.delete = function (req, res) {
    Booking.deleteOne({
        _id: req.params.booking_id
    }, function (err, booking) {
        // Check for validation error
        if (err)
            res.status(404).json({
                status: "error",
                message: "Unable to delete when data not found in database!",
            });
        else
            res.status(200).json({
                message: 'Booking successfully deleted',
                status: "success"
            });
    });
};