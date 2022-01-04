
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>学生姓名:{{ sex }}</h2>
    <h2>学生姓名:{{ age + 1 }}</h2>
  </div>
</template>

<script>

//引入一个混合
import {mixin} from '../mixin'
export default {
  name: "School",
  data() {
    return {
      msg: "hello",
    };
  },

  //1、方式一 简单声明接收
  //   props: ["name", "age", "sex"],

  //2、方式二 接收的同时对数据进行类型限制
  //   props: {
  //     name: String,
  //     age: Number,
  //     sex: String,
  //   },

  //3、方式三  接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  //props 传入的值，尽量不要去更改
  props: {
    name: {
      type: String, //name的类型是字符串
      require: true, //name是必要的
    },

    age: {
      type: Number,
      default: 99, //默认值  require 和default一般不会同时出现
    },
    sex: {
      type: String,
      require: true,
    },
  },

  mixins:[mixin]
};
</script>

<style>
</style>