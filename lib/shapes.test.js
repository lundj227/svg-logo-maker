const { Circle, Triangle, Square } = require('./shapes.js');

describe('Circle', () => {
    it('Should accept a color for the shape and apply it.', () => {
        const newCircle = new Circle;
        newCircle.createShapeColor('Blue');
        expect(newCircle.makeShape().toEqual('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />'))

    })
})