import { LightningElement, api } from "lwc";

export default class PriceFooter extends LightningElement{
    @api price

    get formattedPrice(){
        return this.formatter(this.price)
    }
    formatter(value){
        if(value){
            return new Intl.NumberFormat('en-IN',{
                style:'currency',
                currency:'INR',
                maximumFractionDigits:0
            }).format(value)
        } else {
            return null
        }
    }

    contactUsHandler(){
        this.dispatchEvent(new CustomEvent('openmodal'))
    }
}