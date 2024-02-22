"use strict";
let deltaTime = 0;
let width = 400, height = 400;
function start() {
    let canvas = document.createElement("canvas");
    document.body.insertBefore(canvas, null);
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = "#333333";
    let ctx = canvas.getContext('2d');
    if (ctx == null)
        throw "Canvas rendering context not found!";
    Draw.ctx = ctx;
    Engine.start();
    document.body.addEventListener("keydown", e => {
        Input.keys[e.key] = true;
    });
    document.body.addEventListener("keyup", e => {
        Input.keys[e.key] = false;
    });
    Engine.inverseFramerate = 1000 / 60.0;
    Engine.interval = setInterval(Engine.update, Engine.inverseFramerate);
}
class Engine {
    static lastUpdate = Date.now();
    static interval;
    static inverseFramerate;
    static objects = [];
    static running = false;
    static start() {
        //@ts-ignore
        setup();
        for (const gameObject of Engine.objects) {
            gameObject.start();
        }
        Engine.running = true;
    }
    static update() {
        let now = Date.now();
        deltaTime = (now - Engine.lastUpdate) / Engine.inverseFramerate;
        Engine.lastUpdate = now;
        //@ts-ignore
        draw();
        for (let i = 0; i < Engine.objects.length; i++) {
            const gameObject = Engine.objects[i];
            if (gameObject.destroyed)
                Engine.objects.splice(i--, 1);
            gameObject.update();
        }
        Input.update();
        Renderer.render();
    }
}
class GameObject {
    pos;
    components;
    destroyed = false;
    constructor(x, y) {
        Engine.objects.push(this);
        this.pos = createVector(x, y);
        this.components = [];
    }
    start() {
        for (const component of this.components) {
            component.start();
        }
    }
    update() {
        for (let i = 0; i < this.components.length; i++) {
            const component = this.components[i];
            if (component.destroyed) {
                this.components.splice(i--, 1);
                component.destroy();
            }
            else
                component.update();
        }
    }
    addComponent(component) {
        this.components.push(component);
        component.gameObject = this;
        if (Engine.running)
            component.start();
        return this;
    }
    getComponent(type) {
        for (const component of this.components) {
            if (component instanceof type)
                return component;
        }
    }
    destroy() {
        this.destroyed = true;
        for (const component of this.components)
            component.destroyed = true;
    }
}
class Component {
    gameObject;
    destroyed = false;
    constructor() { }
    getComponent(type) { return this.gameObject.getComponent(type); }
    start() { }
    update() { }
    destroy() { }
}
