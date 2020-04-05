import Vue from 'vue'
import Vuex from 'vuex'
import contacts from '@/store/modules/contacts'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        contacts
    }
})