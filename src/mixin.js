// 暴露方式为：分别暴露，引用的时候，需要使用import {} form '  '的形式导入，注意一定要使用花括号
export const mixin = {
    methods: {
        showName() {
            console.log(this.name);
        }
    },



}


//暴露方式为默认暴露
export default {

}