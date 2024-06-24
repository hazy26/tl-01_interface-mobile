/** Preferences personnelles */

const searchBtn = document.querySelector('.search');
const banner = document.querySelector('.banner');
const searchDialog = document.querySelector('.search__dialog');

searchBtn.addEventListener('click', () => {
    banner.classList.toggle('reduceBanner');
    searchDialog.classList.toggle('hidden');
    searchDialog.classList.toggle('openFromRight');
});

const searchInput = document.querySelector('.search__input');
const articleCards = document.querySelectorAll('.article__card');
const productCards = document.querySelectorAll('.product');

searchInput.addEventListener('input', () => {
    const searchValue =  searchInput.value.toLowerCase();

    articleCards.forEach(card => {
        const searchResult = card.getAttribute('data-search').toLowerCase();
        if(searchResult.includes(searchValue)){
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        };
    });

    productCards.forEach(card => {
        const searchResult = card.getAttribute('data-search').toLowerCase();
        if(searchResult.includes(searchValue)){
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        };
    });
});