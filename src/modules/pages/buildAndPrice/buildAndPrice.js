import { LightningElement } from 'lwc';
const BIKE_VARIANTS = [
    {
      variant:"Glamour",
      price:81508,
      formattedPrice:"₹81,508",
      engineType:"Air cooled, 4 stroke",
      maxTorque:"10.6 Nm @ 6000 rpm",
      displacement:17,
      checked:true,
      imageName:"radiant_red"
    },
    {
      variant:"Glamour Canvas",
      formattedPrice:"₹81,208",
      price:81208,
      engineType:"Air cooled, 4 stroke",
      maxTorque:"10.6 Nm @ 6000 rpm",
      displacement:"124.7 cc",
      imageName:"radiant_red"
    },
    {
      variant:"Glamour XTEC",
      formattedPrice:"₹81,708",
      price:81708,
      engineType:"Air cooled, 4 stroke",
      maxTorque:"10.6 Nm @ 6000 rpm",
      displacement:"124.7 cc",
      imageName:"radiant_red"
    },
    {
      variant:"Passion Plus",
      formattedPrice:"₹76,008",
      price:76008,
      engineType:"Air cooled, 4 stroke",
      maxTorque:"08.05 Nm @ 6000 rpm",
      displacement:"97.2 cc",
      imageName:"radiant_red"
    },
    {
        variant:"Super Splender",
        formattedPrice:"₹80,108",
        price:80108,
        engineType:"Air cooled, 4 stroke",
        maxTorque:"10.6 Nm @ 6000 rpm",
        displacement:"124.7 cc",
        imageName:"radiant_red"
      }
  ]

   // Define the colors available for the car
   const COLORS = [
    {label:"Radiant Red", value:"radiant_red", checked:true},
    {label:"Techno Blue", value:"techno_blue"},
    {label:"Black", value:"black"}
  ]

  const ANIMATED_STARTING_PRICE = 76008

export default class BuildAndPrice extends LightningElement {
    showModal = false
    colorsList = COLORS
    bikeVariants = BIKE_VARIANTS
    selectedVariant = BIKE_VARIANTS[0]
    selectedPrice = this.selectedVariant.price
    selectedImageName = this.colorsList[0].value
    selectedColorName = this.colorsList[0].label
    animatedPriceValue

    connectedCallback(){
        this.animatePrice()
    }
    //Handler for when a variant is selected
    selectionHandler(event){
        console.log("selected record", event.detail.selected)
        console.log("selected variant", event.detail.variant)
        const {selected, variant} = event.detail
        this.selectedVariant = {...selected, imageName:this.selectedImageName}
        this.selectedPrice = this.selectedVariant.price
        this.updateVariants(variant)
        this.animatePrice()
    }
    //Handler for when a color is selected
    colorSelectionHandler(event){
      console.log("selected color", event.detail)
      this.selectedImageName = event.detail
      this.selectedVariant = {...this.selectedVariant, imageName:this.selectedImageName }
      this.updateColors(this.selectedImageName)
    }

    // update the checked property for the colors based on the selected value
    updateColors(value){
        this.colorsList = this.colorsList.map(item=>{
          let checked = item.value === value
          if(checked){
            this.selectedColorName = item.label
          }
          return {...item, checked}
        })
    }

    // Update the checked property for the variants based on the selected variant
    updateVariants(value){
      this.bikeVariants = this.bikeVariants.map(item=>{
        let checked = item.variant === value
        return {...item, checked}
      })
    }

    //open the modal 
    openModalHandler(){
        this.showModal = true
      }
      cancelHandler(){
        this.showModal = false
      }
      submitHandler(){
        console.log("Form Submitted!!")
      }

       //method to animate the price
    animatePrice(){
        this.animatedPriceValue = ANIMATED_STARTING_PRICE
        let interval = window.setInterval(()=>{
          if(this.selectedPrice !== this.animatedPriceValue){
            this.animatedPriceValue = this.animatedPriceValue+100
          } else {
            window.clearInterval(interval)
          }
        }, 10)
      }
}