<template>
    <div class="index">
        我是首页
        <div @click="home()">点击到主页</div>
        <div @click="detail()">点击到详情页</div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return{
        }
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