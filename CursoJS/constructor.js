function createCircule(radius){
    return{
        radius,
        draw(){
            console.log(`Drawing a circle with radius ${this.radius}`);
        }
    }
}

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(`Drawing a circle with radius ${this.radius}`);
    }   
}

const circle = new Circle(1)
