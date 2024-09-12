import { commonPrepositions } from './data.js'
import { verbsMitPrep } from './data.js'

//in debugging purpose
window.commonPrepositions = commonPrepositions
window.verbsMitPrep = verbsMitPrep

const nextButton = document.querySelector('.next_btn');
const searchButton = document.querySelector('.searchToggler');
const searchBar = document.querySelector('.searchBar');


//Toggle visibility of the search bar
function searchBarToggle() {
	searchBar.classList.toggle('hidden');
	searchBar.value = '';
}


nextButton.addEventListener('click', function() {
	location.reload();
	return false;
});


searchButton.addEventListener('click', searchBarToggle);

/*
 *selectors.forEach((selector, index) => {
 *    document.querySelector(selector).innerText = words[cardNumber][index];
 *});
 */


/*
 *function randomCard() {
 *    return Math.floor(Math.random() * words.length);
 *}
 */

/*
 *Shows hidden words
 *function showHidden() {
 *hiddenWord.forEach(function(word) {
 *word.classList.remove('hidden_word');
 *})
 *}
 */
