// ! rx1310 <rx1310@inbox.ru> | Copyright (c) rx1310, 2021 | MIT License

/* themeEngine.js
 ? Данный скрипт просто переключает тему, но вдобавок
 ? сохраняет настройку темы в LocalStorage. Благодаря этому
 ? при след. посещении страницы тема пользователя останется такой же,
 ? какую он выбрал в прошлый раз. */

// * Взято отсюда: https://github.com/rx1310/VanillaCoreX/blob/vanilla/js/corex.js

const theme = {
	key: 'kalium19_theme',
	light: 'theme-light',
	dark: 'theme-dark',
	oled: 'theme-oled'
};

/* setTheme()
 ? Данная функция позволяет сменить тему на одну из двух.
 * Пример: onclick="setTheme('theme-light')" - тема сменится на светлую.
 * Аналогично если вместо `theme-light` использовать `theme-dark`, то будет темная. */

function setTheme(themeName) {
	localStorage.setItem(theme.key, themeName);
	document.documentElement.className = themeName;
	if (themeName == theme.light) console.info("%c" + themeName, "color: #fff; background-color: #1a73e9")
	if (themeName == theme.dark) console.info("%c" + themeName, "color: #202124; background-color: #8ab4f8")
	if (themeName == theme.oled) console.info("%c" + themeName, "color: #fff; background-color: #000")
}

/* toggleTheme()
 ? Данная функция не принимает никаких данных. При ее выполнении тема сменится
 ? на светлую если стоит темная и наоборот. По сути обычный тогл)) */
function toggleTheme() {
	if (localStorage.getItem(theme.key) === theme.dark) {
		setTheme(theme.light);
	} else {
		setTheme(theme.dark);
	}
}

function applyTheme() {
	if (localStorage.getItem(theme.key) === theme.dark) {
		setTheme(theme.dark);
	} else if (localStorage.getItem(theme.key) === theme.oled) {
		setTheme(theme.oled);
	} else {
		setTheme(theme.light);
	}
} applyTheme();
