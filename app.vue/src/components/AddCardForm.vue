<template>
    <div class="container">
       <AddCardCard 
        :newCardData="newCardData"
       />
      <form ref="form" class="formContainer">
        <label for="cardNumber" class="label">
            CARD NUMBER 
        </label>
        <input 
        v-model="newCardData.number" 
        v-bind:class="inputNumber" 
       
        id="cardNumber" 
        type="number">
        <label for="cardName" class="label">
            CARDHOLDER NAME  
        </label>
        <input 
        v-model="newCardData.holder" 
        placeholder="FIRSTNAME LASTNAME" 
        v-bind:class="inputName" 
        id="cardName" 
        type="text"  >
        <label for="cardValid" class="label">
            VALID THRU 
        </label>
        <input 
        v-model="newCardData.validMonth" 
        v-bind:class="inputValid"  
        id="cardValid"
         type="number" 
         min="0"
         max="12">
         <input 
        v-model="newCardData.validYear" 
        v-bind:class="inputValid"  
        id="cardValid"
        type="number" 
         min="0"
          >
        <label for="cardCVV" class="labelCVV">
            CCV 
        </label>
        <input class="CVV"
         id="cardCVV" 
         type="number">
        <label for="cardVendor" class="label">
            VENDOR 
        </label>
        <select
        v-model="newCardData.vendor" 
        v-bind:class="inputVendor"
        id="cardVendor" 
        >
        <option disabled value=""></option>
        <option>BITCOIN INC</option>
        <option>NINJA BANK</option>
        <option>BLOCK CHAIN INC</option>
        <option>EVIL CORP</option>
        </select> 
        <input
         type="submit" 
         v-on:click="onSubmit" 
        v-bind:class="button" Value="ADD CARD">
      </form>  
    </div>
</template>
<script>
import AddCardCard from './AddCardCard.vue'
import Vue from 'vue'
import VueMask from 'v-mask'
Vue.use(VueMask)
let uid = 0
export default {
    components:{
        AddCardCard      
    },
  data(){
    uid += 1
    return{
      button: 'submitButton'
      , inputNumber: 'fieldNumber'
      , inputName: 'fieldName'
      , inputValid: 'fieldValid'
      , inputVendor: 'fieldVendor'
      , newCardData: Object.assign({}, this.cardData)
      , uid: `${uid}`
    }
    },
    computed: {
      cardData(){
        return this.$root.$data.cardData     
      }
    },
     methods: {
          onSubmit(e){
            e.preventDefault(e)
            this.newCardData.id = uid
            this.$emit('onSubmit', this.newCardData )
            this.$refs.form.reset();   
          },
     },
  }  
</script>
<style scoped>
.container{
  display: flex;
}
p{
  color: white;
  font-weight: bold;
  font-size: 30px;
}
.submitButton{
  width: 600px;
  height: 100px;
  background-color: black;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 30px;
}
.fieldVendor{
  width:600px;
  border-radius: 15px;
  min-height: 80px;
  margin-bottom: 5%;
  margin-top: 2%;
  font-size: 24px;
  display: flex;
  padding-left: 10%;
}
.fieldValid{
  width:100px;
  display: inline;
}
.CVV{
  width:150px;
}
.fieldName{
  padding-left: 10%;
}
.fieldNumber{
  padding-left: 10%;
}
.formContainer{
  margin-top: 25%;
  margin-left: 3%;
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
input {
  border-radius: 15px;
  width: 600px;
  height: 80px;
  margin: 2%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}
.label{
  margin-left: 4%;
}
</style>