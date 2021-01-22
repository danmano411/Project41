class Rain {
    constructor(x, y){
        var options = {
            isStatic: false,
            friction: 0.5
        }

        this.body = Bodies.circle(x, y, 10, options)
        this.x = x
        this.y = y
        this.r = 10;

        World.add(world, this.body)
    }

    update(){
        this.y = (random(0, 400))
    }

    display(){
        push();
        fill("blue")
        ellipse(this.x, this.y, this.r)
        pop();
    }
}