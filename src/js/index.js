import '../sass/styles.scss';
import '../images/gallery.png';
import '../images/arrow-prev.svg';
import '../images/arrow-next.svg';
import '../images/cross.svg';



const form = document.querySelector('#form');
const container = document.querySelector('.container');

const slider = document.querySelector('#slider');
slider.style.display = "none";

const sliderContent = document.querySelector('#content');
const buttonNext = document.querySelector('#next');
const buttonPrev = document.querySelector('#prev');
const buttonClose = document.querySelector('#close');
buttonPrev.style.display = "block";
buttonNext.style.display = "block";




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



            imageItem.addEventListener('click', () => {
                slider.style.display = "block";
                sliderContent.style.backgroundImage = `url(${data.results[i].urls.raw}&w=1366&h=768 )`;

                buttonPrev.style.display = "none";
                buttonNext.style.display = "none";
                
                // let sliderNumber = i;
                
                // buttonPrev.style.display = "block";
                // buttonNext.style.display = "block";
                
                // if (sliderNumber === 0) {
                //     buttonPrev.style.display = "none";
                //     return;
                // }
                // if (sliderNumber === data.results.length -1) {
                //     buttonNext.style.display = "none";
                //     return;
                // }
            
                // function getAnotherSlide() {
                //     sliderContent.style.backgroundImage = `url(${data.results[sliderNumber].urls.raw}&w=1366&h=768 )`;
                //     console.warn(data.results[sliderNumber].urls.raw, sliderContent);
                // }
            
                // buttonNext.addEventListener('click', () => {
                //     sliderContent.removeAttribute('style', '');
                    
                //     buttonPrev.style.display = "block";
                //     sliderNumber++;
                //     console.warn(sliderNumber, data.results.length);
                //     getAnotherSlide();
                    
                   
                //     if (sliderNumber < data.results.length -1) return;
                    
                //     if (sliderNumber === data.results.length - 1) {
                //         buttonNext.style.display = "none";
                //         return;
                //     }  
                // })
            
            
                // buttonPrev.addEventListener('click', () => {
            
                //     sliderContent.removeAttribute('style', '');
                //     buttonNext.style.display = "block";
                    
                //     sliderNumber--;
                //     console.warn(sliderNumber, data.results.length);
                //     getAnotherSlide();
                    
                //     if (sliderNumber > 0)  return;
                    
                //     if (sliderNumber === 0) {
                        
                //         buttonPrev.style.display = "none";
                //         return;
                //     }
            
                // });
            
            
                buttonClose.addEventListener('click', () => {
                    slider.style.display = "none";
                })
            
            
            })
            

            container.append(imageItem);
        }
        
        return ;
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

