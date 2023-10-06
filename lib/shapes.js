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
        var svg = 
        `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />
        <text x="50" y="58" font-family="Arial" font-size="30" fill="${this.textColor}" text-anchor="middle">${this.logoChars}</text>
        </svg>`;                
        return svg;
    }
}
class Triangle extends Shape{
    makeShape () {
        var svg = 
        `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 90,90 10,90" fill="${this.shapeColor}" />
        <text x="50" y="65" font-family="Arial" font-size="15" fill="${this.textColor}" text-anchor="middle">${this.logoChars}</text>
        </svg>`;
        return svg;
    }
}
class Square extends Shape{
    makeShape () {
        var svg = 
        `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}" />
        <text x="50" y="58" font-family="Arial" font-size="36" fill="${this.textColor}" text-anchor="middle">${this.logoChars}</text>
        </svg>`;
        return svg;
    }
}

module.exports = { Circle, Triangle, Square }