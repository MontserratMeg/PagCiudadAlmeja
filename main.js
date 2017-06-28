

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/me.jpg') {
      myImage.setAttribute ('src','images/ma.jpg');
	} else {
	  myImage.setAttribute ('src','images/me.jpg');
	}
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Ponga su nombre porfa.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Bienvenidos a Ciudad Almeja, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bienvenidos a Ciudad Almeja, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}