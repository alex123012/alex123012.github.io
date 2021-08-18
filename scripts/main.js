var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Kittens are cool, ${myName}`;
  }

if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = `Kittens are cool, ${storedName}`;
    }
  
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.jpeg') {
      myImage.setAttribute ('src','images/image2.jpeg');
    } else {
      myImage.setAttribute ('src','images/image1.jpeg');
    }
}


myButton.onclick = function() {
    setUserName();
}