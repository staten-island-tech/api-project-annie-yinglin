import "../css/style.css";

document.querySelector('#header').innerHTML = `<h1>Dashing Dogs!</h1>`

const URL = "https://dog.ceo/api/breed/hound/images";
const clearbtn = document.getElementById("clear");
const searchbar = document.getElementById("search");
let resultDogs = [];

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

function clear(searchbar) {
    clearbtn.addEventListener("click", function (event) {
        searchbar.value = "";
    })
};
clear(searchbar);

/* function showList(results) {
    for (const dog of results) {
        const resultItem = document.createElement('li')
        resultItem.classList.add('result-item')
        const text = document.createTextNode(images)
        resultItem.appendChild(text)
        list.appendChild(resultItem)
    }
}

searchbar.addEventListener("keyup", (e) => {
    let value = e.target.value
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase()
        showList(images.filter(image => {
            return image.includes(value)
        }))
    } else {
    }
}) */

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredDogs = resultDogs.filter((dog) => {
        return (
            dog.name.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

