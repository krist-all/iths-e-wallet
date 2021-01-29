<template>
  <div class="container">
     <div class="card" 
      :class="{bitcoin: newCardData.vendor === 'BITCOIN INC', 
      ninjabank: newCardData.vendor === 'NINJA BANK',
      blockchain: newCardData.vendor === 'BLOCK CHAIN INC',
      evilcorp: newCardData.vendor === 'EVIL CORP' }"
     >
     <div class="image" v-if="newCardData.vendor === 'BITCOIN INC' " >
       <ChipDark />
     </div>
     <div class="image" v-else>
       <ChipLight />
     </div>
     <div class="vendor-image">
      <div v-if="newCardData.vendor === 'BITCOIN INC'">
        <BitcoinVendor />
      </div>
      <div v-else-if="newCardData.vendor === 'BLOCK CHAIN INC'">
        <BlockVendor />
      </div>
      <div v-else-if="newCardData.vendor === 'EVIL CORP'">
        <EvilVendor />
      </div>
      <div v-else-if="newCardData.vendor === 'NINJA BANK'">
        <NinjaVendor />
      </div>
     </div>
     <div class="cardNumber">
      <h1>
        {{newCardData.number | VMask('#### #### #### ####')}} 
      </h1>
      </div>
      <div class="cardHolder">
      <p>
        CARDHOLDER NAME 
      </p>
      </div>
      <div class="firstnameLastname">
      <p >
      {{newCardData.holder}}
      </p>
      </div>
      <div class="cardValid">
      <p >
        VALID THRU 
      </p>
      </div>
      <div class="cardDate">
      <p >
       {{newCardData.validMonth}}/{{newCardData.validYear}}
      </p>
      </div>
    </div>
  </div>
</template>
<script>
import ChipDark from '../assets/ChipDark'
import ChipLight from '../assets/ChipLight'
import BitcoinVendor from '../assets/BitcoinVendor'
import BlockVendor from '../assets/BlockVendor'
import EvilVendor from '../assets/EvilVendor'
import NinjaVendor from '../assets/NinjaVendor'
import Vue from 'vue'
import VueMask from 'v-mask'
Vue.use(VueMask)
export default { 
  name:'addCardCard',
   props: {
     newCardData: Object
   },
   components: {
    ChipDark
    ,ChipLight
    , BitcoinVendor
    , BlockVendor
    , EvilVendor
    , NinjaVendor
  },
  data(){
    return{
      bitcoin: 'bitcoin' 
      , ninjabank: 'ninjabank'
      , blockchain: 'blockchain'
      , evilcorp: 'evilcorp'
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
.container{
    display: flex;
}
.card.bitcoin{
  background-color: rgb(218, 204, 12) ;
}
.card.ninjabank{
  background-color:#323232 ;
  color: #D3D3D3;
}
.card.blockchain{
  background-color: #512888 ;
  color: #D3D3D3;
}
.card.evilcorp{
  background-color: #8b0000;
  color: #D3D3D3;
}
.card{
  box-sizing: border-box;
  width:600px;
  height: 350px;
  background-color: #D3D3D3; 
  border-radius:15px;
  box-shadow: 3px 3px 7px 7px #F0F0F0;
  color: black;
  font-family: 'Inconsolata', monospace;
  display: flex;
  padding: 5%;
  margin-left: 110%;
}
.cardNumber{
  font-size: 24px;
  width: 500px;
  margin-top: 20%;
  margin-left: -85%;
  position: sticky;
}
.cardNumber h1{
 font-family: 'Inconsolata', monospace;
}
.cardHolder{
  margin-top:35%;
  height:50px;
  min-width: 120px;
  margin-left: -95%;
  font-size:14px;
  position: sticky;
}
.cardHolder p{
 font-family: 'Inconsolata', monospace;
}
.firstnameLastname{
  margin-top: 40%;
  text-transform: uppercase;
  min-width: 250px;
  max-height: 40px;
  font-size:24px;
  margin-left:-21%;
  position: sticky;
}
.firstnameLastname p {
  font-family: 'Inconsolata', monospace;
}
.cardValid{
  font-size:14px;
  margin-top:35%;
  min-width: 120px;  
  margin-left: 35%;
  position: sticky;
}
.cardDate{
  margin-top: 40%;
  font-size:24px;
  margin-left: -17%;
  position: sticky;
}
.cardValid p {
 font-family: 'Inconsolata', monospace;
}
.cardDate p {
 font-family: 'Inconsolata', monospace;
}
.vendor-image{
  margin-left: 80%;
}
</style>