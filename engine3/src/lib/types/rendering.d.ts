declare class Renderer {
    static renderers: Array<RendererComponent>;
    static render(): void;
}
declare abstract class RendererComponent extends Component {
    constructor();
    abstract draw(): void;
    destroy(): void;
}
declare class RectRenderer extends RendererComponent {
    size: Vector;
    settings: () => void;
    constructor(w: number, h: number, drawSettings?: () => void);
    draw(): void;
}
