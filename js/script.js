//troviamo l'anno dall'oggetto Date del sistema
const d = new Date();
document.getElementById("dateYear").innerHTML = "&#169; "+d.getFullYear()+" - Tutti i diritti riservati";

//quando si ricarica la pagina stampiamo un prezzo di 0 euro
document.getElementById("finalPrice").innerHTML = "0.00";

/**   STEP BONUS JS  **/
// creamo l'array di oggetti dove ogni oggetto sara' composto 
// <option value="value">innerHTML</option>
// un value che sara il value della option 
// e di un innerHTML che sara il value che leggera' il user
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

     // il valore inserito sull'input Nome
     const nomeInput=document.querySelector("#exampleFormControlInput1");
     const nomeInputValue=nomeInput.value;
     //console.log(nomeInputValue);

     if (nomeInputValue.length==0){
        nomeInput.classList.remove('is-valid');
        nomeInput.classList.add('is-invalid');
     } else {
        nomeInput.classList.remove('is-valid');
        nomeInput.classList.remove('is-invalid');
     }

      // il valore inserito sull'input Cognome
      const cognomeInput=document.querySelector("#exampleFormControlInput2");
      const cognomeInputValue=cognomeInput.value;
     // console.log(cognomeInputValue);
 
      if (cognomeInputValue.length==0){
        cognomeInput.classList.remove('is-valid');
        cognomeInput.classList.add('is-invalid');
      } else {
        cognomeInput.classList.remove('is-valid');
        cognomeInput.classList.remove('is-invalid');
      }

    // il valore inserito sull'input Email
    const emailInput=document.querySelector("#exampleFormControlInput3");
    const emailInputValue=emailInput.value;
    //console.log(emailInputValue);

    // pattern che usiamo per controllare il format dell'email inserita dall'utente 
    const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //console.log(emailPattern.test(emailInputValue));
   
     if (emailPattern.test(emailInputValue)) {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.remove('is-valid');
      } else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
      }

    // il valore selezionato dalla select
    const selectInput=document.querySelector("#exampleFormControlInput4");
    const selectInputValue=selectInput.value;
    //console.log(selectInputValue); // stampa ex 1

    if (selectInputValue==0){
        selectInput.classList.remove('is-valid');
        selectInput.classList.add('is-invalid');
    }else {
        selectInput.classList.remove('is-invalid');
        selectInput.classList.remove('is-valid');
    }

   
    const selectInnerHTMLInput = selectInput.options[selectInput.selectedIndex].text;
    //console.log(selectInnerHTMLInput); // stampa ex "Backed Development"

    // assegnamo il prezzo per ora basandosi sulla <option> scelta dall'utente
    let priceHour= 0.00;
    if (selectInputValue==0){
        console.log("Scegli uno dei tre tipi di lavoro!");
    } else if (selectInputValue==1){
        priceHour = 20.50;
    }else if (selectInputValue==2){
        priceHour = 15.30;
    }else {
        priceHour = 33.60; 
    }
    //console.log(priceHour);
  
   // il valore inserito sull'input Textarea
   const textareaInput=document.querySelector("#exampleFormControlInput6");
   const textareaInputValue=textareaInput.value;
   console.log(textareaInputValue);

   if (textareaInputValue.length==0){
        textareaInput.classList.remove('is-valid');
        textareaInput.classList.add('is-invalid');
    }else{
        textareaInput.classList.remove('is-invalid');
        textareaInput.classList.remove('is-valid');
   }

    // il valore della checklist
    const privacyInput=document.querySelector("#exampleFormControlInput7");
    const privacyInputValue=privacyInput.checked;
    //console.log(privacyInputValue);

    if (privacyInputValue){
        privacyInput.classList.remove('is-invalid');
        privacyInput.classList.remove('is-valid');
    }else{
        privacyInput.classList.remove('is-valid');
        privacyInput.classList.add('is-invalid');
    }

    // il valore del codice di promozione inserito come input
    const promotionInput=document.querySelector("#exampleFormControlInput5");
    const promotionInputValue=promotionInput.value;
    //console.log(promotionInputValue);


    // array creata con i codici validi di una promozione
    const promotionsList=['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
    var isValidPromo=promotionsList.includes(promotionInputValue);
    //console.log(isValidPromo);

    if (isValidPromo){
        promotionInput.classList.remove('is-invalid');
        promotionInput.classList.add('is-valid');
    }else {
        if(promotionInputValue.length == 0){
            // se utente non scrive nessun codice di promozione remove-iamo sia valid che non valid per una iterazoione prima
            promotionInput.classList.remove('is-valid');
            promotionInput.classList.remove('is-invalid');
        } else {
            promotionInput.classList.remove('is-valid');
            promotionInput.classList.add('is-invalid'); 
        }  
    }

    let finalPrize = 0.00 ;
    finalPrize=finalPrize.toFixed(2);
    //console.log(finalPrize);
    const workingHours = 10;

    /*
    console.log(!(nomeInputValue.length==0));
    console.log(!(cognomeInputValue.length==0));
    console.log((emailPattern.test(emailInputValue)));
    console.log(!(selectInputValue==0));
    console.log(!(textareaInputValue.length==0));
    console.log(privacyInputValue);
    */
    
    //se tutti i campi del form sono compilati tranne la promozione
    if (!(nomeInputValue.length==0) &&
        !(cognomeInputValue.length==0) &&
         (emailPattern.test(emailInputValue)) &&
        !(selectInputValue==0) &&
        !(textareaInputValue.length==0) &&
          privacyInputValue
    ){
          // la logica principale per calcolare il prezzo
        if (isValidPromo){
            const discount=0.25;
            finalPrize=workingHours*priceHour*0.75;
        } else {
            finalPrize=workingHours*priceHour;
        }
        //formatiamo con 2 decimali
        finalPrize=finalPrize.toFixed(2);
        //console.log(finalPrize);
    
    }
        //il prezzo finale la stampiamo sulla <span> lato html
        document.getElementById("finalPrice").innerHTML = finalPrize;
})