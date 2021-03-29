// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartArry = document.querySelectorAll('.media-post footer ul li span')
const errorModal = document.getElementById('modal')
errorModal.className = 'hidden'

heartArry.forEach( element => element.addEventListener('click', actionFunction))






function actionFunction(event){
  
  mimicServerCall()
  .then(()=>{
    let heartIcon = event.target

    if (heartIcon.innerHTML === FULL_HEART){
      heartIcon.innerHTML = EMPTY_HEART
    }else {
      heartIcon.innerHTML = FULL_HEART
    }
  
    console.log ('It was clicked')
  })
  .catch((error) =>{
    errorModal.className = ''
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
