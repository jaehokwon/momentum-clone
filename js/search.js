const searchButton = document.querySelector("#search-div i");
const searchForm = document.querySelector("#search-div form");
const searchInput = document.querySelector("#search-div input");

function onSearchClick() {
    if (!(searchForm.hidden = !searchForm.hidden)) {
        searchInput.focus();
    } else {
        searchInput.value = "";
    }
}

function onSearchSubmit(event) {
    event.preventDefault();
    location.href = `https://www.google.com/search?q=${searchInput.value}`;
}

searchButton.addEventListener("click", onSearchClick);
searchForm.addEventListener("submit", onSearchSubmit);