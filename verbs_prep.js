import { commonPrepositions } from './data.js'
import { verbsMitPrep } from './data.js'

//in debugging purpose
window.commonPrepositions = commonPrepositions
window.verbsMitPrep = verbsMitPrep

const elements = {
	nextButton: document.querySelector('.next_btn'),
	searchButton: document.querySelector('.searchToggler'),
	searchBar: document.querySelector('.searchBar'),
	beispilText: document.querySelector('.beispil'),
	verbMitPrep: document.querySelector('.verbMitPrep'),
	translate: document.querySelector('.translate'),
	cardNumber: randomCard()
}


//Toggle visibility of the search bar
function searchBarToggle() {
	elements.searchBar.classList.toggle('hidden');
	elements.searchBar.value = '';
}


elements.nextButton.addEventListener('click', function() {
	location.reload();
	return false;
});


elements.searchButton.addEventListener('click', searchBarToggle);

/*
 *selectors.forEach((selector, index) => {
 *    document.querySelector(selector).innerText = words[cardNumber][index];
 *});
 */


function randomCard() {
	return (Math.floor(Math.random() * verbsMitPrep.length));

}


elements.beispilText.innerText = verbsMitPrep[elements.cardNumber][1].join(' ');
elements.verbMitPrep.innerText = verbsMitPrep[elements.cardNumber][0].join(' ');
elements.translate.innerText = verbsMitPrep[elements.cardNumber][2];
/*
/*
 *Shows hidden words
 *function showHidden() {
 *hiddenWord.forEach(function(word) {
 *word.classList.remove('hidden_word');
 *})
 *}
 */
