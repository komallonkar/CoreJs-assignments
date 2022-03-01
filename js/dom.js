function additem() {
    var parentUL = document.createElement('ul');
    var childLI = document.createElement("LI");
    var sublingSpan = document.createElement("span");
    var buttonDel = document.createElement("button");
    var item = document.querySelector('#items').value;
    buttonDel.innerHTML = "delete";
    buttonDel.id = item;
    console.log(item);
    sublingSpan.innerHTML = item;
    childLI.id=item;
    childLI.appendChild(sublingSpan);
    childLI.appendChild(buttonDel);
    parentUL.appendChild(childLI);
    document.body.appendChild(parentUL);
    buttonDel.click(function () {
        var deletethis = this.getAttribute("id");
        document.getElementById(deletethis).removeChild(childLI);
    });
   
}   