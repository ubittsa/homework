var credentials = {
    login: 'admin',
    password: 'qwerty',
};
function valid(form) {
    var login = form.login.value;
    var password = form.password.value;
    (credentials.login === login && credentials.password === password)? document.getElementById('box1').classList.add("green"): document.getElementById('box2').classList.add("red");
}