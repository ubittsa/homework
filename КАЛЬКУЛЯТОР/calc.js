 let table = document.createElement('table');

 for (let i = 0; i < 10; i++) {
  let row = document.createElement('tr');
   for (let j = 0; j < 10; j++) {
     let col = document.createElement('td');
     let val = i * j;
     if (val === 0) {
       val = i || j;
     }
     col.innerHTML = val;
     row.appendChild(col);
   }
   table.appendChild(row);
 }

 document.body.appendChild(table);


 table.onmouseover = function (event) {
   let target = event.target;
   target.style.background = 'pink';

   document.querySelectorAll(".highlight").forEach(
     item => item.classList.remove("highlight")
   );
   target.closest("tr").classList.add("highlight");
   target.closest("table").querySelectorAll("tr").forEach(
     row => row.cells[target.cellIndex].classList.add("highlight")
   );
 };

 table.onmouseout = function (event) {
   let target = event.target;
   target.style.background = '';

   document.querySelectorAll(".highlight").forEach(
     item => item.classList.remove("highlight")
   );
 };
 

 calc.onclick = function plus (){
   var num1,num2,result;
   num1 = document.getElementById('n1').value;
   num1 = parseInt(num1);

   num2 = document.getElementById('n2').value;
   num2 = parseInt(num2);

   result = num1 + num2;
   document.getElementById('result').innerHTML = result;

   n1.oninput = function calc() {
     document.getElementById('result').innerHTML = n1.value;    
   };
   n2.oninput = function calc() {
     document.getElementById('result').innerHTML = n2.value;

     result.value = (+n1.value) + (+ n2.value);
   };
   
   
 };

 
