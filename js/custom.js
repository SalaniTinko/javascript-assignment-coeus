var Counter = 0;
var SumofAll;

function CalCulation() {
    SumofAll = 0;
    var C2 = document.getElementsByClassName("C2");
    var C3 = document.getElementsByClassName("C3");
    
    for (var i = 0; i < C2.length; i++) {
        var Sum = C2[i].value * C3[i].value;
        SumofAll += Sum;
    }
    document.getElementById("Result").innerHTML = SumofAll;

}

function RemoveCld(a) {
    a.parentElement.remove();
    CalCulation();
}

function Removefun() {
    document.getElementById("div1").innerHTML = "";
    document.getElementById("Result").innerHTML = " ";
    Counter = 0;
}

function CreateInputElement(field_type, field_class, placehol, typee) {
    var v = document.createElement(field_type);
    v.setAttribute("class", field_class);
    v.setAttribute("type", typee);
    v.setAttribute("placeholder", placehol);
    v.setAttribute("required", "required");
    ++Counter;

    return v;
}


function CreateBreak() {
    var v = document.createElement("br");

    return v;
}


function CreateBBtn() {
    var A = document.createElement("a");
    A.setAttribute("href", "#");
    A.setAttribute("onclick", "RemoveCld(this)");
    A.setAttribute("style", "position:absolute;margin:-12px;color:#888;");
    var i = document.createElement("i");
    i.setAttribute("class", "fa fa-times")
    A.appendChild(i);

    return A;
}

function CreateBtn(val, val1) {
    var btn = document.createElement("button");
    btn.setAttribute("id", val);
    btn.setAttribute("class", "btn btn-secondary w-100");
    btn.setAttribute("type", "submit");
    btn.setAttribute("onclick", "CalCulation()");
    btn.innerText = val1;

    return btn;
}

function Myfunction() {

    var Di = document.createElement("div");

    var v1 = CreateInputElement("input", "C1", "Product Name", "text");
    var v2 = CreateInputElement("input", "C2", "Cost Per unit", "Number");
    var v3 = CreateInputElement("input", "C3", "No.of product", "Number");

    Di.prepend(CreateBreak());
    Di.prepend(CreateBreak());
    Di.prepend(v3);
    Di.prepend(CreateBreak());
    Di.prepend(v2);
    Di.prepend(CreateBreak());
    Di.prepend(v1);
    Di.prepend(CreateBBtn());
    document.getElementById("div1").prepend(Di);

    if (Counter <= 3) {
        document.getElementById("div1").appendChild(CreateBtn("Cal", "Calculate"));
    } else {
        return null;
    }
}