"use strict";

let iterator = 0;

let center;
let center_overlay;

let right_panel;
let left_panel;

let content = [];

let images;

let preloadImages = [];
let pages = 10;

let bookmarks = [0, 1, 3, 5, 7];

let dots = [];

function preloader(){
  for(let i = 0; i < pages; i++){
    preloadImages[i] = new Image();
    preloadImages[i].src = arguments[i];
  }
}

function loadVideo(div){
	let iframes = div.querySelectorAll('iframe');
	iframes.forEach(function(iframe) {
 	 	if (iframe !== null && iframe.src == "") {
    	iframe.src = iframe.getAttribute('data-src');
 	 	}
	});
}

function stopVideo(div){
  let iframe = div.querySelector('iframe');
  let video = div.querySelector('video');
  if (iframe !== null) {
    let iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
  if(video !== null){
    video.pause();
  }
}

function initBookmarks(){
	let buttons = document.querySelectorAll(".bookmark");
	buttons.forEach(function(button, i) {
 	 	button.onclick = function(event){
			if(iterator != bookmarks[i]){
				changePage(event, bookmarks[i]);
			}
		};
	});
}

function initDots(){
	let dot_div = document.getElementById("dot-div");
	for(let i = 0; i < pages; i++){
		let dot = document.createElement("div"); 
		dot.classList.add("dot");
		dot_div.appendChild(dot);
		dots.push(dot);
	}
	updateDots(iterator);
}

function updateDots(it){
	for(let i = 0; i < pages; i++){
		if(i == it){
			dots[i].style.backgroundColor = "#90A4AE";
			console.log(dots[i]);
		}else{
			dots[i].style.backgroundColor = "#B0BEC5";
		}
	}
}

function changePage(event, toPage){

	let id;

	if(iterator < toPage){
		id = "right";
	}else{
		id = "left";
	}

	let fade_out = "fade-out-"+id;
	let fade_in = "fade-in-"+id;

	let fade_out_o;
	let fade_in_o;

	if(id == 'right'){
		fade_out_o = "fade-out-left";
		fade_in_o = "fade-in-left";
	}else{
		fade_out_o = "fade-out-right";
		fade_in_o = "fade-in-right";
	}
	
	if(!content[iterator].classList.contains(fade_out)){
		content[iterator].classList.remove(fade_in);
		content[iterator].classList.remove(fade_in_o);
		content[iterator].classList.remove(fade_out_o);
		content[iterator].classList.add(fade_out);
		stopVideo(content[iterator]);
	}else{
		content[iterator].classList.remove(fade_out);
		content[iterator].classList.remove(fade_in_o);
		content[iterator].classList.remove(fade_out_o);
	}

	iterator = toPage;

	updateDots(iterator);
	hidePanels();
	loadVideo(content[iterator]);

	if(!content[iterator].classList.contains(fade_in)){
		content[iterator].classList.remove(fade_out);
		content[iterator].classList.remove(fade_in_o);
		content[iterator].classList.remove(fade_out_o);
		content[iterator].classList.add(fade_in);
	}else{
		content[iterator].classList.remove(fade_in);
		content[iterator].classList.remove(fade_in_o);
		content[iterator].classList.remove(fade_out_o);
	}

	//center.style.backgroundImage = images[iterator];
}

function hidePanels(){
	if(iterator == 0){
		left_panel.style.visibility = "hidden";
		right_panel.style.visibility = "visible";
	}else if(iterator == pages-1){
		left_panel.style.visibility = "visible";
		right_panel.style.visibility = "hidden";
	}else{
		left_panel.style.visibility = "visible";
		right_panel.style.visibility = "visible";
	}
}

window.onload = function(){
	
  preloader(
    //"billtidus.JPG",
    //"test.jpg",
    //"ok hand.png"
  );
	
  iterator = 0;

  center = document.getElementById("center-content");
  center_overlay = document.getElementById("center-overlay");

  right_panel = document.getElementById("right-panel");
	left_panel = document.getElementById("left-panel");
  left_panel.style.visibility = "hidden";

  //images = ["url('billtidus.JPG')", "url('test.jpg')", "url('ok hand.png')"];

  for(let i = 1; i <= pages; i++){
    let item = document.getElementById("right"+String(i));
    content.push(item);
    if(i == 1){
      item.style.opacity = 1;
    }else{
      item.classList.add('init');
    }
  }

  right_panel.onclick = function(event){
		changePage(event, iterator+1);
	};

	left_panel.onclick = function(event){
    changePage(event, iterator-1);
  }

	initBookmarks();
	initDots();

}