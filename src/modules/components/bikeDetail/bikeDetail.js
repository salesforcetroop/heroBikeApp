import { LightningElement, api } from 'lwc';

export default class BikeDetail extends LightningElement{
    _selectedVariant={}

    @api 
    get selectedVariant(){
        return this._selectedVariant
    }
    set selectedVariant(data){
        if(data){
            let model = data.variant.toLowerCase().replaceAll(' ', '')
            let selectedimage = `/public/assets/herobike/${model}/${data.imageName}.png`
            console.log("selectedimage", selectedimage)
            this._selectedVariant = {...data, "selectedimage":selectedimage}
        }
        
    }
}