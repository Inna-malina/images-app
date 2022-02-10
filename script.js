let galleryContainer = document.querySelector('.gallery-contaner');
let input = document.querySelector('input');
let button = document.querySelector('button');
// let images = document.querySelectorAll('.gallery-img');

async function getData() {
    let url = `https://api.unsplash.com/search/photos?query=${input.value}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;

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

    let images = document.querySelectorAll('.gallery-img');
    images.forEach(function (elem) {

        elem.addEventListener('click', function () {
            elem.classList.toggle('gallery-img-big');
            console.log('qwer');
        });
    });
}


button.addEventListener('click', function () {

    removeElements();
    getData();
    // console.log(input.value);
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