function slide1(){
	document.getElementById('banner1').src='./imagens/banner2.png';
	setTimeout('slide2()', 3000);
}

function slide2(){
	document.getElementById('banner2').src='./imagens/banner3.png';
	setTimeout('slide3()', 3000);
}

function slide3(){
	document.getElementById('banner3').src='./imagens/banner4.png';
	setTimeout('slide1()', 3000);
}