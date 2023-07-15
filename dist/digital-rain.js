"use strict";
/**
 * Digital rain script
 * Add characters with certain classes to utilize
 * CSS animations for a "rain" effect
 */
class DigitalRain {
    constructor(numColumns, columnLength) {
        this.numColumns = numColumns;
        this.columnLength = columnLength;
    }
    addRain() {
        const container = document.createElement('div');
        container.classList.add('digital-rain-container');
        for (let i = 0; i < this.numColumns; i++) {
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
    const digitalRain = new DigitalRain(40, 20);
    digitalRain.addRain();
})();
