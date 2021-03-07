class Bob{

    constructor(x, y, radius){

        var options = {
            isStatic : true,
            restitution :0.8,
            friction:1.0,
            density:1.0
        }

        this.body   = Bodies.circle(x, y, radius, options);
        this.radius  = radius
        this.image = loadImage("gold bob.png");
        World.add(world, this.body); 

        

    }

    display(){

        image(this.image, this.body.position.x, this.body.position.y, this.radius);

    }

}