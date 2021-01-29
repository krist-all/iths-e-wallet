<template>
   <div class="container">
     <div class="card"   
     :class="{bitcoin: cardData.vendor === 'BITCOIN INC', 
     ninjabank: cardData.vendor === 'NINJA BANK',
      blockchain: cardData.vendor === 'BLOCK CHAIN INC',
      evilcorp: cardData.vendor === 'EVIL CORP' }">
     <div class="image" v-if="cardData.vendor === 'BITCOIN INC' " >
       <ChipDark />
     </div>
     <div class="image" v-else>
       <ChipLight />
     </div>
     <div class="vendor-image">
      <div v-if="cardData.vendor === 'BITCOIN INC'">
        <BitcoinVendor />
      </div>
      <div v-else-if="cardData.vendor === 'BLOCK CHAIN INC'">
        <BlockVendor />
      </div>
      <div v-else-if="cardData.vendor === 'EVIL CORP'">
        <EvilVendor />
      </div>
      <div v-else-if="cardData.vendor === 'NINJA BANK'">
        <NinjaVendor />
      </div>
     </div>
     <div class="cardNumber">
      <h1>
      {{cardData.number | VMask('#### #### #### ####')}} 
      </h1>
      </div>
      <div class="cardHolder">
      <p>
        CARDHOLDER NAME 
      </p>
      </div>
      <div class="firstnameLastname">
      <p >
       {{cardData.holder}}
      </p>
      </div>
      <div class="cardValid">
      <p >
        VALID THRU 
      </p>
      </div>
      <div class="cardDate">
      <p >
       {{cardData.validMonth}}/{{cardData.validYear}}
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
     components: {
    ChipDark
    ,ChipLight
    , BitcoinVendor
    , BlockVendor
    , EvilVendor
    , NinjaVendor
  },
     props: ['cardData']
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
.card.bitcoin{
  background-color: rgb(218, 204, 12) ;
  color: black;
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
  box-sizing:border-box;
  width:600px;
  height: 350px;
  background-color: rgb(218, 204, 12) ; 
  border-radius:15px;
  box-shadow: 3px 3px 7px 7px #F0F0F0;
  margin-bottom: 15%;
  margin-left: 34%;
  font-family: 'Inconsolata', monospace;
  display:flex;
  padding: 2%;
}
.cardNumber{
  font-size: 24px;
  width: 500px;
  margin-top:20%;
  margin-left:-90%;
}
.cardNumber h1{
 font-family: 'Inconsolata', monospace;
}
.cardHolder{
  margin-top:35%;
  height:50px;
  min-width: 120px;
  margin-left: -100%;
  font-size:14px;
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
  margin-left:-26%;
}
.firstnameLastname p {
  font-family: 'Inconsolata', monospace;
}
.cardValid{
  font-size:14px;
  margin-top:35%;
  min-width: 120px;  
  margin-left: 40%;
}
.cardDate{
  margin-top: 40%;
  font-size:24px;
  margin-left: -17%;
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