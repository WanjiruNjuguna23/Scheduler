const { google } = require('googleapis');
const oauth2Client = require('../config/googleApi');


const addEvent = async (req, res) => {
    oauth2Client.setCredentials(req.user.tokens);
    const calender = google.calender({ version: 'v3', auth: oauth2Client});

    const event ={
        summary: req.body.title,
        description: req.body.description,
        start: {
            dateTime: req.body.start,
            timeZone: 'America/Los-Angeles',
        },
        end: {
            dateTime: req.body.end,
            tiemZone: 'America/Los_Angeles',
        },
    };

    try {
        const createdEvent = await calender.events.insert({
            calenderId: 'primary',
            resource: event,
        });
        res.json(createdEvent)
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).send('Error adding event to Google Calendar');
    }
};

module.exports = { addEvent };