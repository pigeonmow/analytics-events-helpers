class AnalyticsEvents {

    /**
     * Constructor for the AnalyticsEvents class
     */
    constructor () {
        this.events = [];
        this.buildEventsArray();
    }

    /**
     * Builds the array of events for Google Analytics
     */
    buildEventsArray () {
        this.events.push(
            {
                category: 'Contact',
                action:   'click',
                label:    'Phone Number',
                trackedBy: ['.phone-event'],
                mobileOnly: true
            },
            {
                category: 'Contact',
                action:   'click',
                label:    'Email',
                trackedBy: ['.email-event']
            },
            {
                category: 'Social',
                action:   'click',
                label:    'Instagram Link Clicked',
                trackedBy: ['.instagram-event']
            }
        );
    }

    /**
     * Gets the Google Analytics events array
     *
     * @return {Array}
     */
    getEvents () {
        return this.events;
    }

}

export default AnalyticsEvents;
