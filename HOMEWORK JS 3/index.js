
var nameHw = prompt("Inpuut name hw(switch: if; prompt: or; confirm: or this days; confirm: if this days; triple prompt; default: or; default: if; login and password; currency calc; currency calc: improved; currency calc: two rates; currency calc: if; scissors; Задание на синий пояс; Задание на черный пояс)","");


switch (nameHw) {

   case "switch: if":
        var color = prompt("Введите цвет", "");
        if (color == "black") {
            document.write("<div style='background-color: black; color: white;'>черный</div>");
        } else {
            if (color == "red") {
                document.write("<div style='background-color: red;'>красный</div>");
                document.write("<div style='background-color: black; color: white;'>черный</div>");
            } else {
                if (color == "green") {
                    document.write("<div style='background-color: green;'>зеленый</div>");
                } else {
                    if (color == "blue") {
                        document.write("<div style='background-color: blue;'>синий</div>");
                        document.write("<div style='background-color: green;'>зеленый</div>");
                    }
                    else {
                        document.write("<div style='background-color: gray;'>Я не понял</div>");
                    }
                }
            }
        }

        break;

    case "prompt: or":
        var age = prompt("Сколько вам лет?", "") || alert("Вы не ввели ваш возраст");
        var yearBirth = 2017 - age;
        if (age) {
            alert("Вы родились в " + yearBirth + " году");
        }
        break;

    case "confirm: or this days":
        confirm("Шоппинг?") || alert("Ты бяка");
        break;

    case "confirm: if this days":
        var a = confirm("Шоппинг?");
        if (!a) {
            alert("Ты бяка");
        }
        break;

    case "triple prompt":
        var surname = prompt("Введите вашу фамилию", "");
        var name = prompt("Введите ваше имя", "");
        var patronymicName = prompt("Введите ваше отчество", "");
        alert(surname + " " + name + " " + patronymicName);
        break;

    case "default: or":
        var surname = prompt("Введите вашу фамилию", "") || "Иванов";
        var name = prompt("Введите ваше имя", "") || "Иван";
        var patronymicName = prompt("Введите ваше отчество", "") || "Иванович";
        alert(surname + " " + name + " " + patronymicName);
        break;

    case "default: if":
        var surname = prompt("Введите вашу фамилию", "");
        var name = prompt("Введите ваше имя", "");
        var patronymicName = prompt("Введите ваше отчество", "");
        if (!surname) {
            surname = "Иванов";
        }
        if (!name) {
            name = "Иван";
        }
        if (!patronymicName) {
            patronymicName = "иванович";
        }
        alert(surname + " " + name + " " + patronymicName);
        break;

    case "login and password":
        var login = prompt("Введите логин", "");
        if (login === "admin") {
            password = prompt("Введите пароль", "");
            if (password === "qwerty") {
                alert("Поздравляем! Добро пожаловать.");
            } else {
                alert("Неправильно ввели пароль!");
            }
        } else {
            alert("Неправильно ввели логин!");
        }
        break;

    case "currency calc":
        var currency = prompt("Enter eur or usd ", " ");
        switch (currency) {
            case "eur":
                var exchange = 31;
                break;
            case "usd":
                var exchange = 26.5;
                break;
        }
        var gryvna = prompt("Enter sum of gryvna UA ", " ");
        var result = Math.round(gryvna / exchange * 100) / 100;
        alert("Yuor sum is " + result + " " + currency);
        break;

    case "currency calc: improved":
        var currency = prompt("Enter eur or usd ", " ").toLowerCase();
        switch (currency) {
            case "eur":
                var exchange = 31;
                break;
            case "usd":
                var exchange = 26.5;
                break;
        }
        var gryvna = prompt("Enter sum of gryvna UA ", " ");
        var result = Math.round(gryvna / exchange * 100) / 100;
        alert("Yuor sum is " + result + " " + currency);
        break;

    case "currency calc: two rates":
        var currency = prompt("Enter eur or usd ", " ").toLowerCase();
        var exchange, exchangeSell, gryvna, result, euro, dollar;
        switch (currency) {
            case "eur":
                confirm("Buy eur?") ? (exchange = 31) && (gryvna = prompt("Enter sum of gryvna UA ", " ")) && (result = Math.round(gryvna / exchange * 100) / 100) : (exchangeSell = 30.5) && (euro = prompt("Enter sum of euro ", " ")) && (result = exchangeSell * euro) && (currency = "gryvnaUA");
                break;
            case "usd":
                confirm("Buy usd?") ? (exchange = 26.5) && (gryvna = prompt("Enter sum of gryvna UA ", " ")) && (result = Math.round(gryvna / exchange * 100) / 100) : (exchangeSell = 26) && (dollar = prompt("Enter sum of usd ", " ")) && (result = exchangeSell * dollar) && (currency = "gryvnaUA");
                break;
        }
        alert("Yuor sum is " + result + " " + currency);
        break;

    case "currency calc: if":
        var currency = prompt("Enter eur or usd ", " ").toLowerCase();
        var exchange, exchangeSell, gryvna, result, euro, dollar;
        if (currency === "eur") {
            var a = confirm("Buy eur?");
            if (a) {
                exchange = 31;
                gryvna = prompt("Enter sum of gryvna UA ", " ");
                result = Math.round(gryvna / exchange * 100) / 100;
            } else {
                exchangeSell = 30.5;
                euro = prompt("Enter sum of euro ", " ");
                result = exchangeSell * euro;
                currency = "gryvnaUA";
            }
        } else {
            var a = confirm("Buy usd?");
            if (a) {
                exchange = 26.5;
                gryvna = prompt("Enter sum of gryvna UA ", " ");
                result = Math.round(gryvna / exchange * 100) / 100;
            } else {
                exchangeSell = 26;
                dollar = prompt("Enter sum of usd ", " ");
                result = exchangeSell * dollar;
                currency = "gryvnaUA";
            }
        }
        alert("Yuor sum is " + result + " " + currency);
        break;

    case "scissors":
        var gamer = prompt("Введите камень, ножница или бумага", "");
        var choiceComp = Math.random();
        if (choiceComp <= 0.33) {
            choiceComp = "камень";
        } else {
            if (choiceComp <= 0.66) {
                choiceComp = "ножницы";
            } else {
                choiceComp = "бумага";
            }
        }
        alert("Выбор компьютера: " + choiceComp);
        if (gamer === choiceComp) {
            alert("ничья");
        } else {
            if ((gamer === "камень") && (choiceComp === "ножницы") || (gamer === "ножницы") && (choiceComp === "бумага") || (gamer === "бумага") && (choiceComp === "камень")) {
                alert("Вы выиграли!");
            } else {
                alert("Вы проиграли!");
            }
        }
        break;

    case "Задание на синий пояс":
        var eurOrUsd, gryvna, ratios, currency;
        (currency = prompt("Enter eur or usd ", " ")) ? (ratios = {usd: {by: 26.5, sell: 26},eur: {by: 31, sell: 30.5}}) && confirm("By " + currency + "?") ? alert("Курс: " + ratios[currency]["by"] + " грн") || (gryvna = prompt("Enter sum of gryvna UA ", " ")) && (result = Math.round(gryvna / ratios[currency]["by"] * 100) / 100) && (alert("Yuor sum is " + result + " " + currency)) : alert("Курс: " + ratios[currency]["sell"] + " грн") || (eurOrUsd = prompt("Enter sum of currency", " ")) && (result = eurOrUsd * ratios[currency]["sell"]) && (currency = "gryvnaUA") && (alert("Yuor sum is " + result + " " + currency)) : alert("Error");
        break;

    case "Задание на черный пояс":
        var gamer, choiceComp = Math.random();
        (gamer = prompt("Введите камень, ножница или бумага", "").toLowerCase()) ? ((choiceComp <= 0.33) ? (choiceComp = "камень") : (choiceComp <= 0.66) ? (choiceComp = "ножницы") : (choiceComp = "бумага")) && (!alert("Выбор компьютера: " + choiceComp)) && (gamer === choiceComp) && (!alert("ничья")) || (gamer === "камень") && (choiceComp === "ножницы") && (!alert("Вы выиграли!")) || (gamer === "ножницы") && (choiceComp === "бумага") && (!alert("Вы выиграли!")) || (gamer === "бумага") && (choiceComp === "камень") && (!alert("Вы выиграли!")) || alert("Вы проиграли!") : alert("error");
        break;
}