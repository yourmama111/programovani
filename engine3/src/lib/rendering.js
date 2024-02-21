"use strict";
class Renderer {
    static renderers = [];
    static render() {
        for (const renderer of Renderer.renderers) {
            renderer.draw();
        }
        Draw.settings.transform.clear();
    }
}
class RendererComponent extends Component {
    constructor() {
        super();
        Renderer.renderers.push(this);
    }
    destroy() {
        Renderer.renderers.splice(Renderer.renderers.indexOf(this), 1);
    }
}
class RectRenderer extends RendererComponent {
    size;
    settings;
    constructor(w, h, drawSettings = () => fill(255)) {
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
