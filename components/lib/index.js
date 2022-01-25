import Demo from './demo/src/main.vue'
import Card from './card/src/main.vue'

const components = {
    Demo,
    Card,
}

const install = function(Vue) {
    if(install.installed) return
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key])
    })
}

const API = {
    install
}

export default API