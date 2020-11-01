/*
  Thanks to POWELL Kevin for his YouTube tutorial.
  https://www.youtube.com/watch?v=wodWDIdV9BY
*/


let lightMode = localStorage.getItem('lightMode');
const lightModeToggle = document.querySelector('#light-mode-toggle');

const enableLightMode = () => {
	document.body.classList.add('lightmode');
	document.getElementById("engineLogo").classList.add('invert');
	localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
	document.body.classList.remove('lightmode');
	document.getElementById("engineLogo").classList.remove('invert');
	localStorage.setItem('lightMode', null);
}

if (lightMode === 'enabled') {
	enableLightMode();
}

lightModeToggle.addEventListener('click', () => {
	lightMode = localStorage.getItem('lightMode');
	if (lightMode !== 'enabled') {
		enableLightMode();
		console.log(lightMode);
	} else {
		disableLightMode();
		console.log(lightMode);
	}
});
