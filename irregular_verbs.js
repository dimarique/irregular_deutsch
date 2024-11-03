import { words } from './data.js';

//in debugging purpose
window.words = words

const elements = {
	checkButton: document.querySelector('.check_btn'),
	nextButton: document.querySelector('.next_btn'),
	hiddenWord: document.querySelectorAll('.hidden_word_IV'),
	//searchButton: document.querySelector('.searchToggler'),
	//searchBar: document.querySelector('.searchBar'),
	cardNumber: randomCard()
};
const selectors = ['.first_form', '.second_form', '.third_form', '.fourth_form', '.translate'];

//Toggle visibility of the search bar
/*
 *function searchBarToggle() {
 *    elements.searchBar.classList.toggle('hidden');
 *    elements.searchBar.value = '';
 *}
 */

function randomCard() {
	return Math.floor(Math.random() * words.length);
}

//Shows hidden words
function showHidden() {
	elements.hiddenWord.forEach(function(word) {
		word.classList.remove('hidden_word_IV');
	})
}

elements.nextButton.addEventListener('click', function() {
	loadNewCard()
});


elements.checkButton.addEventListener('click', showHidden);
//elements.searchButton.addEventListener('click', searchBarToggle);

selectors.forEach((selector, index) => {
	document.querySelector(selector).innerText = words[elements.cardNumber][index];
});

function loadNewCard() {
	elements.cardNumber = randomCard();

	// Update text fields with new word forms
	selectors.forEach((selector, index) => {
		document.querySelector(selector).innerText = words[elements.cardNumber][index];
	});

	// Re-hide the hidden words
	elements.hiddenWord.forEach(function(word) {
		word.classList.add('hidden_word_IV');
	});
}
