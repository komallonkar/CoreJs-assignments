let btns = document.querySelectorAll(".calc-input-values");
let resultBox = document.querySelector("#calculate-input");
let clear= document.querySelector('#clear');
let solve = document.querySelector('#solve');
let history = document.querySelector('#history');

let btnSpread = [...btns];
clear.addEventListener('click', ()=> {
    resultBox.value = "";
})
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator

    if (resultBox.innerHTML == "0") {
      resultBox.value = "";
      }

      let valueInput = btns[i].innerHTML;
      console.log(valueInput);
      resultBox.value += valueInput;
  });
});

solve.addEventListener('click', () => {
    let i = 0;
    console.log(resultBox.value);
    var regExp = /[a-zA-Z]/g;
    if (resultBox.value == "" || regExp.test(resultBox.value) ) {
        resultBox.value = "";
    }
    else {
        
        let allInputs = resultBox.value;
        result = eval(allInputs);
        resultBox.value = result;
        let p = document.createElement("p");
        p.innerHTML =  `${allInputs}=${result}`;
        history.appendChild(p);


    }
   

})

