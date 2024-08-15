import { words } from './data.js';

//in debugging purpose
window.words = words


const checkButton = document.querySelector('.check_btn');
const nextButton = document.querySelector('.next_btn');
const hiddenWord = document.querySelectorAll('.hidden_word');
const searchButton = document.querySelector('.searchToggler');
const searchBar = document.querySelector('.searchBar');
const cardNumber = randomCard();

const selectors = ['.first_form', '.second_form', '.third_form', '.fourth_form', '.translate'];

//Toggle visibility of the search bar
function searchBarToggle() {
	searchBar.classList.toggle('hidden');
	searchBar.value = '';
}

function randomCard() {
	return Math.floor(Math.random() * words.length);
}

//Shows hidden words
function showHidden() {
	hiddenWord.forEach(function(word) {
		word.classList.remove('hidden_word');
	})
}

nextButton.addEventListener('click', function() {
	location.reload();
	return false;
});


checkButton.addEventListener('click', showHidden);
searchButton.addEventListener('click', searchBarToggle);

selectors.forEach((selector, index) => {
	document.querySelector(selector).innerText = words[cardNumber][index];
});
