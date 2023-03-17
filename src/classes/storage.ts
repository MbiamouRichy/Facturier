import {HasSetItem} from "../interfaces/HasSetItem.js"

export class Storage implements HasSetItem {

    oldData: string[] = []

     constructor(typeVal: string, htmtString: string){
        this.setItem(typeVal, htmtString);
     }
     static checkLocalStorage(): void {
        if(localStorage.getItem('invoice') === null){
            localStorage.setItem('invoice', '[]');
        }
        if(localStorage.getItem('estimate') === null){
            localStorage.setItem('estimate', '[]');
        }
     }
     setItem(typeVal: string, htmtString: string): void {
         let array: string | null;
         array = localStorage.getItem(typeVal);
         if(array !== null){
            this.oldData = JSON.parse(array)
            this.oldData.push(htmtString);
            localStorage.setItem(typeVal, JSON.stringify(this.oldData))
         }else{
            document.location.reload();
         }
     }
    

}