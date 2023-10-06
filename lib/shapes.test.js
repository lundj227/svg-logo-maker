const { Circle, Triangle, Square } = require('./shapes.js');

describe('Shape', () => {
    describe('Circle', () => {
        it('Should accept a color for a Circle and apply it.', () => {
            const newCircle = new Circle();
            newCircle.createShapeColor('Blue');
            expect(newCircle.makeShape()).toEqual('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="Blue" /><text x="50" y="58" font-family="Arial" font-size="30" fill="" text-anchor="middle"></text></svg>');
        });
    });
    describe('Triangle', () => {
        it('Should accept a color for a Triangle and apply it.', () => {
            const newTriangle = new Triangle();
            newTriangle.createShapeColor('Blue');
            expect(newTriangle.makeShape()).toEqual('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 90,90 10,90" fill="Blue" /><text x="50" y="65" font-family="Arial" font-size="15" fill="" text-anchor="middle"></text></svg>');
        });
    });
    describe('Square', () => {
        it('Should accept a color for a Triangle and apply it.', () => {
            const newSquare = new Square();
            newSquare.createShapeColor('Blue');
            expect(newSquare.makeShape()).toEqual('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="Blue" /><text x="50" y="58" font-family="Arial" font-size="36" fill="" text-anchor="middle"></text></svg>')
        })
    });
});