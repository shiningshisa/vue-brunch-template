<template>
    <div id="app">
        <!-- nav  -->
        <navbar></navbar>
        <!-- route container -->
        <router-view></router-view>
    </div>
</template>
<script>

    import navbar from "./ui/nav.vue"

    export default {
        name: "App",
        data(){
            return {

            }
        },
        methods:{},
        mounted(){
            console.log("Mounted App")
        },
        components:{
            navbar
        }
    }
</script>
