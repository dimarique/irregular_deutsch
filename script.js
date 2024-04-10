const words = [
	['abbiegen', 'biegt ab', 'bog ab', 'ist abgebogen', 'поворачивать'],
	['anbieten', 'bietet an', 'bot an', 'hat angeboten', 'предлагать'],
	['anfangen', 'fängt an', 'fing an', 'hat angefangen', 'начинать'],
	['backen', 'backt', 'backte', 'hat gebacken', 'печь'],
	['befehlen', 'befiehlt', 'befahl', 'hat befohlen', 'приказывать'],
	['beginnen', 'beginnt', 'begann', 'hat begonnen', 'начинать'],
	['beißen', 'beißt', 'biss', 'hat gebissen', 'кусать'],
	['beschließen', 'beschließt', 'beschloss', 'hat beschlossen', 'решать'],
	['betrügen', 'betrügt', 'betrog', 'hat betrogen', 'обманывать'],
	['beweisen', 'beweist', 'bewies', 'hat bewiesen', 'доказывать'],
	['bewerben', 'bewirbt', 'bewarb', 'hat beworben', 'подавать заявление'],
	['biegen', 'biegt', 'bog', 'hat/ist gebogen', 'гнуть'],
	['bieten', 'bietet', 'bot', 'hat geboten', 'предлагать'],
	['binden', 'bindet', 'band', 'hat gebunden', 'связывать'],
	['bitten', 'bittet', 'bat', 'hat gebeten', 'просить'],
	['blasen', 'bläst', 'blies', 'hat geblasen', 'дуть'],
	['bleiben', 'bleibt', 'blieb', 'ist geblieben', 'оставаться'],
	['braten', 'brät', 'briet', 'hat gebraten', 'жарить'],
	['brechen', 'bricht', 'brach', 'hat/ist gebrochen', 'ломать'],
	['brennen', 'brennt', 'brannte', 'hat gebrannt', 'гореть'],
	['bringen', 'bringt', 'brachte', 'hat gebracht', 'приносить'],
	['denken', 'denkt', 'dachte', 'hat gedacht', 'думать'],
	['dürfen', 'darf', 'durfte', 'hat gedurft', 'мочь'],
	['empfangen', 'empfängt', 'empfing', 'hat empfangen', 'получать'],
	['empfehlen', 'empfiehlt', 'empfahl', 'hat empfohlen', 'рекомендовать'],
	['empfinden', 'empfindet', 'empfand', 'hat empfunden', 'чувствовать'],
	['entscheiden', 'entscheidet', 'entschied', 'hat entschieden', 'решать'],
	['erhalten', 'erhält', 'erhielt', 'hat erhalten', 'получать'],
	['erschrecken', 'erschrickt', 'erschrak', 'ist erschrocken', 'пугаться'],
	['essen', 'isst', 'aß', 'hat gegessen', 'есть'],
	['fahren', 'fährt', 'fuhr', 'ist gefahren', 'ехать'],
	['fallen', 'fällt', 'fiel', 'ist gefallen', 'падать'],
	['fangen', 'fängt', 'fing', 'hat gefangen', 'ловить'],
	['finden', 'findet', 'fand', 'hat gefunden', 'находить'],
	['fliegen', 'fliegt', 'flog', 'ist geflogen', 'летать'],
	['fliehen', 'flieht', 'floh', 'ist geflohen', 'бежать'],
	['fließen', 'fließt', 'floss', 'ist geflossen', 'течь'],
	['fressen', 'frisst', 'fraß', 'hat gefressen', 'жрать'],
	['frieren', 'friert', 'fror', 'hat/ist gefroren', 'замерзать'],
	['gebären', 'gebärt', 'gebar', 'hat geboren', 'рожать'],
	['geben', 'gibt', 'gab', 'hat gegeben', 'давать'],
	['gefallen', 'gefällt', 'gefiel', 'hat gefallen', 'нравиться']
];
const checkButton = document.querySelector('.check_btn');
const nextButton = document.querySelector('.next_btn');
const hiddenWord = document.querySelectorAll('.hidden_word');
let firstWord = document.querySelector('.first_form');
const cardNumber = randomCard();

function randomCard() {
	return Math.floor(Math.random() * words.length);
}

function showHidden() {
	hiddenWord.forEach(function(word) {
		word.classList.remove('hidden_word');
	})
}

function newWord() {

}

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
