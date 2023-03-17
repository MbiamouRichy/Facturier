export class display {
    constructor(container, hiddenDiv) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.formContainer = document.getElementById('form-container');
    }
    render(docObj, docType) {
        const htmlString = docObj.htmlFormat();
        this.container.innerHTML = htmlString;
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}
