function getQuantityFromField(fieldId){
    const quantityString = document.getElementById(fieldId).value;
    const quantityValue = parseInt(quantityString);
    return quantityValue;
}

function getPriceFromtext(id){
    const textPrice = document.getElementById(id).innerText;
    const unitPrice = parseInt(textPrice);
    return unitPrice;
}

function getReceipt(bookTitle, quantity, totalPrice){
    const bookName = document.getElementById(bookTitle).innerText;
    const bookQuantity = getQuantityFromField(quantity);
    // const bookPrice = getPriceFromtext(priceField);
    
    return `${bookName} - ${bookQuantity}pc - ${totalPrice} `;

}
function writeAddedItems(inputId, quantity, totalPrice){
    const writeArea = document.getElementById("order-item");
    const newElement = document.createElement("p");
    newElement.innerText = (getReceipt(inputId, quantity, totalPrice));
    writeArea.append(newElement);
    console.log(newElement);
    
}






document.getElementById('sapiens-btn').addEventListener('click', function(){
    const sapiensQuantity = getQuantityFromField("sapiens-field");
    const sapiensUnitPrice = getPriceFromtext("sapiens-price");
    const sapiensTotal = sapiensQuantity * sapiensUnitPrice;
    const receipt = getReceipt('sapiens-title', 'sapiens-field', sapiensTotal);
    console.log(receipt);
    writeAddedItems("")
})
document.getElementById('meditation-btn').addEventListener('click', function(){
    const meditationQuantity = getQuantityFromField("meditation-field");
    console.log(meditationQuantity);
    console.log('button click')
})
document.getElementById('mans-search-btn').addEventListener('click', function(){
    const mansQuantity = getQuantityFromField("mans-search-field");
    console.log(mansQuantity);
})
document.getElementById('nations-fail-btn').addEventListener('click', function(){
    const nationsQuantity = getQuantityFromField("nations-fail-field");
    console.log(nationsQuantity);
})
document.getElementById('ugly-truth-btn').addEventListener('click', function(){
    const uglyTruthQuantity = getQuantityFromField("ugly-truth-field");
    console.log(uglyTruthQuantity);
})
document.getElementById('born-crime-btn').addEventListener('click', function(){
    const bornCrimeQuantity = getQuantityFromField("born-crime-field");
    console.log(bornCrimeQuantity);
})