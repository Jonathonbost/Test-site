// // 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = [ 'eee.jpg', 'ttt.jpg', 'imrs.webp'];
let i = 0;
let clicker = document.getElementById("#uta")
const body = document.querySelector('body')

function prev(){

	if(i <= 0) i = images.length;	
	i--;
	
	return setImg(); 
}

function nxt(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function next(){
setInterval(() => {
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();
},1500);
}


function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
}


body.onload = next;

