// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Click on empty heart
const glyph = document.getElementsByClassName('like-glyph');

for (let element of glyph) {
  element.addEventListener("click", (e) => {
    mimicServerCall()
  .then(response => {
    console.log(response);
      if (element.textContent === EMPTY_HEART) {
      element.textContent = FULL_HEART;
      element.classList.add("activated-heart")
    } else {
      element.textContent = EMPTY_HEART;
      element.classList.remove("activated-heart");
    }
  })
  .catch((error) => {
    console.log("error", error);
    const errorMessage = document.getElementById('modal');
    console.log(errorMessage.classList)
    errorMessage.classList.remove("hidden");
    console.log(errorMessage.classList)

    
    setTimeout(() => {
      errorMessage.classList.add("hidden")
    }, 3000)
    console.log(errorMessage.classList)
  })
    
  })
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
