

let rootPath = "https://mysite.it varsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
  if (!localStorage.getItem("apikey")) {
    window.open("enter-api-key.html", "_self");
  }
  return localStorage.getItem("apiKey");
}
