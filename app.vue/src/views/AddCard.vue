<template>
    <div>
      <div>
        <AddCardTop />
      </div>
       <div>
        <AddCardForm 
        :cardData="cardData"
        @onSubmit="updateCardData" 
        />
       </div>
    </div>
</template>
<script>
import AddCardForm from '../components/AddCardForm.vue'
import AddCardTop from '../components/AddCardTop.vue'
export default {
  name: 'AddCard',
   components: {
     AddCardForm
     , AddCardTop
  
   },
    computed:{
      cardData(){
        return this.$root.$data.cardData    
      }
    },  
    methods: {
      updateCardData(newCardData){
            this.$root.$data.cardData.push(newCardData)  
       }
    }
}
</script>
<style scoped>
</style>