const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        availableTickets: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true
    }
)

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;