"use strict";
/**
 * Digital rain script
 * Add characters with certain classes to utilize
 * CSS animations for a "rain" effect
 * @author mmxcrono
 * @repo github.com/mmxcrono/digital-rain
 */
class DigitalRain {
    constructor(numCols, numRows) {
        this.numCols = numCols;
        this.columnLength = numRows;
    }
    addRain() {
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
    addColumn(target, characters, offset) {
        for (let i = 0; i < characters.length; i++) {
            const character = characters.charAt(i);
            const newColumn = document.createElement('div');
            newColumn.classList.add(DigitalRain.CLASS_NAME, `delay-${(i + offset) % DigitalRain.UNIQUE_DELAY_COUNT}`);
            newColumn.textContent = character;
            target.append(newColumn);
        }
    }
    generateRandomString(length) {
        let result = '';
        const charactersLength = DigitalRain.ALL_CHARS.length;
        for (let i = 0; i < length; i++) {
            result += DigitalRain.ALL_CHARS.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
DigitalRain.UNIQUE_DELAY_COUNT = 20;
DigitalRain.ALL_CHARS = '゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>/?{}[]~';
DigitalRain.CLASS_NAME = "digital-rain";
(function () {
    var _a, _b;
    const urlParams = new URLSearchParams(window.location.search);
    const numCols = (_a = urlParams.get('numCols')) !== null && _a !== void 0 ? _a : '40';
    const numRows = (_b = urlParams.get('numRows')) !== null && _b !== void 0 ? _b : '20';
    const digitalRain = new DigitalRain(parseInt(numCols), parseInt(numRows));
    digitalRain.addRain();
})();
