class flashCard {
    constructor(question,answer){
        this.question = question;
        this.answer = answer;
    }
}

let displaycards = document.getElementById("displaycards");

for(let i=0;i<localStorage.length;i++){
  let key = localStorage.key(i);
  displaycards.innerHTML += `
    <br>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h6 class="card-text">${key}</h6>
      <a href="#" onclick='displayAnswer("${i}")' class="card-link">Show/Hide Answer</a>
      <h5 id=${i} class="card-text">${localStorage.getItem(key)}</h5>
      <br>
      <button class="btn btn-primary mt-2" onclick='deleteQuestion("${key}")'>Delete</button>
    </div>
    </div>`
}

let deleteQuestion =(key)=>{
  localStorage.removeItem(key);
  window.location.reload();
}

let displayAnswer =(id)=>{
    let element = document.getElementById(id);
    if(element.style.display == "none")
      element.style.display = "block";
    else
      element.style.display = "none";
}

let addQuestion= ()=>{
  document.getElementsByClassName('addquestion')[0].style.display =  "inline";
}

let submitQuestion = ()=>{
  const QUESTION = document.forms["addquestion"]["question"].value;
  const ANSWER = document.forms["addquestion"]["answer"].value;
  const CARD = new flashCard(QUESTION,ANSWER);
  localStorage.setItem(QUESTION,ANSWER);
}
