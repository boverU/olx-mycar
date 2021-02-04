<template>
  <div>
    <div class="wrapper">
     <div class="app"><nav-bar/></div> 
    </div>
    
    <div class="grey-wrapper">
     <div class="app">
       <hero />
      </div> 
    </div> 
    
   <div class="wrapper">
     <div class="app"><about/></div>
     </div> 
    
    <div class="wrapper">
     <div class="app"><slider/></div>
     </div> 
     <div class="wrapper">
     <div class="app"> <approvement-info /></div>
     </div> 
     <div class="grey-wrapper">
     <div class="app"> <calculator /></div>
     </div> 
   
    
  </div>
    
</template>

<script>
import NavBar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Slider from './components/Slider.vue'
import ApprovementInfo from './components/ApprovementInfo.vue'
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
   NavBar,
   Hero,
   About,
   Slider,
   ApprovementInfo,
   Calculator
  }
}
</script>

<style>

@font-face {
  font-family: "regular";
  src: url("./fonts/Raleway-Regular.ttf");
}

@font-face {
  font-family: "medium";
  src: url("./fonts/Raleway-Medium.ttf");
}
body{
  background: rgba(207, 215, 232, 0.08);
}
body, * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: regular;
  font-weight: 500;
  font-feature-settings: 'pnum' on, 'lnum' on;
}
.app {
  max-width: 1198px;
  width: 100%;
}
.grey-wrapper{
  display: flex;
  justify-content: center;
  background: rgba(207, 215, 232, 0.2);
}


.wrapper{
  display: flex;
  justify-content: center;
}



</style>
