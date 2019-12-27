function pressBtn() {
  var log = document.getElementById('logIn');
  var pass = document.getElementById('password');
  if (log.value == '' || pass.value == ''){
    alert("Заполнены не все поля!");
    log.style.backgroundColor = 'red';
    pass.style.backgroundColor = 'red';
    return false;
  }

  else if (log.value == 'jz' && pass.value == 'jz'){
    alert("Вы авторизированы!")
    log.style.backgroundColor = "yellowgreen";
    pass.style.backgroundColor = "yellowgreen";
  }

    else if (log.value == '' && pass.value == ''){
        alert('Неверный Логин или пароль')
        log.style.backgroundColor = "blue";
        pass.style.backgroundColor = "blue";
    }
}
