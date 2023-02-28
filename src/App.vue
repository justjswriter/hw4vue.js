<script>
    export default {
        data() {
            return {
                linkArray: ['https://picsum.photos/255','https://picsum.photos/211','https://picsum.photos/221','https://picsum.photos/205'],
                interval: 1000
            }
        },
        methods: {
            addPost(){
                this.amount++
            }
        }

    }
</script>
 
<template>
    <img v-href-change="{images: linkArray, interval: interval}" alt="">
    <p>Zhanerke</p>
</template>

<style scoped>

</style>
