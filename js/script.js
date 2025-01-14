//troviamo l'anno dall'oggetto Date del sistema
const d = new Date();
document.getElementById("dateYear").innerHTML = "&#169; "+d.getFullYear()+" - Tutti i diritti riservati";

//quando si ricarica la pagina stampiamo un prezzo di 0 euro
document.getElementById("finalPrice").innerHTML = "0.00";

/**   STEP BONUS JS  **/
// creamo l'array di oggetti dove ogni oggetto sara composto 
// <option value="value">innerHTML</option>
// un value che sara il value della option 
// e di un innerHTML che sara il value che leggera il user
const tipoLavoroList=[
    { value: 0, innerHTML: "Seleziona il tipo di lavoro"},
    { value: 1, innerHTML: "Backed Development"},
    { value: 2, innerHTML: "Frontend Development"},
    { value: 3, innerHTML: "Project Analysis"}
];

var selectHTML=document.getElementById('exampleFormControlInput4');
tipoLavoroList.forEach(element => {
    var optSelect=document.createElement('option');

    optSelect.innerHTML=element.innerHTML;
    //console.log(optSelect.innerHTML);

    optSelect.value=element.value;
   // console.log(optSelect.value);

    selectHTML.appendChild(optSelect);

});



const sButton=document.querySelector("#submit-form");

sButton.addEventListener('click', function(event) {
    event.preventDefault();

    // il valore inserito sull'input della email
    const emailInput=document.querySelector("#exampleFormControlInput3");
    const emailInputValue=emailInput.value;
    //console.log(emailInputValue);

    // il valore selezionato dalla select
    const selectInput=document.querySelector("#exampleFormControlInput4");
    const selectInputValue=selectInput.value;
    //console.log(selectInputValue); // stampa ex 1

   
    const selectInnerHTMLInput = selectInput.options[selectInput.selectedIndex].text;
    //console.log(selectInnerHTMLInput); // stampa ex "Backed Development"

    // assegnamo il prezzo per ora basandosi sulla <option> scelta dall'utente
    let priceHour= 0;
    if (selectInputValue==0){
        console.log("Scegli uno dei tre tipi di lavoro!");
    } else if (selectInputValue==1){
        priceHour = 20.50;
    }else if (selectInputValue==2){
        priceHour = 15.30;
    }else {
        priceHour = 33.60; 
    }
   // console.log(priceHour);
  
    // il valore del codice di promozione inserito come input
    const promotionInput=document.querySelector("#exampleFormControlInput5");
    const promotionInputValue=promotionInput.value;
    console.log(promotionInputValue);


    // array creata con i codici validi di una promozione
    const promotionsList=['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
    var isValidPromo=promotionsList.includes(promotionInputValue);
    //console.log(isValidPromo);


    let finalPrize = 0 ;
    const workingHours = 10;
    if (isValidPromo){
        promotionInput.classList.remove('is-invalid');
        promotionInput.classList.add('is-valid');
         const discount=0.25;
         finalPrize=workingHours*priceHour*0.75;
    } else {
        if(promotionInputValue.length == 0){
            // se utente non scrive nessun codice di promozione remove-iamo sia valid che non valid per una iterazoione prima
            promotionInput.classList.remove('is-valid');
            promotionInput.classList.remove('is-invalid');
        } else {
            promotionInput.classList.remove('is-valid');
            promotionInput.classList.add('is-invalid'); 
        }  
        finalPrize=workingHours*priceHour;
    }
    //formatiamo con 2 decimali
    finalPrize=finalPrize.toFixed(2);
   // console.log(finalPrize);
   
    //il prezzo finale la stampiamo sulla <span> lato html
    document.getElementById("finalPrice").innerHTML = finalPrize;
})