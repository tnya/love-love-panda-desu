var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

/* HACER forEach y crear un div para almacenar nuevas fotos */
var photos = document.getElementsByClassName('pandas')[0];

pictures.forEach(function(elements){
	var img = document.createElement('img') // <img/>		
	img.setAttribute("src",elements);
	img.setAttribute("class","cuatropandas");
	photos.appendChild(img);	
	})


