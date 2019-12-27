

let body={
  paired:true,
  tagName: 'body',
  children: [
    {
      paired: true ,
      tagName: 'div',
      children: [
        {
          paired: true,
          tagName: 'span', 
          children: "Enter a data please"},
                {
                    tagName: "br",
                    paired: false,
                },
                {
                    tagName: "input",
                    paired: false,
                    attr: {
                        type: "text",
                        id: "name"
                    }
                },
                 {
                    tagName: "input",
                    paired: false,
                    attr: {
                        type: "text",
                        id: "surname"
                      }
                }
      ]
    }
  
    ,
    {
            tagName: "div",
            paired: true,
            children :
            [
              {
                    tagName: "button",
                    paired: true,
                    text:"OK",
                    attr:{
                        id:"ok",
                         }
                },
                {
                    tagName: "button",
                    paired: true,
                    text:"cancel",
                    attr:{
                        id:"cancel",
                    }
                }
              ]
    }
  ]

}
alert(body.children[1].children[1].text);
alert(body.children[0].children[3].attr.id);

var notebook = {
    brand: prompt("Enter a brand of notebook","HP"),
    type:  prompt("Enter a type of notebook","440 G4"),
    model: prompt("Enter a model of notebook","Y7Z75EA"),
    ram: +prompt("Enter a ram of notebook","4"),
    size: prompt("Enter a size of notebook","14"),
    weight: +prompt("Enter a weight of notebook","1.8"),
    resolution: {
        width: +prompt("Enter a width of notebook","1920"),
        height: +prompt("Enter a height of notebook","1080"),
    },
}
var phone={
    brand: prompt("Enter a name of phone","meizu"),
    model: prompt("Enter a model of phone","m2"),
    ram: +prompt("Enter a ram of phone","2"),
    color: prompt("Enter a color of phone","black"),
}
var person = {
    name: prompt("Enter a name"),
    surname: prompt("Enter a surname"),
    married: confirm("Are yuo married?"),
}

var notebook = {
    brand: "HP",
    type:  "440 G4",
    model: "Y7Z75EA",
    ram: 4,
    size: "14",
    weight: 1.8,
    resolution: {
        width: 1920,
        height: 1080,
    },
};
var phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};
var person = {
    name: "Donald",
    surname: "Trump",
    married: true,
}
person.smartphone = phone;
person.laptop = notebook;
notebook.owner = person;
phone.owner = person;
alert((person.smartphone.owner.laptop.owner.smartphone == person.smartphone)?"true":"false");

var arr = [];
arr[0] = prompt("Enter something");
arr[1] = prompt("Enter something");
arr[2] = prompt("Enter something");
console.log(arr);


var a = false;
while (a=== false){
    a = confirm("Закончить?");
}

do{
    var a;
    a = confirm("Закончить?");
}while(a === false);

var a,arr = [];
do{
    arr.push(a = prompt("Enter element ",""));
    if(!a){
      arr.pop();
    }
}while(a);
alert(arr);

var a,i = 0,arr = [];
do{
    arr[i] = a = prompt("Enter ","");
    if(!a){
        arr.pop();
    }
    i++;
}while(a);
alert(arr);

var a,i = 0;
while(1){
    a = Math.random();
    if(a > 0.9){
        break;
    }
    i++;
}
alert(i);

do{
    var a = prompt("Enter something ","");
}while(a === null);

var sum = 0,i,n = prompt("Enter number for sum", "");
for(i=1;i <= n; i+= 3){
    sum += i;
}
alert(sum);

var i = '#';
var str = "";
var n = +prompt("Enter length of string","5");
for (j=0;j<5;j++){
    str += i;
}
console.log(str);

for (var str = "",i=0;i<10;i++){
    for (j=0;j<10;j++){
        str += j;
    }
   str = str + '\n';
}
alert(str);

var numberOfrows = +prompt("Enter the number of rows","10");
var widthOfstring = +prompt("Enter the width of string","12");
for (var str = "",i=1;i<=numberOfrows;i++){
    if(i%2){
        var a = '.', b = '#';
    }else{
        var a = '#', b = '.';
    }
    for (j=1;j<=widthOfstring;j++){
        if(j%2){
            str += a;
        }else{
            str += b;
        }
    }
    str = str + '\n';
}
alert(str);


var arr = [];
var n = +prompt("Enter a number of elements","");
for(var i = 0;i < n;i++){
    arr[i] = i*i*i;
}
alert(arr);

var arr = [];
for(var i = 0;i < 10;i++){
    arr[i] = [];
    for(var j = 0;j < 10;j++){
        arr[i][j] = i*j;
    }
}
alert(arr[5][6]);
alert(arr[7][2]);
console.log(arr);

var arr = [];
document.write("<table border='1px'>");
for(var i = 1;i < 10;i++){
    arr[i] = [];
    document.write("<tr style='height:30px;'>");
    for(var j = 1;j < 10;j++){
        arr[i][j] = i*j;
        document.write("<td style='width:30px;text-align:center;'>" +arr[i][j]+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

for (var str = "",i=0;i<6;i++){
    for (var j=1;j<=11;j++){
        switch(i){
            case 0:if(j==6){
                str += '#';
            }else{
                str += '.';
            }
                break;
            case 1:if(j==5||j==6||j==7){
                str += '#';
            }else{
                str += '.';
            }
                break;
            case 2:if(j==4||j==5||j==6||j==7||j==8){
                str += '#';
            }else{
                str += '.';
            }
                break;
            case 3:if(j==1||j==2||j==10||j==11){
                str += '.';
            }else{
                str += '#';
            }
                break;
            case 4:if(j==1||j==11){
                str += '.';
            }else{
                str += '#';
            }
                break;
            case 5:str += '#';
                break;
        }
    }
    str = str + '\n';
}
console.log(str);
