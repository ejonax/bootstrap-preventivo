//ritorna l'anno dall'oggetto Date
const d = new Date();
document.getElementById("dateYear").innerHTML = "&#169; "+d.getFullYear()+" - Tutti i diritti riservati";

/**   STEP BONUS JS - generiamo le option della select usando js **/
// creamo l'array di oggetti dove ogni oggetto sara composto 
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


    const emailInput=document.querySelector("#exampleFormControlInput3");
    const emailInputValue=emailInput.value;
    console.log(emailInputValue);


   

})