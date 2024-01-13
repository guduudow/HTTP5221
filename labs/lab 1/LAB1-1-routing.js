//LAB 1-1: SIMPLE ROUTING WITH THE LOCATION OBJECT

//#### CONTENT FOR HOME PAGE ==== - BACKGROUND IS white
var contentHome = "<h3>Welcome to our website!</h3>";
contentHome +=
  "<p>We have many wonderful products that you might be interested in.</p>";
if (location.search === "?home") {
  let homeMsg = document.getElementById("output");
  homeMsg.innerHTML = contentHome;
  homeMsg.style.background = "white";
}
//==== END OF CONTENT FOR HOME PAGE ####

//#### CONTENT FOR PRODUCTS PAGE ====  - BACKGROUND IS red
var contentProducts = "<h3>Our Top 5 Products</h3>";
contentProducts +=
  "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
if (location.search === "?products") {
  let productMsg = document.getElementById("output");
  productMsg.innerHTML = contentProducts;
  productMsg.style.background = "red";
}
//==== END OF CONTENT FOR PRODUCTS PAGE ####

//#### CONTENT FOR ABOUT US PAGE ==== - BACKGROUND IS green
var contentAbout = "<h3>About Computer Corp</h3>";
contentAbout +=
  "<p>We have been around a long time, so we know what we're doing.</p>";
contentAbout +=
  "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
if (location.search === "?about") {
  let contentMsg = document.getElementById("output");
  contentMsg.innerHTML = contentAbout;
  contentMsg.style.background = "green";
}
//==== END OF CONTENT FOR ABOUT US PAGE ####
