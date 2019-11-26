var listaMeteorits = [];
var listCoordenades = [];

function mostrarLista (){
	document.write("LISTA METEORITS NORMAL")
	document.write("<pre>");
	document.write("Tipo de dato lista meteorits: "+typeof(listaMeteorits));
	//console.log(Object.keys(listaMeteorits));
	document.write("</pre>")
} 

function orderList ( array , string ){

	var llistaOrdenada = [];

	if(string == 'asc'){	
		//lllista ascendent
		llistaOrdenada = array.sort();
	}
	else if(stering == 'desc'){
		//lllistaOrdenada descendent
		llistaOrdenada = array.reverse();
	}
	else{
		document.write("Error!")
	}
	return llistaOrdenada
	//ordena ascendent : arrayNuymeric = array.sort(function(a, b){return a-b});
} 

function filterLetter( array , string){
	console.log("Entra"+string);
	var llistaFiltrada = [];
	string = string.toUpperCase();
	if(/[A-Z]/.test(string)){
		console.log("Entra"+string);
		return llistaFiltrada = array.filter(meteorit => meteorit.charAt(0) == string);
	}else{
		document.write("Error!");
	}

}

function searchList(){
	var search = prompt("Escriu el nom del meteorit que vols buscar: ");

	var indexMeteorit =  listaMeteorits.indexOf(search);
	console.log("Indice que busco: "+indexMeteorit);

	if(indexMeteorit!=-1){
		return indexMeteorit;
	}else{
		document.write("Meteorit no trobat.");
	}
	
}

function printList(list){

		for(var i = 0; i< list.length; i++){
			document.write(list[i]);
			document.write("</br>")
		}	

}

	 var makers = [];
      var map;
function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:41.412589, lng: 2.177127},
		zoom: 13
		});

		for(var k = 0; k < listCoordenades.length; k++){
			console.log(listCoordenades[k][2]);
			makers.push( new google.maps.Marker({
				position: {lat: listCoordenades[k][0], lng: listCoordenades[k][1]},
				map: map,
			title: listCoordenades[k][2]
			}));
		}
}

	
$( document ).ready(function() {
    

	var urlEarthMeteorite = "js/data/earthMeteorites.json";

	$.ajax({					
		async: false,
		url: urlEarthMeteorite
	})
	.done(function( data ) {

		var meteorits = data;
		console.log(data);
		// alert(mateorits);
		// alert(mateorits.length);
		
		//Llista de meteorits per nom
		for(var i = 0; i< meteorits.length; i++){
			//console.log(meteorits[i].name);
			listaMeteorits.push(meteorits[i].name);
		}

		//Llista de coordenades
		for(var x = 0; x< meteorits.length; x++){

			if(meteorits[x].geolocation!=null){

			listCoordenades.push(meteorits[x].geolocation.coordinates);
			//console.log(meteorits[x].id);
			listCoordenades[listCoordenades.length-1][2]=meteorits[x].name;
			//console.log(listCoordenades[listCoordenades.length-1][2])	
			//console.log("indice: "+x);
			//console.log((meteorits[x].geolocation.coordinates));
		}
	

		}
		//console.log("Lista coordenades: "+ listCoordenades[0][0]);

	});

	// mostrarLista();
	// orderList();
	//printList(filterLetter(listaMeteorits,"a"));
	//searchList();
	//printList(listaMeteorits);
	//initMap() 
});