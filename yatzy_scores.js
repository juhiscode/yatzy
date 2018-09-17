
var osumat = [0,0,0,0,0,0];

function Testi2() {
	
	laskeTulos();
	//LaskeOsumat();
	//window.alert(osumat);
/*	
    var teksti;
	var numero;
	var tyyppi;

	
    // Hae arvo
    teksti = document.getElementById("nimi1").textContent;
	numero = parseFloat(document.getElementById("P1R1").textContent);
	tyyppi = typeof teksti;
	
	window.alert(teksti + ", " + numero);
	
	//document.getElementById("nimi1").textContent = "Juha";
*/
}	


function LaskeOsumat() {
	
	for (r = 0; r < osumat.length; r++) {
		osumat[r] = 0;
	}
	
	for (r = 0; r < osumat.length; r++) {
		for (s = 0; s < arvo.length; s++) {
			if (arvo[s] == r + 1) {
				osumat[r] = osumat[r] + 1;
			}
		}
	}
}	


function Ykkoset() {
	
	var id;
	var teksti;
	var pisteet;

	if (heitot < 3) {	
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R1";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			pisteet = osumat[0] * 1;
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Kakkoset() {
	
	var id;
	var teksti;
	var pisteet;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R2";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			pisteet = osumat[1] * 2;
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Kolmoset() {
	
	var id;
	var teksti;
	var pisteet;
	
	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R3";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			pisteet = osumat[2] * 3;
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Neloset() {
	
	var id;
	var teksti;
	var pisteet;

	if (heitot < 3) {	
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R4";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			pisteet = osumat[3] * 4;
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Viitoset() {
	
	var id;
	var teksti;
	var pisteet;
	
	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R5";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			pisteet = osumat[4] * 5;
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Kuutoset() {
	
	var id;
	var teksti;
	var pisteet;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R6";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			pisteet = osumat[5] * 6;
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Pari() {
	
	var id;
	var teksti;
	var pisteet;
	var pari_num;
	var pari;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R9";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			pari = 0;
			for (i = 0;i < osumat.length;i++) {
				if (osumat[i] >= 2) {
					pari_num = i + 1;
					pari = 1;
					console.log("i: " + i + ", pari_num: " + pari_num + ", pari: " + pari);
				}
			}
			if (pari == 1) {
				pisteet = 2 * pari_num;
			} else {
				pisteet = 0;
			}
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function kaksiParia() {
	
	var id;
	var teksti;
	var pisteet;
	var pari1_num;
	var pari1;
	var pari2_num;
	var pari2;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R10";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			pari1 = 0;
			pari2 = 0;
			for (i = 0;i < osumat.length;i++) {
				if (osumat[i] >= 2) {
					pari1_num = i + 1;
					pari1 = 1;
					//console.log("i: " + i + ", pari_num: " + pari_num + ", pari: " + pari);
				}
			}
			for (i = 0;i < osumat.length;i++) {
				if ((osumat[i] >= 2) && ((pari1_num - 1) != i)) {
					pari2_num = i + 1;
					pari2 = 1;
					//console.log("i: " + i + ", pari_num: " + pari_num + ", pari: " + pari);
				}
			}
			if (pari1 == 1 && pari2 == 1) {
				pisteet = 2 * pari1_num + 2 * pari2_num;
			} else {
				pisteet = 0;
			}
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Kolmiluku() {
	
	var id;
	var teksti;
	var pisteet;
	var trio_num;
	var trio;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R11";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			trio = 0;
			for (i = 0;i < osumat.length;i++) {
				if (osumat[i] >= 3) {
					trio_num = i + 1;
					trio = 1;
					//console.log("i: " + i + ", pari_num: " + pari_num + ", pari: " + pari);
				}
			}
			if (trio == 1) {
				pisteet = 3 * trio_num;
			} else {
				pisteet = 0;
			}
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Neliluku() {
	
	var id;
	var teksti;
	var pisteet;
	var neli_num;
	var neli;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R12";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			neli = 0;
			for (i = 0;i < osumat.length;i++) {
				if (osumat[i] >= 4) {
					neli_num = i + 1;
					neli = 1;
					//console.log("i: " + i + ", pari_num: " + pari_num + ", pari: " + pari);
				}
			}
			if (neli == 1) {
				pisteet = 4 * neli_num;
			} else {
				pisteet = 0;
			}
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function PieniSuora() {
	
	var id;
	var teksti;
	var pisteet;
	var suora;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R13";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			suora = 0;
			
			if (osumat[0] == 1 && osumat[1] == 1 && osumat[2] == 1 && osumat[3] == 1 && osumat[4] == 1) {
				suora = 1;	
			}

			if (suora == 1) {
				pisteet = 15;
			} else {
				pisteet = 0;
			}
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function IsoSuora() {
	
	var id;
	var teksti;
	var pisteet;
	var suora;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R14";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			suora = 0;
			
			if (osumat[1] == 1 && osumat[2] == 1 && osumat[3] == 1 && osumat[4] == 1 && osumat[5] == 1) {
				suora = 1;	
			}

			if (suora == 1) {
				pisteet = 20;
			} else {
				pisteet = 0;
			}
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Mokki() {
	
	var id;
	var teksti;
	var pisteet;
	var kolmi_num;
	var kolmi;
	var pari_num;
	var pari;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R15";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			kolmi = 0;
			pari = 0;
			for (i = 0;i < osumat.length;i++) {
				if (osumat[i] == 3) {
					kolmi_num = i + 1;
					kolmi = 1;
					//console.log("i: " + i + ", pari_num: " + pari_num + ", pari: " + pari);
				}
			}
			for (i = 0;i < osumat.length;i++) {
				if ((osumat[i] == 2) && ((kolmi_num - 1) != i)) {
					pari_num = i + 1;
					pari = 1;
					//console.log("i: " + i + ", pari_num: " + pari_num + ", pari: " + pari);
				}
			}
			if (kolmi == 1 && pari == 1) {
				pisteet = 3 * kolmi_num + 2 * pari_num;
			} else {
				pisteet = 0;
			}
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Sattuma() {
	
	var id;
	var teksti;
	var pisteet;
	var summa;
	//var neli;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R16";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			//LaskeOsumat();
			summa = 0;
			for (i = 0;i < arvo.length;i++) {
				summa = summa + arvo[i];
			}
			pisteet = summa;
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	


function Yatzy() {
	
	var id;
	var teksti;
	var pisteet;
	var yatzy_num;
	var yatzy;

	if (heitot < 3) {
		// Sarakkeen id
		id = "P" + (vuoro + 1) + "R17";
		
		// Hae arvo
		teksti = String(document.getElementById(id).textContent);

		if (teksti == "") {
			LaskeOsumat();
			yatzy = 0;
			for (i = 0;i < osumat.length;i++) {
				if (osumat[i] == 5) {
					yatzy_num_num = i + 1;
					yatzy = 1;
					//console.log("i: " + i + ", pari_num: " + pari_num + ", pari: " + pari);
				}
			}
			if (yatzy == 1) {
				pisteet = 50;
			} else {
				pisteet = 0;
			}
			document.getElementById(id).textContent = String(pisteet);
			vuoroOhi();
			paivitaTila();
		} else {
			window.alert("Kentässä on jo merkintä");
		}
	}
}	
