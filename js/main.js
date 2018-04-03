let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");

//listen for input
numberInput.addEventListener("input", getFactAjax);

function getFactAjax() {
  let number = numberInput.value;
  let type = ["trivia","math"];
  let random = Math.floor(Math.random() * 2);
  if(number != "") {
    let xhr = new XMLHttpRequest();
    if(number.length == 4) {
      xhr.open("GET", "http://numbersapi.com/" + number + "/" + "year");
      console.log( "http://numbersapi.com/" + number + "/" + "year");
    } else {
      xhr.open("GET", "http://numbersapi.com/" + number + "/" + type[random]);
      console.log( "http://numbersapi.com/" + number + "/" +  type[random]);
    }
    xhr.onload = function() {
      if(this.status == 200) {
        fact.style.display = "block";
        factText.textContent = xhr.responseText;
    }
  }

  xhr.send();
  }
}