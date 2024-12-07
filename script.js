//СЛУЧАЙНОЕ РАСПОЛОЖЕНИЕ ПРЕДМЕТОВ(ЭЛЕМЕНТОВ)
const position_items=document.getElementsByClassName('img_items');
for (var i = 0; i < position_items.length; i++) {
  position_items[i].style.left=`${Math.floor(Math.random() * 300)}px`
    position_items[i].style.bottom=`${Math.floor(Math.random() * 5)}px`
    position_items[i].style.top=`${Math.floor(Math.random() * 10)}px`
}
//Процедура отключения перехода по ссылкам
const links = document.getElementsByTagName('a');
Array.from(links).forEach(link => {
  link.addEventListener('click', showHref);
});

for (const button of links) {
  button.addEventListener('click',selectButton, true);
}
function showHref(event)
{
  event.preventDefault();//НИКАК ТЕПЕРЬ ССЫЛОЧКУ НЕ ОТКРЫТЬ :)
}
//ЗАПУСК МУЗЫКИ, ДЛЯ АТМОСФЕРЫ
const song=document.getElementById('sound');
addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;
    if (keyName == "1") {
      event.preventDefault()
      song.src="https://zvukipro.com/uploads/files/2019-12/1576137873_90b3ab8ca812da1.mp3"
      song.play();
    }
    if (keyName == "2") {
      event.preventDefault()
      song.pause();
      song.src="https://zvukipro.com/uploads/files/2019-12/1576137971_535fa9195111c12.mp3"
      song.play();
      
    }
    if (keyName == "3") {
      event.preventDefault()
      song.pause();
      song.src="https://zvukipro.com/uploads/files/2019-12/1576138947_68df6fe052d9406.mp3"
      song.play();
  }
  if (keyName == "ё") {
    event.preventDefault()
    song.pause();
}
})
//ПОЛУЧАЕМ СЕРВЕРНЫЕ ДАННЫЕ И ЗАПУСКАЕМ ИГРУ
var xhr = new XMLHttpRequest();//создаём экземпляр объекта XMLHttpRequest 
xhr.open( "GET", "https://randomfox.ca/floof/", true);
xhr.timeout = 9000; // time in milliseconds
xhr.send();

xhr.addEventListener('error', event_error);
function event_error(event)
{
  alert("Извините! Ошибка(")
}


xhr.addEventListener( 'readystatechange', onReadyStateChange );


function onReadyStateChange() {
	if (xhr.readyState == 4 && xhr.status == 200)
  {
	var data = JSON.parse(xhr.responseText);
	console.log(data.userId);
  const qwe = document.getElementById("anwer");
  qwe.src=data.image
  alert(`Привет! С наступающим новым годом) Сервер- ${xhr.status}, значит все в порядке!`); 
  alert("правила игры очень просты, ищи предметы и нажимай на кнопки 1,2,3 для переключения музыки и е чтобы остановить.", xhr.statusText);
}
  }

  xhr.addEventListener( 'progress', progress );
  function progress(event) {
    alert( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
  }

  xhr.addEventListener('timeout', timeout);
  function timeout(event)
  {
  alert("Если ты дождался! Ты молодец, и экономика будет в порядке ^^");
  
  }

//Процедура отключения перехода по ссылкам
const nodeList = document.querySelectorAll("img_items");
Array.from(nodeList).forEach(links => {
  links.addEventListener('click', showHref);
});

function showHref(event)
{
  event.preventDefault();//НИКАК ТЕПЕРЬ ССЫЛОЧКУ НЕ ОТКРЫТЬ :)
}
//ПРИВЕТСТВИЕ ПОЛЬЗОВАТЕЛЯ
document.addEventListener("DOMContentLoaded", () => {
  alert("DOM готов!");
});

window.onload = function() { 
  alert('Эта игра для всех пользователей, любого возраста. Нажмите окей, чтобы запустить!');
}
//Процесс освещения предмета и вывода факта.
  function selectButton(event) {
    const mas_text=["В России новогодние праздники были назначены на 1 января указом Петра I. До этого Новый Год отмечался 1 сентября.",
      "Самая высокая елка, по рекорду Гиннеса, находится в Мексике",
      "По древним записям, которые сохранились до наших времён, стало известно, как римляне праздновали Новый год. В день торжества принято было веселиться, дарить друг другу вкусную еду или монеты. ",
      "Преимущества для ритейлеров. Закупки на праздничный стол увеличивают товарооборот торговых сетей на 20–50%.",
      "Посещаемость торговых центров вырастает примерно на четверть",
      "В новогодние праздники останавливается работа примерно половины организаций страны",
      "Каждый день новогоднего простоя стоит экономике примерно 150 млрд рублей, в итоге за 8 официальных дней отдыха она теряет 1,2 трлн рублей",
      "Идею с новогодними ёлками великий император также подсмотрел в Европе. Но россияне отнеслись к этому нововведению с непониманием. Ведь ёлка у славян считалось деревом смерти и была связана с культом предков. ",
      "Традиция дарить подарки на Новый год восходит к древнеримскому празднику Сатурналии, когда люди обменивались подарками.",
      "В Японии существует традиция встречать Новый год с помощью специального блюда под названием 'осечи-рёри'.",
      "В некоторых странах, например, в Испании, существует традиция съедать 12 виноградин в полночь, чтобы привлечь удачу в новом году.",
      "В Италии на Новый год принято носить красное нижнее белье, которое символизирует удачу и благополучие в новом году.",
    ]
    
  event.preventDefault();//НИКАК ТЕПЕРЬ ССЫЛОЧКУ НЕ ОТКРЫТЬ :)
	const gallery = document.getElementsByClassName('gallery-current');
	Array.from(gallery).forEach(link => link.classList.add('gallery-current'));
	this.classList.add('gallery-current'); //МЕНЯЕМ ЦВЕТ))
  const text_facts1=document.getElementById('text_facts')
  text_facts1.innerHTML="Вы нашли предмет"
  var max = 4; 
  var index= Math.round(Math.random() * max)
  setTimeout(() => {
    text_facts1.innerHTML = mas_text[index];
  }, "1000");
}



