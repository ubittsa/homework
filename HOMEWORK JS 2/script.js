
var a = 5;
var b, c;

b = (a * 5);
b = (c = (b/2));


b = a * 8 b = c = b/2;
var age = prompt("Сколько вам лет?", "");
if (age.replace(/\s/g, '').length === 0 || isNaN(age)) {
  alert('Нужно писать число!');
} else {
var yearBirth = 2019 - age;
alert( "Вы родились в " + yearBirth + " году");
}
var tempDegrees = prompt("Сколько сейчас на вашем градуснике в °C?", "");
if(tempDegrees !== null){
    var tempFar = 1.8*tempDegrees + 32;
    alert("Температура в Фаренгейтах " + tempFar + " °F");
}
var firstNumber = prompt("Введите первое число?", "");
var secondNumber = prompt("Введите второе число?", "");
if(firstNumber !== null || secondNumber !== null){
    var result = Math.round(firstNumber/secondNumber);
    alert(result);
}
var yuorName = prompt("Введите ваше имя","");
if(yuorName !== null){
    alert("Приветствуем вас " + yuorName +"!");
}
var anyString = prompt("Введите строку","");
anyString = anyString.toLowerCase();
if(anyString.indexOf("мама") !== -1){
    alert("В строке есть слово мама");
}else{
    alert("В строке нет слова мама");
}
var yuorGender = confirm("Are you male?");
alert( yuorGender );
var yuorGender = confirm("Are you male?");
var age = confirm("вам исполнилось 18 лет?");
var likeBeer = confirm("Вы любите пиво?");
var driverLicense = confirm("У вас есть водит. удостов.?");
var yuorGender = confirm("Are you male?");
if(yuorGender){
    alert("Вы мужчина")
}else{
    alert("Вы женщина")
}
var age = confirm("вам исполнилось 18 лет?");
if(age){
    alert("Можете смотреть фильм")
}else{
    alert("Вам еще рано смотреть этот фильм")
}
var likeBeer = confirm("Вы любите пиво?");
if(likeBeer){
    alert("У вас может вырасти пивной живот")
}else{
    alert("Пивной живот вам не грозит")
}
var driverLicense = confirm("У вас есть водит. удостов.?");
if(driverLicense){
    alert("Возьмите машину на прокат")
}else{
    alert("Не можем вам дать машину на прокат")
}

var yuorGender = confirm("Are you male?");
var age = confirm("вам исполнилось 18 лет?");
var likeBeer = confirm("Вы любите пиво?");
var driverLicense = confirm("У вас есть водит. удостов.?");
var a = [yuorGender,age,likeBeer,driverLicense];
alert(a);
a[2] = a[0] + a[1];
alert(a[2]);
alert(a);
var a = ["cat","dog","maus","fly"];
a[2] = a[0] + a[1] + a [2];
alert(a);

var car = {
    brend: "Nissan",
    model: "Almera",
    color: "black",
    engine: "petrol",
    power: "106 h.f.",
    age: 9
};
alert(car.model);
var cat = {
    color: "black",
    name: "Tom",
    gender: "male",
    age: 5,
};

car.brend = "Opel";

cat.name = "Bim";

alert(cat.name);

car["brend"] = "Opel";

alert(car["brend"]);

cat["name"] = "Bim";

var age = +prompt("Сколько вам лет?","");
if (age < 0){
    alert("Такого возраста не существует");
}else {
    if(age < 18){
        alert("школьник");
    }else {
        if ( age < 30){
            alert("молодеж");
        }else {
            if (age < 45){
                alert("зрелость");
            }else {
                if ( age < 60){
                    alert("закат");
                }else {
                    alert("как пенсия?");
                }
            }
        }
    }
}
var sizeInput = +prompt("Введите размер одежды (40-54)","");
var sizeUSA;
if(sizeInput == 40){
    sizeUSA = 6;
}else if(sizeInput == 42){
    sizeUSA = 8;
}else if(sizeInput == 44){
    sizeUSA = 10;
}else if(sizeInput == 46){
    sizeUSA = 12;
}else if(sizeInput == 48){
    sizeUSA = 14;
}else if(sizeInput == 50){
    sizeUSA = 16;
}else if(sizeInput == 52){
    sizeUSA = 18;
}else if(sizeInput == 54){
    sizeUSA = 20;
}
alert("Размер USA: " + sizeUSA );
var yuorGender = confirm("Are you male?");
yuorGender?alert("Вы мужчина"):alert("Вы женщина");

var numberAppart = +prompt("Введите номер квартиры","");
var quantityAppart = +prompt("Введите кол-во квартир на этаже","");
var quantityFloor = +prompt("Введите кол-во этажей в доме","");
var a = numberAppart/quantityAppart;
var b = numberAppart/(quantityAppart*quantityFloor);
var d = Math.floor(b);
numberEntrance = Math.ceil(b);
numberFloor = Math.ceil(a - d*quantityFloor);
if(numberFloor === 0){
    numberFloor = quantityFloor;
}
alert("подьезд № " + numberEntrance + " этаж № " + numberFloor);