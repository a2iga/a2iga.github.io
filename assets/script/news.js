var data = [
	{
		news: "доработка UI сайта, а также добавление ссылки в версию посл. релиза в шапке сайта.",
		date: "Вс, 20 июн."
	},{
		news: "активация OLED-темы на сайте, доработка UI, добавлены иконки и правки в Kalium19.",
		date: "Пн, 14 июн."
	},{
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

<div class="col-12">
						<h5><span class="ic ic-list"></span> Новости сайта</h5>
						<template id="news_temp">
							<p><span id="date" class="text-primary"></span> &ndash; <span id="news"></span></p>
						</template>
					</div>
