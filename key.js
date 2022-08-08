
document.querySelectorAll('.clickable').forEach(el => {
    el.addEventListener('click', handleLetterClick);
})

function eggWinner() {
  let person = prompt("Please enter your name");
  if (person != null) {
    document.getElementById("eggOwner").innerHTML =
    person + " IS THE OWNER OF THIS COW EGG!";
  }
}

function handleLetterClick(event) {
    console.log("letter clicked", event.target.innerHTML);
    const properOrder = 'fuckyou';
    if ( !window.clickString ) window.clickString = '';
    const letterClicked = event.target.innerHTML;
    const testClickString = window.clickString + letterClicked;
    if ( properOrder.indexOf(testClickString) === 0 ) {
        //clicked a letter in the right order
        window.clickString = testClickString
    } else {
        //clicked a letter out of order
        window.clickString = '';
    }
    if ( window.clickString === properOrder ) {
        //all letters properly clicked in the right order
        eggWinner();
    }
}
