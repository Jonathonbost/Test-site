// 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = [ 'eee.jpg', 'ttt.jpg', 'imrs.webp'];
let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
}

let checkBox = document.querySelector('.hi');


document.querySelector(".hi").addEventListener("click", e => {
	e.preventDefault();
	hi.classList.remove("hi");
	hi.classList.add("hi");
}); // not working yet 