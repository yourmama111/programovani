let slider;
let p;

let p1, p2, p3;

let gi = 0;

function setup() {
    createCanvas(400, 400);

    slider = createSlider(2, 100, 20, 1);
    slider.elt.oninput = generate;

    p = createP(`${slider.value()}`);

    p1 = createVector(0, 0);
    p2 = createVector(0, height);
    p3 = createVector(width, height);

    frameRate(10)

    // saveGif('gif', slider.value() / 10)
}

function draw() {
    generate();
}

function generate() {
    background(220);
    const lineCount = slider.value();
    p.elt.textContent = lineCount;

    /*
    const stepSize = width / (lineCount - 1);
    for (var i = 0; i < lineCount; i++) {
        
        line(0, i * stepSize, i * stepSize, height);
        
        // const t = i * 1.0 / (lineCount - 1);
        // const p12 = p5.Vector.lerp(p1, p2, t);
        // const p23 = p5.Vector.lerp(p2, p3, t);

        // stroke(0);
        // strokeWeight(1);
        // line(p12.x, p12.y, p23.x, p23.y);

        // const p123 = p5.Vector.lerp(p12, p23, t);
        // stroke(255, 0, 0);
        // strokeWeight(5);
        // point(p123.x, p123.y);
    }
    */

    const a = createVector(0, 0);
    const b = createVector(0, height);
    const c = createVector(width, height);
    const d = createVector(width, 0);

    quadBezier(a, b, c, gi);

    gi = (gi + 1) % lineCount;
    // quadBezier(b, c, d);
    // quadBezier(c, d, a);
    // quadBezier(d, a, b);

    // const w = width / lineCount;
    // for(let i = 0; i < lineCount; i++) {
    //     line(w*i, w*i, w*(i+1), w*i);
    //     // line(w*(i+1), w*i, w*(i+1), w*(i+1));
    // }
}

function quadBezier(p1, p2, p3, i=undefined) {
    const lineCount = slider.value();

    if (i == undefined)
        for (var i = 0; i < lineCount; i++) {
            const t = i * 1.0 / (lineCount - 1);
            const p12 = p5.Vector.lerp(p1, p2, t);
            const p23 = p5.Vector.lerp(p2, p3, t);

            stroke(0);
            strokeWeight(1);
            line(p12.x, p12.y, p23.x, p23.y);
        }
    else {
        const t = i * 1.0 / (lineCount - 1);
        const p12 = p5.Vector.lerp(p1, p2, t);
        const p23 = p5.Vector.lerp(p2, p3, t);

        stroke(0);
        strokeWeight(1);
        line(p12.x, p12.y, p23.x, p23.y);
    }
}