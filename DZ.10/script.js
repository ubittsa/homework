
 function makeProfileTimer() {
     var timer = performance.now();
     return function () {
       var timer2 = performance.now();
       alert(timer2 - timer);
     };
   }
   var doSomething = makeProfileTimer();
   doSomething();


    function makeSaver(arg) {
      let result ;
      let x = !1;
      return function () {
        return x ? result : (x = !0, result = arg());
      };
    }
    var saver = makeSaver(Math.random);
    value1 = saver();
    value2 = saver();
    alert(value1 === value2);



var num = 5;
function startTimer() {

  var timer= setInterval(function () {
    console.log(num);
    num = num - 1;
    if (num <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}
startTimer();


function myBind(func, context, bindArgs) {

  function wrapper() {
    var args = Object.assign(bindArgs, arguments);
    return func.apply(context, args);
    var min = Math.min.apply(chessMin);
  }
  return wrapper;
  
}
var chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9]);
chessMin(-1, -5, 3, 15);
var pow5 = myBind(Math.pow, Math, [undefined, 5]);
var cube = myBind(Math.pow, Math, [undefined, 3]);
alert(pow5(2)); //32
alert(cube(3)); //27
var zeroPrompt = myBind(prompt, window, [undefined, "0"]);
var someNumber = zeroPrompt("Введите число");
alert(someNumber);
