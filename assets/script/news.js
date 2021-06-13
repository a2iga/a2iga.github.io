var data = [
	{
		news: "перенос сайта (+ перепись) на базу фреймворка Kalium19.",
		date: "Пн, 7 июн."
	},{
		news: "релиз сайта.",
		date: "Сб, 5 июн."
	}
]

var t = document.querySelector('#news_temp');

for (var i = 0; i < data.length; i++) {

	var n = data[i];
	var c = t.content.cloneNode(true);
	var l = c.querySelectorAll('#news');
	var d = c.querySelectorAll('#date');

	l[0].textContent = n.news;
	d[0].textContent = n.date;

	t.parentNode.appendChild(c);

}
