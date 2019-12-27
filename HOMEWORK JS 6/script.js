//a
function a(){
    alert("Привет!");
}
a();
a();

function cube(a){
    return a*a*a;
}
alert(cube(1));
alert(cube(2));
alert(cube(3));

function avg2(a,b){
    return (a+b)/2;
}
alert(avg2(1,2));
alert(avg2(10,5));

function sum3(a,b,c){
    if(c === undefined){
        c = 0;
    }
    return a+b+c;
}
alert(sum3(1,2,3));
alert(sum3(5,10,100500));
alert(sum3(5,10));
alert(sum3(1,2,3,4));

function intRandom(min,max){
    if(max === undefined){
        max = min;
        min = 0;
    }
    return Math.round((Math.random()*(max - min) + min));
}
alert(intRandom(2,15));
alert(intRandom(10));
alert(intRandom(-1,-1));
alert(intRandom(0,1));

function greetAll(name){
    for (var nameOver = "", i = 1; i < arguments.length; i++){
        nameOver += ", " + arguments[i];
    }
    alert("Hello " + name + nameOver);
}
greetAll("Popamen");
greetAll("Popamen", "KernesMan");
greetAll("Popamen", "KernesMan", "Zelenko");

function sum(){
    for (var result = 0, i = 0; i < arguments.length; i++){
        result += + arguments[i];
    }
    return result;
}
alert(sum(1));
alert(sum(2));
alert(sum(10,20,40,100));

function avg(){
    for (var sum = 0,result, i = 0; i < arguments.length; i++){
        sum += + arguments[i];
    }
    return result = sum/i;
}
alert(avg(1));
alert(avg(2));
alert(avg(10,20,40,100));

function aSample(){
    a();
}
function cubeSample(){
    alert(cube(1));
    alert(cube(2));
    alert(cube(3));
}
function avg2Sample(){
    alert(avg2(1,2));
    alert(avg2(10,5));
}
function sum3Sample(){
    alert(sum3(1,2,3));
    alert(sum3(5,10,100500));
    alert(sum3(5,10));
}
function intRandomSample(){
    alert(intRandom(2,15));
    alert(intRandom(10));
    alert(intRandom(-1,-1));
    alert(intRandom(0,1));
}
function greetAllSample(){
    greetAll("Popamen");
    greetAll("Popamen", "KernesMan");
    greetAll("Popamen", "KernesMan", "Zelenko");
}
function sumSample(){
    alert(sum(1));
    alert(sum(2));
    alert(sum(10,20,40,100));
}
function avgSample(){
    alert(avg(1));
    alert(avg(2));
    alert(avg(10,20,40,100));
}
var sample = prompt("Введите название задания: a, cube, avg2, sum3, intRandom, greetAll, sum, avg",'');
switch (sample.toLowerCase()){
    case "a": aSample();
        break;
    case "cube": cubeSample();
        break;
    case "avg2": avg2Sample();
        break;
    case "sum3": sum3Sample();
        break;
    case "intrandom": intRandomSample();
        break;
    case "greetall": greetAllSample();
        break;
    case "sum": sumSample();
        break;
    case "avg": avgSample();
        break;
}

var sample =prompt("Введите название задания: a, cube, avg2, sum3, intRandom, greetAll, sum, avg",'').toLowerCase();
var arrFunctions = {
    a: aSample,
    cube: cubeSample,
    avg2: avg2Sample,
    sum3: sum3Sample,
    intrandom: intRandomSample,
    greetall: greetAllSample,
    sum: sumSample,
    avg: avgSample
}
arrFunctions[sample]();