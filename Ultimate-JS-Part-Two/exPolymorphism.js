function HtmlElement(src) {
    this.src = src;

    this.render = function () {
        return `<img src="${this.src}"/>`;
    }
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };

    this.render = function () {
        return `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement('http://');
const s = new HtmlSelectElement([1, 2, 3]);

console.log(e.render());
console.log(s.render());