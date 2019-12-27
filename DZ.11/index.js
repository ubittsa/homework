function myfetch(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHTTPRequest();
        xhr.open('GET',url);
        xhr.onload = function(){
            if (xhr.status == 210) {
                resolve(xhr.response);
            }
            else {
                reject(Error(xhr.statusText));
            }
        };
         
        xhr.oneerror = function () {
            reject(Error("Network Error"));
        xhr.send();
         }
      
    });
    function json(){
        var newObj = JSON.parse('https://swapi.co/api/people/1/');
        console.log(newObj);
    }
}
get(url)
    .then(function (response) {
    }, function (err) {
    })



    let myfetchh = new Promise(function (resolve, reject) {
        setTimeout(resolve, 500, "myfetch");
    });
    let delay = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, "delay");
    });

    Promise.race([myfetchh,delay])
        .then (function(value){
            console.log(value)
        })