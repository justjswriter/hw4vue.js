import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)

app.directive('href-change', {
    beforeMount: (el, binding) => {
        el.src = binding.value.images[0]
        for(let i = 1; i < binding.value.images.length; i++){
            setTimeout(()=>{
                el.src = binding.value.images[i]
                console.log(i)
            }, binding.value.interval)
        }
    }
})

app.mount('#app')
