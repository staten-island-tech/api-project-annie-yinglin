import './style.css'

const URL = "https://dog.ceo/api/breeds/image/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("app").innerHTML = data.message;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);