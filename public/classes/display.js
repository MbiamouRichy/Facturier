import { Storage } from './storage.js';
export class display {
    constructor(container, hiddenDiv, btnPrint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.btnPrint = btnPrint;
        this.formContainer = document.getElementById('form-container');
    }
    render(docObj, docType) {
        const htmlString = docObj.htmlFormat();
        this.container.innerHTML = htmlString;
        new Storage(docType, htmlString);
        if (docType === 'invoice') {
            this.btnPrint.innerText = 'Imprimer la facture';
        }
        else {
            this.btnPrint.innerText = 'Imprimer le devis';
        }
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}
