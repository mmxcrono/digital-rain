/**
 * Digital rain script
 * Add characters with certain classes to utilize
 * CSS animations for a "rain" effect
 */

const delayClasses = [
	'delay-1',
	'delay-2',
	'delay-3',
	'delay-4',
	'delay-5',
	'delay-6',
	'delay-7',
	'delay-8',
	'delay-9',
	'delay-11',
	'delay-12',
	'delay-13',
	'delay-14',
	'delay-15',
	'delay-16',
	'delay-17',
	'delay-18',
	'delay-19',
	'delay-20',
];
const allCharacters = '゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>/?{}[]~';
const className = "digital-rain";

const addColumn = (parent, characters, offset) => {
	let character;

	for (let i = 0; i < characters.length; i++) {
		character = characters[i];

		$(`<div class="${className} ${delayClasses[(i + offset) % delayClasses.length]}">${character}</div>`)
			.appendTo(parent);
	}
}

const addRain = (target = 'body', numColumns = 30, columnLength = 20) => {
	let randomCharacters;
	for (let i = 0; i < numColumns; i++) {
		randomCharacters = generateRandomString(columnLength).split('');

		$(target).append(`<div id="column-${i}" class="rain-column">`);
		addColumn($(`#column-${i}`), randomCharacters, Math.floor(Math.random() * 20));
	}
}

const generateRandomString = (length) => {
	var result           = '';
	var charactersLength = allCharacters.length;

	for ( var i = 0; i < length; i++ ) {
		result += allCharacters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}
$(document).ready(() => {
	addRain();
});