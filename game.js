console.log("hello world");




let img;
let imgall={};
let speed={};

function load() {
    let px = 0;
    let py = 0;
    for (i= 0 ; i < 10 ; i++) {

        speed[i] = Math.random(10,100);
        imgall[i] = new Sprite("img/Player.png",px,py);
        py = py + 50;

    }

    img = new Sprite("img/Player.png");
    

}

function update() {

    for (i = 0 ; i < 10 ; i++) {
        imgall[i].x = imgall[i].x + speed[i] % 10; 

    }
    

}

function draw(pCtx) { // pCtx = parameter context

    img.draw(pCtx);
    for (i= 0 ; i < 10 ; i ++) {
        imgall[i].draw(pCtx);
    }

}