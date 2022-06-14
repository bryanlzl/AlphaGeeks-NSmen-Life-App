var mongoose = require('mongoose');

// Setup schema
var bookingSchema = mongoose.Schema({
    bookingId: {
        type: String,
    },
    userId: {
        type: String,
    },
    date: String,
    time: String,
    location: String
});

// Export booking model
var booking = module.exports = mongoose.model('bookinglists', bookingSchema);

module.exports.get = function (callback, limit) {
    booking.find(callback).limit(limit);
}