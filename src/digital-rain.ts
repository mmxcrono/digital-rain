/**
 * Digital rain script
 * Add characters with certain classes to utilize
 * CSS animations for a "rain" effect
 * @author mmxcrono
 * @repo github.com/mmxcrono/digital-rain
 */
class DigitalRain {
	static readonly UNIQUE_DELAY_COUNT = 20;
	static readonly ALL_CHARS = '゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>/?{}[]~';
	static readonly CLASS_NAME = "digital-rain";

	private numCols: number;
	private columnLength: number;

	constructor(numCols: number, numRows: number) {
		this.numCols = numCols;
		this.columnLength = numRows;
	}

	addRain(): void {
		const container = document.createElement('div');
		container.classList.add('digital-rain-container');

		for (let i = 0; i < this.numCols; i++) {
			const randomCharacters = this.generateRandomString(this.columnLength);
			const column = document.createElement('div');
			column.setAttribute('id', `column-${i}`);
			column.classList.add('rain-column');

			this.addColumn(column, randomCharacters, Math.floor(Math.random() * DigitalRain.UNIQUE_DELAY_COUNT));
			container.append(column);
		}

		document.body.append(container);
	}

	private addColumn(target: HTMLElement, characters: string, offset: number): void {
		for (let i = 0; i < characters.length; i++) {
			const character = characters.charAt(i);
			const newColumn = document.createElement('div');
			newColumn.classList.add(DigitalRain.CLASS_NAME, `delay-${(i + offset) % DigitalRain.UNIQUE_DELAY_COUNT}`);
			newColumn.textContent = character;
			target.append(newColumn);
		}
	}

	private generateRandomString(length: number): string {
		let result = '';
		const charactersLength = DigitalRain.ALL_CHARS.length;

		for (let i = 0; i < length; i++) {
			result += DigitalRain.ALL_CHARS.charAt(Math.floor(Math.random() * charactersLength));
		}

		return result;
	}
}

(function() {
	const urlParams = new URLSearchParams(window.location.search);
	const numCols = urlParams.get('numCols') ?? '40';
	const numRows = urlParams.get('numRows') ?? '20';
	const digitalRain = new DigitalRain(parseInt(numCols), parseInt(numRows));
	digitalRain.addRain();
})();
