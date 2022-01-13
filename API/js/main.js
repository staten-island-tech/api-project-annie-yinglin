import "../css/style.css";

document.querySelector('#header').innerHTML = `<h1>Dashing Dogs!</h1>`

const search = document.getElementById('search');
const URL = "https://dog.ceo/api/breed/hound/images";
let images = [];
let hounds = [];

const letsgowoofers = async () => {
    try {
        const response = await fetch(URL);
        images = await response.json();
        hounds = images.message;
        console.log(hounds);
        search.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();
            const filteredDogs = hounds.filter((hound) => {
                return (
                    hound.toLowerCase().includes(searchString)
                );
            });
            showDogs(filteredDogs);
        });
        const showDogs = (hounds) => {
            const htmlString = hounds
                .map((hound) => {
                    return `
                        <img class="img" src="${hound}"/>
                `;
                })
            document.getElementById("gallery").innerHTML = htmlString;
        };
        showDogs(hounds);
    } catch (error) {
        console.error(error);
    }
};
letsgowoofers();

function clear(search) {
    document.getElementById("clear").addEventListener("click", function (event) {
        search.value = "";
    })
};
clear(search);