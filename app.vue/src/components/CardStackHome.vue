<template>
  <div>  
    <div 
     v-for="(card, index) in getCardStack"
    :key="index"> 
    <CardStackCard 
    :id="card.id"
    :cardNumber="card.number"
    :cardHolder="card.holder"
    :cardVendor="card.vendor"
    :cardMonth="card.validMonth"
    :cardYear="card.validYear"
    :index="index"
    /> 
   </div>
  </div>
</template>
<script>
import CardStackCard from './CardStackCard.vue'
export default {
  components: {
     CardStackCard
  },
    computed: {
       getCardStack(){
         return this.$root.$data.cardData      
       }
    }
}
</script>
<style scoped>
</style>