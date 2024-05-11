console.log("hello world");




let img;

function load() {
    img = new Sprite("img/Player.png", 1, 1 );
}

function update() {

}

function draw(pCtx) { // pCtx = parameter context
    img.draw(pCtx);
}