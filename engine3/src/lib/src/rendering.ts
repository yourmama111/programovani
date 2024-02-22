class Renderer {
    static renderers: Array<RendererComponent> = [];

    static render() {
        for (const renderer of Renderer.renderers) {
            renderer.draw();
        }
        Draw.settings.transform.clear();
    }
}

abstract class RendererComponent extends Component {

    constructor() {
        super();
        Renderer.renderers.push(this);
    }

    abstract draw(): void;

    destroy(): void {
        Renderer.renderers.splice(Renderer.renderers.indexOf(this), 1);
    }
}

class RectRenderer extends RendererComponent {

    size: Vector;
    settings: () => void;

    constructor(w: number, h: number, drawSettings = () => fill(255)) {
        super();
        this.size = createVector(w, h);
        this.settings = drawSettings;
    }

    draw() {
        push();
        this.settings();
        rect(this.gameObject.pos.x - this.size.x / 2, this.gameObject.pos.y - this.size.y / 2, this.size.x, this.size.y);
        pop();
    }
}