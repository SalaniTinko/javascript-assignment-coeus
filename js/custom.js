var counter = 0;
var sumOfAll;

function calculation() {
    sumOfAll = 0;
    var costPerUnit = document.getElementsByClassName("cost-per-unit");
    var noOfProduct = document.getElementsByClassName("no-of-product");
    
    for (var inputField = 0; inputField < costPerUnit.length; inputField++) {
        var sum = costPerUnit[inputField].value * noOfProduct[inputField].value;
        sumOfAll += sum;
    }
    document.getElementById("Result").innerHTML = sumOfAll;

}

function RemoveElement(remove_btn) {
    remove_btn.parentElement.remove();
    calculation();
}

function removeAllField() {
    document.getElementById("customChildField").innerHTML = "";
    document.getElementById("Result").innerHTML = " ";
    counter = 0;
}

function createInputElement(field_type, field_class, field_placeholder, type) {
    var input_field = document.createElement(field_type);
    input_field.setAttribute("class", field_class);
    input_field.setAttribute("type", type);
    input_field.setAttribute("placeholder", field_placeholder);
    input_field.setAttribute("required", "required");
    ++counter;

    return input_field;
}


function createBreakSpace() {
    var input_field = document.createElement("br");

    return input_field;
}


function createRemoveButton() {
    var remove_btn = document.createElement("a");
    remove_btn.setAttribute("href", "#");
    remove_btn.setAttribute("onclick", "RemoveElement(this)");
    remove_btn.setAttribute("style", "position:absolute;margin:-12px;color:#888;");
    var icon_tag = document.createElement("i");
    remove_btn.setAttribute("class", "fa fa-times")
    remove_btn.appendChild(icon_tag);

    return remove_btn;
}

function createCalculationButton(id,clickAttr) { //id and onclick attribute
    var btn = document.createElement("button");
    console.log("value var\t\t:\t",id,clickAttr)
    btn.setAttribute("id", id);
    btn.setAttribute("class", "btn btn-secondary w-100");
    btn.setAttribute("type", "submit");
    btn.setAttribute("onclick", "calculation()");
    btn.innerText = clickAttr;

    return btn;
}

function addCustomField() {

    var add_custome_field = document.createElement("customField");

    var product_name = createInputElement("input", "product-name", "product name", "text");
    var cost_per_unit = createInputElement("input", "cost-per-unit", "Cost Per unit", "Number");
    var no_of_product = createInputElement("input", "no-of-product", "no.of product", "Number");

    add_custome_field.prepend(createBreakSpace());
    add_custome_field.prepend(createBreakSpace());
    add_custome_field.prepend(no_of_product);
    add_custome_field.prepend(createBreakSpace());
    add_custome_field.prepend(cost_per_unit);
    add_custome_field.prepend(createBreakSpace());
    add_custome_field.prepend(product_name);
    add_custome_field.prepend(createRemoveButton());
    document.getElementById("customChildField").prepend(add_custome_field);

    if (counter <= 3) {
        document.getElementById("customChildField").appendChild(createCalculationButton("Cal", "Calculate"));
    } else {
        return null;
    }
}