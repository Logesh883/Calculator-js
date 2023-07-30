var content = document.getElementsByTagName("body")[0];
var light = document.getElementById("light");
var dark = document.getElementById("dark");
var output = document.getElementById("display");
const operation = document.getElementById("equal");

light.addEventListener("click", function () {
  light.classList.toggle("active");
  content.classList.toggle("light");
  output.classList.toggle("display");
  operation.classList.toggle("operation1");
});
