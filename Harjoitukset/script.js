// 1
function jarjestaLuvut() {

    let yksi = document.getElementById('yksi').value;
    let kaksi = document.getElementById('kaksi').value;
    let kolme = document.getElementById('kolme').value;

    

    let numerot = [yksi, kaksi, kolme].map(Number).sort((a, b) => a - b);
    document.getElementById('jarjestys').innerHTML = numerot;

    

    console.log("T.1", numerot);
    

}

// 2
function suurinLuku() {

    let eka = document.getElementById('eka').value
    let toka = document.getElementById('toinen').value
    let kolmas = document.getElementById('kolmas').value
    let neljas = document.getElementById('neljas').value
    let viides = document.getElementById('viides').value

    

    let numerot2 = [eka, toka, kolmas, neljas, viides].map(Number).sort((a, b) => a - b);
    document.getElementById('suurin').innerHTML = numerot2[4];

    console.log("T.2", numerot2[4]);

}

// 3
function onkoLuku() {

    let luku = document.getElementById('luku').value

    console.log("T.3", luku);

    let even = "Luku on parillinen"
    let odd = "Luku on pariton"
    // onko parillinen
    if(luku % 2 == 0) {
        document.getElementById('pvaip').innerHTML = even;
    }
    
    // onko pariton
    else {
        document.getElementById('pvaip').innerHTML = odd;
    }


}

// 4
function mikaAjoneuvo() {

    let ika = document.getElementById('ika').value

    console.log("T.4", ika);

    let auto = "Saat ajaa autoa"
    let mopo = "Saat ajaa mopoa"
    let pyora = "Saat ajaa pyörällä"
    
    if(ika >= 18) {
        document.getElementById('aneuvo').innerHTML = auto;
    }
    
    
    else if(ika >= 15){
        document.getElementById('aneuvo').innerHTML = mopo;
    }

    else {
        document.getElementById('aneuvo').innerHTML = pyora;
    }


}

// 5
function valitseKieli() {
    let kieli = document.getElementById('kieli').value

    console.log("T.5", kieli);

    let ger = document.getElementById('ger').value
    let eng = document.getElementById('eng').value
    let swe = document.getElementById('swe').value

    if(kieli == ger){
        document.getElementById('kaannos').innerHTML = ger;
    }

    else if(kieli == eng){
        document.getElementById('kaannos').innerHTML = eng;
    }

    else if(kieli == swe){
        document.getElementById('kaannos').innerHTML = swe;
    }
    
}