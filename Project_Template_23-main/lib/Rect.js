class Rect{

    constructor(x,y,height,width){

       var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,height,width, options)
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        World.add(world, this.body);
    }
    

    display(){
        var pos = this.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(this.pos.x,this.pos.y,this.height,this.width);
        pop();
    }
}