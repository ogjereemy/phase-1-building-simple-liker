// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = {
  "♡": "♥",
  "♥": "♡"
};
const FULL_HEART = {
  "red" : "",
  "": "red"
};

// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll(".like-glyph")

function like(e){
  const heart = e.target;
  mimicServerCall()
    .then(function(serverResponse){
      alert("server notified");
      alert(serverResponse);
      heart.innerText = EMPTY_HEART[heart.innerText];
      heart.style.color = FULL_HEART[heart.style.color];
    })
    .catch(function(error){
      alert("Something went wrong!");
    })
}

for(const glyph of articleHearts){
  glyph.addEventListener("click", like)
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
