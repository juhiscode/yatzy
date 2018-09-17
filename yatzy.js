
var arvo = [1,1,1,1,1];
var lukko = [0,0,0,0,0];
var kierros = 0;
var pelLkm = 0;
var vuoro = 0;
var nimi = ["","","","","",""];
var heitot = 0;


function Heita() {

	var txt;
	var id_txt;
	var i;
	
    if (heitot > 0) {
	    for (i = 0; i < arvo.length; i++) {
		    if (lukko[i] != 1) {
		        arvo[i] = Math.floor(Math.random() * 6 + 1);
		    }
	    }
	    heitot = heitot - 1;
    }
    paivitaTila();
}


function UusiPeli() {
	
	// Nimien syöttö kenttä esiin
	document.getElementById("annanimet").style.display = "block";
	
}


function Aloita() {
	
	var nimi_txt;
	var luettu;
	var nimikentta_txt;
	
	pelLkm = 0;
	for (i = 1;i < 7;i++) {
		nimi_txt = "annanimi" + String(i);
		luettu = document.getElementById(nimi_txt).value;
		if (luettu != "") {
			nimi[pelLkm] = luettu;
			nimikentta_txt = "nimi" + String(pelLkm+1);
			document.getElementById(nimikentta_txt).textContent = nimi[pelLkm];
			pelLkm = pelLkm + 1;
		}	
	}
	Tyhjenna();
	console.log("Nimet: " + nimi);
	// Nimien syöttö kenttä piiloon
	document.getElementById("annanimet").style.display = "none";
	kierros = 1;
	vuoro = 0;
	heitot = 3;
	paivitaTila();
}


function Tyhjenna() {
	
	var txt;
	
	for (s = 1; s < 7; s++) {
		for (r = 1; r < 19; r++) {
			txt = "P" + String(s) + "R" + String(r);
			document.getElementById(txt).textContent = "";
		}
	}
	//window.alert("Tyhjennä");
}


function Nollaa() {
	
	heitot = 3;
	//document.getElementById("heitot").innerHTML = "Heitot: " + heitot;
	//window.alert("nollaus");
	paivitaTila();
}


function Lukko(index) {
	
	var txt_lukko;

	if (heitot < 3) {	
		switch (lukko[index-1]) {
		case 0:
			lukko[index-1] = 1;
			break;
		case 1:
			lukko[index-1] = 0;
			break;
		}
		paivitaTila();
	}
}


function paivitaTila() {
	
	var i, txt, txt_lukko,id_txt;
	var x;
	
	// Päivitä heittojen määrä
	document.getElementById("heitot").innerHTML = "Heitot: " + heitot;

	// Päivitä vuoro
	document.getElementById("vuoro").innerHTML = "Vuoro: " + nimi[vuoro];

	// Päivitä noppien lukemat
	for (i = 0; i < arvo.length; i++) {
		//txt = noppa_txt(arvo[i]);
		txt = "noppa" + String(arvo[i]) + ".jpg";
		id_txt = "noppa" + String(i+1);
		x = document.getElementById(id_txt);
		x.src = txt;
	}

	// Päivitä lukkojen tila
	for (i = 0;i < 5;i++) {
		txt_lukko = "lukko" + (i + 1);
		switch (lukko[i]) {
			case 0:
			    txt = "-----";
			    break;
			case 1:
				txt  = "VALITTU";
			    break;
			}
			document.getElementById(txt_lukko).innerHTML = txt;
	}
}


function vuoroOhi() {
	
	var t;
	
	for (t = 0; t < arvo.length; t++) {
		lukko[t] = 0;
	}
	vuoro = vuoro + 1;
	if (vuoro > pelLkm-1) {
		vuoro = 0;
		kierros = kierros + 1;
		if (kierros > 15) { laskeTulos();}
	}
	heitot = 3;

	//window.alert("Vuoro ohi");
}


function laskeTulos() {
	
	var txt;
	var summa;
	var num;
	
	for (i = 1;i < pelLkm+1;i++) {
		summa = 0;
		for (j = 1;j < 19;j++) {
			txt = "P" + String(i) + "R" + String(j);
			if (j == 7 || j == 18) {
				document.getElementById(txt).textContent = String(summa);
			} else if (j == 8) {
				if (summa > 62) {
					document.getElementById(txt).textContent = String(50);
					summa = summa + 50;
				} else {
					document.getElementById(txt).textContent = String(0);
				}
			} else {
				num = document.getElementById(txt).textContent;
				if (num != "") {
					summa = summa + parseInt(num);
				}
			}
			//window.alert("txt: " + txt + "summa:" + summa);
		}
	}
}



