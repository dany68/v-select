import Select from './components/Select';

const Plugin = {
    install(Vue) {
        Vue.component('v-select', Select);
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin);
}

export default Plugin;
