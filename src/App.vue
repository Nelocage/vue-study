<template>
  <div>
    <div id="app">
      <School name="张三" sex="女" :age="19"></School>
      <!-- 可以使用v-bind 语法，对props 传入的参数进行一定的加工后，再显示到界面上 -->
    </div>

    <vue-particles  
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
import School from './components/School'

export default {
  name: 'App',
  components: {

    School,
  }
}
</script>

<style>
vue-particles{
  position: relative;
  margin-top: -100px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
  position: absolute;
  text-align: center;
  background-color:aqua;
/* 
  margin-right: 160px; */ 

}
</style>
