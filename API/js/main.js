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
            `<img class ="display-img" src="${data.message}"/>`
        )
    } catch (error) {
        console.log(error);
    }
}
getData(URL);

/* const createcards = async () => {
    try { const apiEntry = await fetch("https://www.breakingbadapi.com/api/characters"); BreakingBadCharacters = await apiEntry.json(); displayCharacters(BreakingBadCharacters); } catch (err) { console.error(err); }
};
const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
        return
        `<li class="character">
            <img class="image" src="${character.img}" />
            <h2 class="name">Name: ${character.name}<h2 />
                <h3 class="nickname">Nickname: ${character.nickname}<h3 />
                    <h3 class="birthday">Birthday: ${character.birthday}<h3 />
                        <h3 class="occupation">Occupation: ${character.occupation[0]}<h3 />
                            <h3 class="portrayed">Portrayed by: ${character.portrayed}<h3 />
                                <h3 class="status">Status: ${character.status}<h3 />
            </li>`
            ;
    }).join(""); charactersList.innerHTML = htmlString;
}; createcards();
 */