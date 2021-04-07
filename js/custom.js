var counter = 0;
var sumOfAll;

function calculation() {
    sumOfAll = 0;
    var costPerUnits = document.getElementsByClassName("cost-per-unit");
    var noOfProducts = document.getElementsByClassName("no-of-product");
    
    for (var inputField = 0; inputField < costPerUnits.length; inputField++) {
        var sum = costPerUnits[inputField].value * noOfProducts[inputField].value;
        sumOfAll += sum;
    }
    document.getElementById("Result").innerHTML = sumOfAll;

}

function removeElement(anchorTag) {
    anchorTag.parentElement.remove();
    calculation();
}

function removeAllField() {
    document.getElementById("customChildField").innerHTML = "";
    document.getElementById("Result").innerHTML = " ";
    counter = 0;
}

function createInputElement(field_type, field_class, field_placeholder, type) {
    var inputTag = document.createElement(field_type);
 
    inputTag.setAttribute("class", field_class);
    inputTag.setAttribute("type", type);
    inputTag.setAttribute("placeholder", field_placeholder);
    inputTag.setAttribute("required", "required");
    ++counter;

    return inputTag;
}


function createBreakSpace() {
    var brTag = document.createElement("br");

    return brTag;
}

function createRemoveButton() {
    var anchorTag = document.createElement("a"); 

    anchorTag.setAttribute("href", "#");
    anchorTag.setAttribute("onclick", "removeElement(this)");
    anchorTag.setAttribute("style", "position:absolute;margin:-12px;color:#888;");
    var iconTag = document.createElement("i");
    anchorTag.setAttribute("class", "fa fa-times")
    anchorTag.appendChild(iconTag);

    return anchorTag;
}

function createCalculationButton(id,clickAttr) { //id and onclick attribute
    var calculateButtonTag = document.createElement("button"); //create calculate button tag
    calculateButtonTag.setAttribute("id", id);
    calculateButtonTag.setAttribute("class", "btn btn-secondary w-100");
    calculateButtonTag.setAttribute("type", "submit");
    calculateButtonTag.setAttribute("onclick", "calculation()");
    calculateButtonTag.innerText = clickAttr;

    return calculateButton;
}

function addCustomField() {

    var divElement = document.createElement("div");

    var productName = createInputElement("input", "product-name", "product name", "text");
    var costPerUnit = createInputElement("input", "cost-per-unit", "Cost Per unit", "Number");
    var noOfProduct = createInputElement("input", "no-of-product", "no.of product", "Number");

    divElement.prepend(createBreakSpace());
    divElement.prepend(createBreakSpace());
    divElement.prepend(noOfProduct);
    divElement.prepend(createBreakSpace());
    divElement.prepend(costPerUnit);
    divElement.prepend(createBreakSpace());
    divElement.prepend(productName);
    divElement.prepend(createRemoveButton());
    document.getElementById("customChildField").prepend(divElement);

    if (counter <= 3) {
        document.getElementById("customChildField").appendChild(createCalculationButton("Cal", "Calculate"));
    } else {
        return null;
    }
}