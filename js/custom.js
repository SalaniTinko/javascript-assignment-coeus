var counter = 0;
var sumOfAll;

function calculation() {
    sumOfAll = 0;
    var costPerUnit = document.getElementsByClassName("cost-per-unit");
    var noOfProduct = document.getElementsByClassName("no-of-product");
    
    for (var i = 0; i < costPerUnit.length; i++) {
        var Sum = costPerUnit[i].value * noOfProduct[i].value;
        sumOfAll += Sum;
    }
    document.getElementById("Result").innerHTML = sumOfAll;

}

function RemoveElement(a) {
    a.parentElement.remove();
    calculation();
}

function removeAllField() {
    document.getElementById("customChildField").innerHTML = "";
    document.getElementById("Result").innerHTML = " ";
    counter = 0;
}

function createInputElement(field_type, field_class, placehol, typee) {
    var v = document.createElement(field_type);
    v.setAttribute("class", field_class);
    v.setAttribute("type", typee);
    v.setAttribute("placeholder", placehol);
    v.setAttribute("required", "required");
    ++counter;

    return v;
}


function createBreakSpace() {
    var v = document.createElement("br");

    return v;
}


function createRemoveButton() {
    var A = document.createElement("a");
    A.setAttribute("href", "#");
    A.setAttribute("onclick", "RemoveElement(this)");
    A.setAttribute("style", "position:absolute;margin:-12px;color:#888;");
    var i = document.createElement("i");
    i.setAttribute("class", "fa fa-times")
    A.appendChild(i);

    return A;
}

function createCalculationButton(val, val1) {
    var btn = document.createElement("button");
    btn.setAttribute("id", val);
    btn.setAttribute("class", "btn btn-secondary w-100");
    btn.setAttribute("type", "submit");
    btn.setAttribute("onclick", "calculation()");
    btn.innerText = val1;

    return btn;
}

function addCustomField() {

    var Di = document.createElement("customField");

    var product_name = createInputElement("input", "product-name", "product name", "text");
    var cost_per_unit = createInputElement("input", "cost-per-unit", "Cost Per unit", "Number");
    var no_of_product = createInputElement("input", "no-of-product", "no.of product", "Number");

    Di.prepend(createBreakSpace());
    Di.prepend(createBreakSpace());
    Di.prepend(no_of_product);
    Di.prepend(createBreakSpace());
    Di.prepend(cost_per_unit);
    Di.prepend(createBreakSpace());
    Di.prepend(product_name);
    Di.prepend(createRemoveButton());
    document.getElementById("customChildField").prepend(Di);

    if (counter <= 3) {
        document.getElementById("customChildField").appendChild(createCalculationButton("Cal", "Calculate"));
    } else {
        return null;
    }
}