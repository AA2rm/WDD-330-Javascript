//LOCAL STORAGE EX//
/*How to use getItem()*/
window.localStorage.getItem('user');
/*Using removeItem()*/
window.localStorage.removeItem('name');
/*Using the key()method*/
var KeyName = window.localStorage.key(index);
/*Retrieving data from Windows storage*/
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }