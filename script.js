import { words } from './data.js';

const checkButton = document.querySelector('.check_btn');
const nextButton = document.querySelector('.next_btn');
const hiddenWord = document.querySelectorAll('.hidden_word');
//let firstWord = document.querySelector('.first_form');
const cardNumber = randomCard();

function randomCard() {
	return Math.floor(Math.random() * words.length);
}

function showHidden() {
	hiddenWord.forEach(function(word) {
		word.classList.remove('hidden_word');
	})
}

//function newWord() {
//
//}

checkButton.addEventListener('click', showHidden);

nextButton.addEventListener('click', function() {
	location.reload();
	return false;
});

document.querySelector('.first_form').innerText = words[cardNumber][0];
document.querySelector('.second_form').innerText = words[cardNumber][1];
document.querySelector('.third_form').innerText = words[cardNumber][2];
document.querySelector('.fourth_form').innerText = words[cardNumber][3];
document.querySelector('.translate').innerText = words[cardNumber][4];
