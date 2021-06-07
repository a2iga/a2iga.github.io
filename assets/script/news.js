var data = [
	{ 
		news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae quisquam necessitatibus exercitationem porro nisi repudiandae beatae sunt accusamus laudantium quas laborum, labore officiis, nulla dolor molestias incidunt quo sequi.", 
		date: "Пт, 1 янв." 
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