
let player

class Player extends Component {
    start() {
        this.rb = this.getComponent(DynamicBoxCollider)
        this.grounded = false
        this.platform = undefined

        this.rb.onCollisionEnter = col => {

            if (col.collider.getComponent(MovingPlatform)) this.platform = col.collider

            if (col.hit.normal.y == -1)
                this.grounded = true
        }

        this.rb.onCollisionExit = col => {
            if (col.collider.getComponent(MovingPlatform)) this.platform = undefined

            if (col.hit.normal.y == -1)
                this.grounded = false
        }
    }

    update() {
        if (Input.keyJustPressed(" ") && this.grounded == true)
            this.rb.vel.y = - 14

        if (this.platform) this.gameObject.pos.x = this.platform.gameObject.pos.x


        if (Input.keyPressed("d"))
            this.rb.vel.x = 9
        else if (Input.keyPressed("a"))
            this.rb.vel.x = -9
        else
            this.rb.vel.x = 0
    }

        

}

class MovingPlatform extends Component {

    dir = 1

    start() {

    }

    update() {
        this.gameObject.pos.x += this.dir

        if (this.gameObject.pos.x < 10) this.dir = 1
        if (this.gameObject.pos.x > 100) this.dir = -1
    }
}

function setup() {
    size(window.innerWidth - 20, window.innerHeight - 20);
    background(51);

    new GameObject(width / 2,height -10)
    .addComponent(new RectRenderer(width+ 10000, 20))
    .addComponent(new BoxCollider(width+10000, 20))

    player = new GameObject(width / 2,height -45)
    .addComponent(new RectRenderer(20, 20))
    .addComponent(new DynamicBoxCollider(20, 20))
    .addComponent(new Player())


    new GameObject(width - 1000 ,height -100)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))


    new GameObject(width / 2 ,height -250)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))

    

     
    new GameObject(width / 2 + 300 ,height -300)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))

    new GameObject(width / 2 ,height -410)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))


    new GameObject(width / 2 ,height -510)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))

    new GameObject(width / 2 ,height -610)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))


    new GameObject(width / 2 ,height -710)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))
    
    new GameObject(width - 1000 ,height -800)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))

    
    new GameObject(width / 2 ,height -960)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))

    new GameObject(width / 2 + 300 ,height -1100)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))


    new GameObject(50, height - 45)
    .addComponent(new RectRenderer(100, 10))
    .addComponent(new BoxCollider(100, 10))
    .addComponent(new MovingPlatform())
    

    new GameObject(width - 1100 ,height -1100)
    .addComponent(new RectRenderer(100, 20))
    .addComponent(new BoxCollider(100, 20))

}

function draw() {
    background(51);

    let y = Math.max(-player.pos.y + height / 2, 0)
    translate(-player.pos.x+width / 2, y);
}