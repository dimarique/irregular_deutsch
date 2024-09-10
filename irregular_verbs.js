import { words } from './data.js';

//in debugging purpose
window.words = words

const elements = {
	checkButton: document.querySelector('.check_btn'),
	nextButton: document.querySelector('.next_btn'),
	hiddenWord: document.querySelectorAll('.hidden_word'),
	searchButton: document.querySelector('.searchToggler'),
	searchBar: document.querySelector('.searchBar'),
	cardNumber: randomCard()
};
const selectors = ['.first_form', '.second_form', '.third_form', '.fourth_form', '.translate'];

//Toggle visibility of the search bar
function searchBarToggle() {
	elements.searchBar.classList.toggle('hidden');
	elements.searchBar.value = '';
}

function randomCard() {
	return Math.floor(Math.random() * words.length);
}

//Shows hidden words
function showHidden() {
	elements.hiddenWord.forEach(function(word) {
		word.classList.remove('hidden_word');
	})
}

elements.nextButton.addEventListener('click', function() {
	location.reload();
	return false;
});


elements.checkButton.addEventListener('click', showHidden);
elements.searchButton.addEventListener('click', searchBarToggle);

selectors.forEach((selector, index) => {
	document.querySelector(selector).innerText = words[elements.cardNumber][index];
});
