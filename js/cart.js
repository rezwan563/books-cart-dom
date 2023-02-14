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
    
    return `${bookName} - ${bookQuantity}pc - ${totalPrice} tk`;

}
function writeAddedItems(receiptText){
    
    const writeArea = document.getElementById("order-item");
    const newElement = document.createElement("p");
    newElement.innerText = receiptText;
    writeArea.append(newElement);
    
}

// function removeFromCart(e){
//     document.getElementById(e.).parentElement.

    
// }






document.getElementById('sapiens-btn').addEventListener('click', function(){
    // const inputField = document.getElementById('sapiens-field').value;
    // console.log(inputField);
    const sapiensQuantity = getQuantityFromField("sapiens-field");
    const sapiensUnitPrice = getPriceFromtext("sapiens-price");
    const sapiensTotal = sapiensQuantity * sapiensUnitPrice;
    const receipt = getReceipt('sapiens-title', 'sapiens-field', sapiensTotal);
    writeAddedItems(receipt);

})
document.getElementById('meditation-btn').addEventListener('click', function(){
    const meditationQuantity = getQuantityFromField("meditation-field");
    const meditationUnitPrice = getPriceFromtext("meditation-price");
    const meditationTotal = meditationQuantity * meditationUnitPrice;
    const receipt = getReceipt('meditation-title', 'meditation-field', meditationTotal);
    writeAddedItems(receipt);
})
document.getElementById('mans-search-btn').addEventListener('click', function(){
    const mansQuantity = getQuantityFromField("mans-search-field");
    const mansSearchUnitPrice = getPriceFromtext("mans-search-price");
    const mansSearchTotal = mansQuantity * mansSearchUnitPrice;
    const receipt = getReceipt('mans-search-title', 'mans-search-field', mansSearchTotal);
    writeAddedItems(receipt);
})
document.getElementById('nations-fail-btn').addEventListener('click', function(){
    const nationsFailQuantity = getQuantityFromField("nations-fail-field");
    const nationsFailUnitPrice = getPriceFromtext("nations-fail-price");
    const nationsFailTotal = nationsFailQuantity * nationsFailUnitPrice;
    const receipt = getReceipt('nations-fail-title', 'nations-fail-field', nationsFailTotal);
    writeAddedItems(receipt);
})
document.getElementById('ugly-truth-btn').addEventListener('click', function(){
    const uglyTruthQuantity = getQuantityFromField("ugly-truth-field");
    const uglyTruthUnitPrice = getPriceFromtext("ugly-truth-price");
    const uglyTruthTotal = uglyTruthQuantity * uglyTruthUnitPrice;
    const receipt = getReceipt('ugly-truth-title', 'ugly-truth-field', uglyTruthTotal);
    writeAddedItems(receipt);
})
document.getElementById('born-crime-btn').addEventListener('click', function(){
    const bornCrimeQuantity = getQuantityFromField("born-crime-field");
    const bornCrimeUnitPrice = getPriceFromtext("born-crime-price");
    const bornCrimeTotal = bornCrimeQuantity * bornCrimeUnitPrice;
    const receipt = getReceipt('born-crime-title', 'born-crime-field', bornCrimeTotal);
    writeAddedItems(receipt);
})