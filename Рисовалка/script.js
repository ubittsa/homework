

var canvas = document.getElementById('canvas')
var ctx    = canvas.getContext('2d')

var width  = canvas.width;
var height = canvas.height;

function Drawable(){
    Drawable.prototype.addInstance(this);
}


Drawable.prototype.draw = function(){};
Drawable.prototype.instances = [];
Drawable.prototype.addInstance = function(item){
    Drawable.prototype.instances.push(item);
}

Drawable.prototype.drawAll = function(){
    ctx.clearRect(0,0,width,height);
    for(var i = 0; i<Drawable.prototype.instances.length;i++){
        Drawable.prototype.instances[i].draw();
    }
}

var widthRec,heightRec;
function Rectangle(x,y,width,height,color){
    Drawable.apply(this);

    this.coords   = {x: x || 0, y: y || 0}
    this.width   = widthRec ||10;
    this.height   = heightRec || 10;
    this.color    = color ;
}
Rectangle.prototype = Object.create(Drawable.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.draw = function(){
    console.log('DRAW');
    ctx.fillStyle = this.color;
    ctx.fillRect(this.coords.x, this.coords.y, this.width, this.height);
}
function Circle(x,y,radius,color){
    Drawable.apply(this);

    this.coords   = {x: x || 0, y: y || 0}
    this.radius   = radius || 10;
    this.color    = color  || "red";
}
Circle.prototype = Object.create(Drawable.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(){
    console.log('DRAW');
    ctx.beginPath();
    ctx.arc(this.coords.x, this.coords.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.closePath()
    ctx.fill();
}
function Line(x1,y1,x2,y2,color,lineWidth,opacity){
    Drawable.apply(this);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.lineWidth = lineWidth;
    this.globalAlpha = opacity;
    this.color    = color  || "red";
}
Line.prototype = Object.create(Drawable.prototype);
Line.prototype.constructor = Line;
Line.prototype.draw = function(){
    ctx.beginPath()
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.globalAlpha = this.globalAlpha;
    ctx.lineWidth=this.lineWidth;
    ctx.strokeStyle=this.color;
    ctx.stroke();
    ctx.closePath()
}
function Rectangle1(x1,y1,x2,y2,color,lineWidth,opacity){
    Drawable.apply(this);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.globalAlpha = opacity;
    this.lineWidth = lineWidth;
    this.color    = color  || "red";
}
Rectangle1.prototype = Object.create(Drawable.prototype);
Rectangle1.prototype.constructor = Rectangle1;
Rectangle1.prototype.draw = function(){
    ctx.beginPath()
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.lineTo(this.x1,this.y2);
    ctx.lineTo(this.x1,this.y1);
    ctx.globalAlpha = this.globalAlpha;
    ctx.lineWidth=this.lineWidth;
    ctx.strokeStyle=this.color;
    ctx.stroke();
    ctx.closePath()
}

function draw(evt){
    var tool = document.getElementById('tool').value;
    var obj;
    if (tool == 'line'){
        if (evt.type == 'mousedown') {
            lineStartCoords = {x: evt.clientX, y: evt.clientY};
        }
            if(evt.type == 'mousemove'){
               tempObj = new Line(lineStartCoords.x, lineStartCoords.y, evt.clientX, evt.clientY, document.getElementById('color').value,document.getElementById('lineWidth').value,"0.3")
                Drawable.prototype.instances.splice(-1,1)
                Drawable.prototype.drawAll();
        }
        tempObj.draw();
        if (evt.type == 'mouseup'){
            obj = new Line(lineStartCoords.x, lineStartCoords.y, evt.clientX, evt.clientY, document.getElementById('color').value,document.getElementById('lineWidth').value,"1")
            Drawable.prototype.drawAll();
        }
    }
    if (tool == 'rectangle1'){
        if (evt.type == 'mousedown'){
            lineStartCoords = {x: evt.clientX, y: evt.clientY};
        }
        if(evt.type == 'mousemove'){
            tempObj = new Rectangle1(lineStartCoords.x, lineStartCoords.y, evt.clientX, evt.clientY, document.getElementById('color').value,document.getElementById('lineWidth').value,'0.3')
            Drawable.prototype.instances.splice(-1,1)
            Drawable.prototype.drawAll();
        }
        tempObj.draw();
        if (evt.type == 'mouseup'){
            obj = new Rectangle1(lineStartCoords.x, lineStartCoords.y, evt.clientX, evt.clientY, document.getElementById('color').value,document.getElementById('lineWidth').value,'1')
        }
    }
     if (tool == 'circle'){

        obj = new Circle(evt.clientX,evt.clientY,document.getElementById('Height').value,document.getElementById('color').value)
    }
     if (tool == 'rectangle'){
        obj = new Rectangle(evt.clientX-10,evt.clientY-10,this.width,this.height,document.getElementById('color').value)
    }
    obj.draw()
}
canvas.onmousedown = draw
canvas.onmousemove = function(evt){
    if (evt.buttons && 1){
        draw(evt);
    }
}
canvas.onmouseup = draw
var del = document.getElementById("undo");
del.onclick = function(){
    Drawable.prototype.instances.splice(-1,1)
    Drawable.prototype.drawAll();

}