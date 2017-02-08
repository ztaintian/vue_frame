<template>
    <div class="index">
        我是首页
        <div @click="home()">点击到主页</div>
        <div @click="detail()">点击到详情页</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
// console.log(mapState)
// console.log(store)
export default {
    name: 'index',
    data() {
        return{
        }
    },
    mounted(){
        console.log(this.$store.state.weigth)
    },
    methods:{
        home:function(){
            this.$router.push({
                name:'Home'
            })
        }
    }
}
</script>