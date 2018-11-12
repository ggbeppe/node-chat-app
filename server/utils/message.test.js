const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Jen';
        const text = 'Some message';

        const message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof(message.createdAt)).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'user';
        const latitude = 15;
        const longitude = 19;
        const url = 'https://www.google.com/maps?q=15,19';

        const message = generateLocationMessage(from,latitude, longitude);

        expect(message.from).toBe(from);
        expect(message.url).toBe(url);
        expect(typeof(message.createdAt)).toBe('number');
    });
});
