var table = document.createElement ("table");
table.border = "1";
table.cellSpacing = "0";
for( i = 0;i<9;i++){
    var tr = document.createElement("tr");
    if (i%2 == 0) {
        tr.style.backgroundColor = "#DCDCDC";
    }
    for(var j = 0;j < 9; j++){
        var td = document.createElement("td");
        td.width = '30px';
        td.height = '30px'
        td.align = 'center';
        td.fontSize = "20px"
        if (j == 0) {
            td.innerText = i;
        } else {
            if (i==0) {
                td.innerText = j;
            } else {
                td.innerText = i*j;
            }
        }
        table.appendChild(tr);
        tr.appendChild(td);
    }
}
document.body.appendChild(table);
table.onmouseover = function (event) {
    target = event.target;
    target.style.backgroundColor = "red"
    var trNum,tdNum;
    trNum = target.parentElement.rowIndex;
    tdNum = target.cellIndex;
 
    for (var l=0; l<=trNum; l++) {
        if(l==trNum){
            for (var k = 0; k <= tdNum; k++) {
                target.parentElement.parentElement.childNodes[l].childNodes[k].style.backgroundColor = "red";
            }
        }else{
            target.parentElement.parentElement.childNodes[l].childNodes[tdNum].style.backgroundColor = "red";
        }
    }
}

table.onmouseout = function (event) {
    target = event.target;
    target.style.backgroundColor = ""
    trNum = target.parentElement.rowIndex;
    tdNum = target.cellIndex;
    for (var l=0; l<=trNum; l++) {
        for (var k = 0; k <= tdNum; k++) {
            target.parentElement.parentElement.childNodes[l].childNodes[k].style.backgroundColor = "";
        }
    }
}