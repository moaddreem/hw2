function validateContactForm() {
  var name = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;

  if (name == "" || email == "") {
    alert("Please fill out all required fields.");
    return false;
  } else {
    return true;
  }
}

function toggleProject(descriptionId) {
  var description = document.getElementById(descriptionId);

  if (description.style.display == "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}

function changeQuoteStyle() {
  var quote = document.getElementById("cv-quote");
  quote.style.backgroundColor = "#eef5ff";
  quote.style.fontStyle = "italic";
}

function resetQuoteStyle() {
  var quote = document.getElementById("cv-quote");
  quote.style.backgroundColor = "";
  quote.style.fontStyle = "";
}

function addLoadDate() {
  var footer = document.getElementById("page-footer");
  var date = new Date();

  var newParagraph = document.createElement("p");
  var text = document.createTextNode("Page loaded on: " + date);

  newParagraph.appendChild(text);
  footer.appendChild(newParagraph);
}

var quote = document.getElementById("cv-quote");

if (quote != null) {
  quote.addEventListener("mouseover", changeQuoteStyle);
  quote.addEventListener("mouseout", resetQuoteStyle);
}