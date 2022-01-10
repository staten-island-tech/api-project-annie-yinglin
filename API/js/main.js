import "../css/style.css";

document.querySelector('#header').innerHTML = `<h1>Dashing Dogs!</h1>`

const URL = "https://dog.ceo/api/breeds/image/random";

async function getData(URL) {
    const response = await fetch(URL);
    console.log(response);
    try {
        const response = await fetch(URL);
        const data = await response.json();
        document.getElementById("gallery").insertAdjacentHTML("afterbegin",
            `<div class = "display-card">
    <img class ="display-img" src="${data.message}"/>
    </div>`
        )
    } catch (error) {
        console.log(error);
    }
}
getData(URL);