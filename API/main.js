import './style.css'

const URL = "https://dog.ceo/api/breeds/image/random";

async function getData(URL) {
  const response = await fetch(URL);
  console.log(response);
}
getData(URL);