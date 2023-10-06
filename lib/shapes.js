class Shape{
    constructor(){
        this.logoChars = '';
        this.textColor = '';
        this.logoShape = '';
        this.shapeColor = '';
    }
    createLogoChars(logoChars){
        this.logoChars = logoChars;
    }
    createTextColor(textColor){
        this.textColor = textColor;
    }
    createLogoShape(logoShape){
        this.logoShape = logoShape;
    }
    createShapeColor(shapeColor){
        this.shapeColor = shapeColor;
    }
}
class Circle extends Shape{
    makeShape () {
        var svg =`<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="${this.textColor}" stroke-width="3" fill="${this.shapeColor}" /> 
      </svg> `;                
        return svg;
    }
}
class Triangle extends Shape{
    makeShape () {
        var svg;
        return svg;
    }
}
class Square extends Shape{
    makeShape () {
        var svg;
        return svg;
    }
}

module.exports = { Circle, Triangle, Square }