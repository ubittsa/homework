var persons = [{
    name: "Popa",
    age: 33
  },
  {
    name: "Moy",
    age: 35
  },
  {
    name: "Mita",
    age: 43
  },
  {
    name: "Atvoy",
    age: 12
  },
];

sort(persons, "age");
sort(persons, "name", false);

persons.sort( function (a , b )
{
  return a.age - b.age;
  if ((persons[0]<persons[1]) ==true ){
    return -1;
  }
  else if((persons[0]>persons[1])==true){
    return 1;
  } 
  else {
    return -1;
  }
});


var myMass = ["1",{} ,null, undefined, "500", 700];

var result = myMass.map(function (item, index, arr) {
  var number = parseInt(item);
  return isNaN(number) ? item : number;
});

console.log(result);

////////////////////////////////////////////

var arr = ["0", 5, 3, "string", null];

var result = arr.reduce(function (previousValue, currentValue) {
  
  return typeof currentValue === 'number' ? previousValue * currentValue : previousValue;
  
} ,1);

console.log(result);



var phone = {
  brand: "Samsung",
  model: "S6",
  ram: 4,
  color: "black"
};

function filter(object, search, val) {
  
  for (var key in object) {
    
    if (search != key && object[key] != val) delete object[key];
  
  }

}
filter(phone, "color", 2);
console.log(phone);









function map(object, callback) {
  
  for (var key in object) {
    
    var obj = callback(key, object[key]);
    
    delete object[key];
    
    for (key in obj) object[key] = obj[key];
    
  }
}
var object = {
  name: 'Popa',
  age: 33
};
map(object, function (key, value) { 
  var result = {};
  result[key + "_"] = value + "$";
  return result;  
});
alert(JSON.stringify(object, null, 4));



 function sumTo(n) {
   if (n == 1) return 1;
   return n + sumTo(n - 1);
 }

 alert(sumTo(5));
