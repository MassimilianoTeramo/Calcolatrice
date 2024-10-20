let number = document.getElementsByClassName("number") //seleziono tutti i num by class
// prendo tutti i tasti operazioni by Id
let result = document.getElementById("result")
let moltiplica = document.getElementById("moltiplica")
let somma = document.getElementById("somma")
let sottrax = document.getElementById("sottrax")
let diviso = document.getElementById("diviso")
let reset = document.getElementById("reset")
let uguale = document.getElementById("uguale")


// prima funzione --> gestire direttamente i num

let numeroUno = ""; //salvare in una variabile il valore che si digita 
let primaOperazione = false; //di default non si avvia l'operazione
let saveOp = ""; // altra variabile che serve per salvare la prima operazione inserita
let risultatoOp = 0; 

function inputNum(numero){ //metti al posto dello 0 il num che passo
    if (result.innerText==0){
        result.innerText=numero; // non devo cancellare lo 0 ma sovrascriverlo
        numeroUno = numero;
    } else {
        result.innerText += numero //una volta messo un num il result nn sara piu 0 ma verra aggiunto al num che passo
        numeroUno += numero; //concateniamo i numeri che passiamo, NON sommandoli

    }
}

 //QUINTO STEP:quando ripremo un tasto operaz. deve eseguire la prima operazione e salvarla
    function switchOp(){
        switch(saveOp){ // variabile dove abbiamo salvato la prima operazione
        case "x":
            risultatoOp *= numeroUno;
            console.log(risultatoOp)
            numeroUno="" //torna ad essere vuoto per poter inserire altri num
            break;
            case "-":
            risultatoOp -= numeroUno;
            console.log(risultatoOp)
            numeroUno="" //torna ad essere vuoto per poter inserire altri num
            break;
            case "+":
                risultatoOp = parseInt(risultatoOp)+parseInt(numeroUno); //senno li concatena leggendoli come stringhe
                console.log(risultatoOp)
                numeroUno="" //torna ad essere vuoto per poter inserire altri num
                break;
            case "/":
            risultatoOp /= numeroUno;
            console.log(risultatoOp)
            numeroUno="" //torna ad essere vuoto per poter inserire altri num
            break;
    }
}

// TERZO STEP: facciamo un unica funzione per le operazioni con lo switch case
// devo mettere in memoria un oper che vorro fare
// es: al X salva il primo num e aspetta un altro num


function operazioni(op){
    if (!primaOperazione){
        saveOp=op; //salvo nella variabile bandiera l'operazione
        primaOperazione = true;
        result.innerText += op;
        risultatoOp = numeroUno // salvo l'operazione momentanea, dopo che ho cliccato su un num e operazione (es: 50 x)
        numeroUno = ""; // numero 1 torna a essere vuoto per inserire il second num (altrimenti (es 50x502 invece che 2))
       
    } else {
        switchOp();
        //salviamo la nuova operazione
        saveOp = op;
        result.innerText += op;

    }
}

//SESTO STEP --> visualizza risultato 

function visualizzaRis(){
    switchOp();
    result.innerText = risultatoOp
    saveOp="";

}


// SECOND STEP: PASSARE I NUM IN MANIERA DINAMICA
// per ogni num funzionante, al click, 

for (let num of number){
    num.onclick =()=>{
        inputNum(num.innerText); //passo alla funzione il testo che sta dentro il pulsante num

    }
}

// QUARTo STEP: metto l'operazione nel pulsante (metodo statico) 
// operazione che fa qualcosa a seconda dell'input che gli passiamo
moltiplica.onclick = ()=> {
    operazioni("x");
}
sottrax.onclick = ()=> {
    operazioni("-");
}
somma.onclick = ()=> {
    operazioni("+");
}
diviso.onclick = ()=> {
    operazioni("/");
}
uguale.onclick = ()=> {
    visualizzaRis()

}
reset.onclick = ()=> {
    numeroUno = "";
primaOperazione = false; 
saveOp = ""; 
risultatoOp = 0;
result.innerText = 0; 
}




