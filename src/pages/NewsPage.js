const { Page, TextView } = require('tabris');
module.exports = class NewsPage extends Page {
    constructor() {
        super({ title: 'News' });
        new TextView({
            centerX: 0,
            centerY: 0,
            text: 'No news yet!'
        }).appendTo(this);
    }
};