<template>
    <form @submit.prevent="submit">
        <input type="text" v-model="Fio" placeholder="ФИО" required/>
        <input type="tel" v-model="Phone" placeholder="Телефон" pattern="[0-9]{11}" required/>
        <input type="email" v-model="Email" placeholder="Email" required/>
        <button>Добавить</button>
    </form>    
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            Fio: '',
            Phone: '',
            Email: ''
        }
    },
    methods: {
        ...mapMutations(['addContact']),
        submit() {
            const newContact = {
                id: Date.now(),
                Fio: this.Fio,
                Phone: this.Phone,
                Email: this.Email,
                editing: false
            }
            this.addContact(newContact)
        }

    }
}
</script>

<style scoped>
    input {
        margin: 15px;
    }
</style>