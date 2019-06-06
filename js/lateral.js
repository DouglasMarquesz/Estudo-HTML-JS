/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
  document.getElementById("main").style.marginLeft = "270px";
  document.body.style.backgroundColor = "black";
  document.getElementById("mySidenavT").style.width = "0";
  document.getElementById("mainT").style.marginLeft = "0";
  //document.body.style.backgroundColor = "black";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
 // document.body.style.backgroundColor = "blue";
}

function openNavTwo() {
  document.getElementById("mySidenavT").style.width = "270px";
  document.getElementById("mainT").style.marginLeft = "270px";
  document.body.style.backgroundColor = "black";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  //document.body.style.backgroundColor = "white";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNavTwo() {
  document.getElementById("mySidenavT").style.width = "0";
  document.getElementById("mainT").style.marginLeft = "0";
  //document.body.style.backgroundColor = "white";
}