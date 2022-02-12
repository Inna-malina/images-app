let galleryContainer = document.querySelector('.main__gallery-contaner');
let input = document.querySelector('input');
let button = document.querySelector('.button__search');
let clear = document.querySelector('.button__clear');
let mainSection = document.querySelector('.main__section');




async function getData() {
    let url = `https://api.unsplash.com/search/photos?query=${input.value}&client_id=P0dh6fg8wPyIw3B8dV5qHsrSAR-Mq_s7Xq7nCKx8r9s&per_page=30`;

    const res = await fetch(url);
    const data = await res.json();

    for (let key in data) { //перебор всех картинок, расположенных по адресу в url
        let arr = data[key];
        // console.log(arr);

        for (let key in arr) { //перебор значений в ключах data[key]
            // console.log(arr[key].urls.regular);
            let elem = arr[key].urls.regular;


            //это просто создание картинки на странице. Количество картинок формируется в зависимости от их количества на сайте по url
            const img = `<img class="gallery-img" src="${elem}" alt="image">`;
            galleryContainer.insertAdjacentHTML('beforeend', img);


        }
    }

    creatModalWindow();
}

async function getDataRandom() {
    let url = `https://api.unsplash.com/search/photos?query=car&client_id=P0dh6fg8wPyIw3B8dV5qHsrSAR-Mq_s7Xq7nCKx8r9s&per_page=30`;

    const res = await fetch(url);
    const data = await res.json();

    for (let key in data) {
        let arr = data[key];

        for (let key in arr) {
            let elem = arr[key].urls.regular;

            const img = `<img class="gallery-img" src="${elem}" alt="image" data-img="img">`;
            galleryContainer.insertAdjacentHTML('beforeend', img);





        }
    }

    creatModalWindow();

}
getDataRandom();


button.addEventListener('click', function () {
    removeElements();
    getData();
    // console.log(input.value);
});


//появление и исчезание крестика в input и удаление значения в input, при клике на крестик
input.addEventListener('click', function () {
    clear.classList.add('visible');
    clear.addEventListener('click', function () {
        input.value = '';
        clear.classList.remove('visible');
    });
});

mainSection.addEventListener('click', function () {
    clear.classList.remove('visible');
});

input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        removeElements();
        getData();
    }
});

//прежде чем сформировать запрос предыдущие картинки удаляются
function removeElements() {
    let images = document.querySelectorAll('.gallery-img');

    images.forEach(function (elem) {
        if (elem.parentNode) {
            elem.parentNode.removeChild(elem);
        }

    });
}

//функции для формирования модального окна при клике на картинку
function creatModalWindow() {
    let images = document.querySelectorAll('.gallery-img');
    let modalWindowSection = document.querySelector('.modalwindow__section');
    let modalWindowBox = document.querySelector('.modalwindow__section-box');

    images.forEach(function (elem) {
        elem.addEventListener('click', function () {

            modalWindowBox.style.backgroundImage = `url('${elem.src}')`;
            modalWindowSection.classList.remove('modal__hidden');
        });
    });

    modalWindowSection.addEventListener('click', function () {
        modalWindowSection.classList.add('modal__hidden');
        modalWindowSection.classList.remove('modal__active');
    });
}

console.log("на странице есть несколько фото и строка поиска +5");
console.log("в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5");
console.log("При загрузке приложения на странице отображаются полученные от API изображения +10");
console.log("Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10");
console.log("при открытии приложения курсор находится в поле ввода +5");
console.log("есть placeholder +5");
console.log("автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5");
console.log("после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5");
console.log("в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5");
console.log("Качество приложения не супер пупер, но вполне адекватное. Кое-какие мелкие дополнения от себя внесла, например при клике на картинку возникает модальное окно с её увеличенным изображением");