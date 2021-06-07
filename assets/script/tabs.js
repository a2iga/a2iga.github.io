let indexOpen = 0;

let btnTab = document.querySelectorAll('.topbar-tabs--tab');
let contentTab = document.querySelectorAll('.layout');

function tabCurrent(thisTab) {
    let idCurrent = thisTab.dataset.tab;

    for (let i = 0; i < btnTab.length; i++) {
        btnTab[i].classList.remove('current');
    }
    thisTab.classList.add('current');

    for (let i = 0; i < contentTab.length; i++) {
      if (idCurrent === contentTab[i].id) {
        contentTab[i].classList.add('current');
				window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        contentTab[i].classList.remove('current');
      }
    }
}

for (let i = 0, len = btnTab.length; i < len; i++) {
  btnTab[i].onclick = function() {
   tabCurrent(this);
  }
}

// function fadeIn(el) {

// 	var opacity = 1;

// 	var timer = setInterval(function() {

// 		if(opacity <= 0.1) {

// 			clearInterval(timer);
// 			document.querySelector(el).style.display = "none";

// 		}

// 		document.querySelector(el).style.opacity = opacity;

// 		opacity -= opacity * 0.1;

// 	}, 10);

// }

tabCurrent(btnTab[indexOpen]);
