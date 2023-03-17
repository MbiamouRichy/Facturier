export class Storage {
    constructor(typeVal, htmtString) {
        this.oldData = [];
        this.setItem(typeVal, htmtString);
    }
    static checkLocalStorage() {
        if (localStorage.getItem('invoice') === null) {
            localStorage.setItem('invoice', '[]');
        }
        if (localStorage.getItem('estimate') === null) {
            localStorage.setItem('estimate', '[]');
        }
    }
    setItem(typeVal, htmtString) {
        let array;
        array = localStorage.getItem(typeVal);
        if (array !== null) {
            this.oldData = JSON.parse(array);
            this.oldData.push(htmtString);
            localStorage.setItem(typeVal, JSON.stringify(this.oldData));
        }
        else {
            document.location.reload();
        }
    }
}
