
async function jsonPost(url, data) {
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (response.ok && response.status === 200) { // если HTTP-статус 200
        return await response.json();
        console.log(result);
    }
    else {
        alert("status is not 200: " + response.status);
    }
}


async function sendMessage(nick, message) {
    const url = "http://students.a-level.com.ua:10012";
    let data = {func: 'addMessage', nick: nick.value, message: message.value};
    message.value = '';
    return await jsonPost(url, data);
}

async function sendAndCheck() { // использует две предыдущие для минимизации задержки между отправкой сообщения и приходом их. Именно эта функция должна запускаться по кнопке
    const nick = document.getElementById('nick');
    const message = document.getElementById('message');
    await sendMessage(nick, message); // отсылает сообщение
    await getMessages(); // получает сообщения и отрисовывает их в DOM
}
const btn = document.getElementById('btn');
btn.onclick = sendAndCheck;

(async function checkLoop() { //  бесконечный цикл для периодического запуска getMessages()
    while (true) {
        await new Promise(function (resolve) {
            setTimeout(async () => resolve(await getMessages()), 2000);
        });
    }
})();

let numId;
numId = numId || 0;

async function getMessages() { // получает сообщения и отрисовывает их в DOM
    let result = await jsonPost("http://students.a-level.com.ua:10012", {func: 'getMessages', messageId: numId});

    numId = result.nextMessageId;
    let arr = result.data;
    const re = /(?:\sGMT.[0-9]{0,5}\s)/;
    const localeFound = new Date().toString().match(re);

     for (let key in arr) {
        const msgDiv = document.createElement('div');
        const timeSpan = document.createElement('span');
        timeSpan.className = 'my-time';

        let date = new Date(arr[key].timestamp);
        let dateStr = date.toString();
        let stampFound = dateStr.match(re);

        if (localeFound[0] !== stampFound[0]) {
            console.log(`часовые пояса НЕ совпадают: ${localeFound[0]} и ${stampFound[0]}`);
        }
        else {
            console.log(`часовые пояса совпадают: ${localeFound[0]} и ${stampFound[0]}`);
        }
        let timeStr = `${date.toLocaleDateString().slice(0, -4)}${date.toLocaleDateString().substr(-2)} ${date.toLocaleTimeString()}`;
        if (new Date().toLocaleDateString() === date.toLocaleDateString()) {
            timeStr = `${date.toLocaleTimeString()}`;
        }

        timeSpan.innerText = timeStr;
        const nickSpan = document.createElement('span');
        nickSpan.innerText = `${arr[key].nick}`;
        nickSpan.className = 'my-nick';

        const msgSpan = document.createElement('span');
        msgSpan.className = 'my-message';

        let str = arr[key].message + '';
        str = await replaceSmiles(arr[key].message + '') ;
        str = await YouTubeGet(str +'');
        msgSpan.innerHTML = str;
/*
        let regExp = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
        let matche = match(regExp)
        if (matche){
            return matche[1]
        }
        else{

        }
        console.log(matche);
*/

        msgDiv.appendChild(timeSpan);
        msgDiv.appendChild(nickSpan);
        msgDiv.appendChild(msgSpan);
        chatHistory.appendChild(msgDiv);

    }
}


async function replaceSmiles(str = '') { // заменяет текст на сайлы
    if (!str) {
        return null;
    }

    //console.log(smiles)// = await response.json();

        for (var [key, value] of Object.entries(smiles)){

            while (true) {
                if (str.indexOf(`:${key}:`) === -1) { // поиск смайла в строке. вернет индекс элем. или -1
                break; // выход если нет совпадения
                }

             str = str.replace(`:${key}:`, `<img width="32" src="${value}">`); // заменяю на img

            }
        }
        return str;
}



function YouTubeGet(url){
    let regExp = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
        let matche = url.match(regExp)
        if (matche){

            return (`<iframe width="260" height="150"  src="https://www.youtube.com/embed/${matche[1]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` )
          
        }
        else{
            return url
        }
}
 console.log(YouTubeGet('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));





