import '../sass/styles.scss';
import '../images/gallery.png';


const form = document.querySelector('#form');
const container = document.querySelector('.container');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const topic = form.elements['searchTopic'].value;

    if (topic.length === 0) {
        container.replaceChildren();
        showErrorMessage('You need to enter a search topic');
        return;
    }

    const api = `https://api.unsplash.com/search/photos?query=${topic}&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
    getImages(api);

    form.elements['searchTopic'].value = '';
})





function getImages(url) {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => createImagesList(json))
    .catch((error) => {
        showErrorMessage('An error has occurred. Please, try again');
    })
}


function createImagesList(data) {
    container.replaceChildren();

    if (data.results.length > 0) {

        for (let i = 0; i < data.results.length; i++) {
    
            let imageItem = document.createElement('div');
            imageItem.classList.add('container__image');
            imageItem.style.backgroundImage = `url(${data.results[i].urls.raw}&w=1366&h=768 )`;
    
            imageItem.addEventListener("dblclick", () => {
                window.open(data.results[i].links.download, '_blank');
            });

            container.append(imageItem);
        }

        return;
    }

    showErrorMessage('No results were found for this query.')
}

function showErrorMessage(messageText) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('container__error');
    errorMessage.innerHTML = messageText;
    container.append(errorMessage);

    setTimeout(() => {
        errorMessage.remove()
    }, 4000)
}