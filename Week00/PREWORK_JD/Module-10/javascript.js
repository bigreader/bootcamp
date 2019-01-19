document.getElementById("button1").addEventListener("click", function(){
	document.getElementById("box").style.height = "250px";
	document.getElementById("box").style.width = "250px";
});

document.getElementById("button2").addEventListener("click", function(){
	document.getElementById("box").style.backgroundColor = "#38f";
});

document.getElementById("button3").addEventListener("click", function(){
	document.getElementById("box").style.opacity = "0.5";
});

document.getElementById("button4").addEventListener("click", function(){
	document.getElementById("box").style.border = "solid #3d5 4px";
});

document.getElementById("button5").addEventListener("click", function(){
	document.getElementById("box").style.height = "25px";
});

document.getElementById("button6").addEventListener("click", function(){
	document.getElementById("box").style.float = "right";
});

document.getElementById("buttonReset").addEventListener("click", function(){
	var box = document.getElementById("box");
	box.style.height = "150px";
	box.style.width = "150px";
	box.style.backgroundColor = "orange";
	box.style.opacity = "1";
	box.style.border = "none";
	box.style.float = "none";
});