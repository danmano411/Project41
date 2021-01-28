class Rain {
    constructor(x, y){
        var options = {
            isStatic: false,
            friction: 0.5
        }

        this.body = Bodies.circle(x, y, 10, options)
        this.r = 10;

        World.add(world, this.body)
    }

    update(){
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body,{x: random(0,400),y: random(0,400)});
        }
    }
    display(){
        push();
        fill("blue")
        ellipse(this.body.position.x, this.body.position.y, this.r)
        pop();
    }
}