const circle = {
    radius: 1,
    draw(){
        console.log('Drawing circle with radius', this.radius);
    }
}

for(let key in circle)
    console.log(key, circle[key]);

for(let key of Object.keys(circle))
    console.log(key);
