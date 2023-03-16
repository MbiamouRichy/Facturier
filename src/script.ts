class FormInput{
    form: HTMLFormElement;
    type: HTMLSelectElement;
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    address: HTMLInputElement;
    country: HTMLInputElement;
    town: HTMLInputElement;
    zip: HTMLInputElement;
    product: HTMLInputElement;
    price: HTMLInputElement;
    quantity: HTMLInputElement;
    tva: HTMLInputElement;

    constructor(){
        this.form = document.getElementById('form') as HTMLFormElement;
        this.type = document.getElementById('type') as HTMLSelectElement;
this.firstName = document.getElementById('firstName') as HTMLInputElement;
this.lastName = document.getElementById('lastName') as HTMLInputElement;
this.address = document.getElementById('address') as HTMLInputElement;
this.country = document.getElementById('country') as HTMLInputElement;
this.town = document.getElementById('town') as HTMLInputElement;
this.zip = document.getElementById('zip') as HTMLInputElement;
this.product = document.getElementById('product') as HTMLInputElement;
this.price = document.getElementById('price') as HTMLInputElement;
this.quantity = document.getElementById('quantity') as HTMLInputElement;
this.tva = document.getElementById('tva') as HTMLInputElement;

this.submitFormListener()

    }

    // Listeners
    private submitFormListener(): void {
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this))
    }
    private handleFormSubmit(e: Event){
        e.preventDefault();
        const inputs =  this.inputData();

        if (Array.isArray(inputs)){
          const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = inputs;
          console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
          
        }

    }
    private inputData():[string, string, string,string,string,string,number,string,number,number,number] | void {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town =  this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;

if( zip > 0 && price > 0 && quantity > 0 && tva > 0){
   return [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva]
}else{
    alert("Les valeurs numeriques doivent etre superieur a zero")
    return;
}

    }
}

new FormInput();