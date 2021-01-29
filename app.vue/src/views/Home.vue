<template>
  <div>
    <div>
      <TopHome />
      <CardHome
       :cardData="cardData"
      />
      <CardStackHome /> 
        <router-link to="/AddCard" class="link"><button class="addBtn">ADD A NEW CARD </button></router-link>
    </div>
  </div>
</template>
<script>
 import TopHome from '../components/TopHome.vue'
 import CardStackHome from '../components/CardStackHome.vue'
 import CardHome from '../components/CardHome.vue'
export default {
   name: 'Home',
  components: {
     TopHome
     , CardStackHome
     , CardHome
  },
  computed:{
    cardData(){
     return this.$root.$data.cardData[this.$root.$data.activeIndex]  
    }
  }
}
</script>
<style scoped>
.addBtn{
  width: 600px;
  border-radius: 15px;
  height: 80px;
  font-size: 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: black;
  margin-left: 34%;
  background-color:white;
  margin-top:2%;
   text-decoration: none;
  color: black;
  font-weight: bold;
}
.link{
  text-decoration: none;
}
</style>
