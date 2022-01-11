import "../css/style.css";

document.querySelector('#header').innerHTML = `<h1>Dashing Dogs!</h1>`

const URL = "https://dog.ceo/api/breed/hound/images";

async function getData(URL) {
    const response = await fetch(URL);
    console.log(response);
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const images = data.message;
        images.forEach((image) => {
            document.getElementById("gallery").insertAdjacentHTML("afterbegin",
                `<img class ="img" src="${image}"/>`)
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData(URL);