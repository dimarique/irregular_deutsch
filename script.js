import { words } from './data.js';

const checkButton = document.querySelector('.check_btn');
const nextButton = document.querySelector('.next_btn');
const hiddenWord = document.querySelectorAll('.hidden_word');
const searchButton = document.querySelector('.searchToggler');
const searchBar = document.querySelector('.searchBar');
const cardNumber = randomCard();

function searchBarToggle() {
	searchBar.classList.toggle('hidden');
	searchBar.value = '';
}

function randomCard() {
	return Math.floor(Math.random() * words.length);
}

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

document.querySelector('.first_form').innerText = words[cardNumber][0];
document.querySelector('.second_form').innerText = words[cardNumber][1];
document.querySelector('.third_form').innerText = words[cardNumber][2];
document.querySelector('.fourth_form').innerText = words[cardNumber][3];
document.querySelector('.translate').innerText = words[cardNumber][4];
