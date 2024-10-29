import { commonPrepositions } from './data.js'
import { verbsMitPrep } from './data.js'

//in debugging purpose
window.commonPrepositions = commonPrepositions
window.verbsMitPrep = verbsMitPrep
window.randomCard = randomCard

const elements = {
	nextButton: document.querySelector('.next_btn'),
	searchButton: document.querySelector('.searchToggler'),
	searchBar: document.querySelector('.searchBar'),
	beispilText: document.querySelector('.beispil'),
	verbMitPrep: document.querySelector('.verbMitPrep'),
	explanation: document.querySelector('.explanation'),
	cardNumber: randomCard(),
	buttons: document.querySelectorAll('.btn')
}
elements.specialWordButtonIndex = getRandomIndex(elements.buttons);
elements.prepToHide = verbsMitPrep[elements.cardNumber][0][1];

const wordsWithoutSpecial = commonPrepositions.filter(word => word !== elements.prepToHide);

elements.randomWords = getRandomWords(wordsWithoutSpecial, 4)

function getRandomIndex(array) {
	return Math.floor(Math.random() * array.length);
}

function getRandomWords(arr, count) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}

function hidePrepInText(text) {
	const hiddenWord = `<span class="hidden_word">${elements.prepToHide}</span>`;
	return text.replace(elements.prepToHide, hiddenWord);
}

elements.explanation.innerText = verbsMitPrep[elements.cardNumber][2];
elements.beispilText.innerHTML = hidePrepInText(verbsMitPrep[elements.cardNumber][1].join(' '));
elements.verbMitPrep.innerHTML = hidePrepInText(verbsMitPrep[elements.cardNumber][0].join(' '));

//Toggle visibility of the search bar
function searchBarToggle() {
	elements.searchBar.classList.toggle('hidden');
	elements.searchBar.value = '';
}

elements.buttons.forEach((button, index) => {
	if (index === elements.specialWordButtonIndex) {
		button.textContent = elements.prepToHide;
	} else {
		button.textContent = elements.randomWords.pop();
	}

	button.addEventListener('click', () => {
		if (button.textContent === elements.prepToHide) {
			button.classList.add('correct_answer');
			document.querySelectorAll('.hidden_word').forEach(span => {
				span.classList.remove('hidden_word');
			});
		} else {
			button.classList.add('wrong_answer');
		}
	});
});

elements.nextButton.addEventListener('click', function() {
	loadNewCard()
	return false;
});

elements.searchButton.addEventListener('click', searchBarToggle);

function randomCard() {
	return (Math.floor(Math.random() * verbsMitPrep.length));
}

function loadNewCard() {
	elements.cardNumber = randomCard();
	elements.prepToHide = verbsMitPrep[elements.cardNumber][0][1];

	const wordsWithoutSpecial = commonPrepositions.filter(word => word !== elements.prepToHide);
	elements.randomWords = getRandomWords(wordsWithoutSpecial, 4);

	elements.beispilText.innerHTML = hidePrepInText(verbsMitPrep[elements.cardNumber][1].join(' '));
	elements.verbMitPrep.innerHTML = hidePrepInText(verbsMitPrep[elements.cardNumber][0].join(' '));

	elements.buttons.forEach((button, index) => {
		button.classList.remove('correct_answer', 'wrong_answer');
		if (index === elements.specialWordButtonIndex) {
			button.textContent = elements.prepToHide;
		} else {
			button.textContent = elements.randomWords.pop();
		}
	});

	elements.explanation.innerText = verbsMitPrep[elements.cardNumber][2];
}
