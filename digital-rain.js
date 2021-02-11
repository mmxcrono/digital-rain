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

const className = "digital-rain";

$.when( $.ready ).then(() => {
  // Document is ready.
	
	// Want to add characters, then mod a certain number to apply
	// class names with varying animation-delay values

	const numCols = 30;
	const columnLength = 20;

	// Loop for many columns
	for (let i = 0; i < numCols; i++) {
		const characters = generateRandomString(columnLength).split('');

		$('body').append(`<div id="column-${i}" class="rain-column">`);
		generateColumn($(`#column-${i}`), characters, Math.floor(Math.random() * 20));
	}
});

const generateColumn = (parent, characters, offset) => {
	let character;
	
	// This is for a single column
	for (let i = 0; i < characters.length; i++) {
		character = characters[i];

		$(`<div class="${className} ${delayClasses[(i + offset) % delayClasses.length]}">${character}</div>`)
			.appendTo(parent);
	}
}


const generateRandomString = (length) => {
	var result           = '';
	var characters       = '゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>/?{}[]~';
	var charactersLength = characters.length;

	for ( var i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}