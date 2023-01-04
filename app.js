console.log("Let's get this party started!");

// const $searchInput = $("#search");
const $gifArea = $("#gif-area");


//use ajax data to add the gif

function addGif(res) {
    let numResults = res.data.length;
    // console.log(numResults);
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        // console.log(randomIdx);

        //a test to make sure it works:
        // const img = document.querySelector("#giph");
        // img.src = res.data[randomIdx].images.original.url;

        let $newCol = $("<div>");
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

// form submission ,  clear search box
const form = document.querySelector('#searchform');
form.addEventListener("submit", function (e) {
    const input = document.querySelector('#search');
    e.preventDefault();

    // console.log("submit!")
    // console.log(input.value)
    getGiphy(input.value);
    input.value = '';
})

//get data via ajax

async function getGiphy(searchTerm) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    // console.log(res.data);
    addGif(res.data);
}

//remove images

$("#remove").on("click", function () {
    $gifArea.empty();
});


//random stuff for fun:
//style the remove button 

const button = document.querySelector('button');

button.style.background = 'linear-gradient(to right, #6a11cb, #2575fc)';
button.style.borderRadius = '4px';
button.style.color = 'white';
button.style.padding = '5px 5px';
button.style.fontSize = '14px';
button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
});

//style the search button

const searchButton = document.querySelector('input[type="submit"]');

searchButton.style.background = 'linear-gradient(to right, #6a11cb, #2575fc)';
searchButton.style.borderRadius = '4px';
searchButton.style.color = 'white';
searchButton.style.padding = '5px 5px';
searchButton.style.fontSize = '14px';
searchButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

searchButton.addEventListener('mouseenter', () => {
    searchButton.style.transform = 'scale(1.05)';
});

searchButton.addEventListener('mouseleave', () => {
    searchButton.style.transform = 'scale(1)';
});