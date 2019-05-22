let colors = ['#FF0000', '#FF0000'];
let rand = Math.floor( Math.random() * 10);
let background;

if (rand < 7) { 
    background = colors[0];
} else {
    background = colors[1];
}

if (this.localStorage["background-color"]) {
    background = this.localStorage["background-color"];
} else {
    this.localStorage["background-color"] = background;
}

const testBackground = function() {
    return this.localStorage["background-color"]
};

const clearStorage = function() {
    delete this.localStorage["background-color"];
}

document.getElementById("body-element").style.backgroundColor = background;