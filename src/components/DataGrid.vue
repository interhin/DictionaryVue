<template>
    <div>
        <table v-if="contactsCount > 0" class="table table table-striped table-dark table-hover">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>ФИО</td>
                    <td>Номер телефона</td>
                    <td>Email</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in allContacts" :key="contact.id" :class="{editing: contact.editing}">
                    <td>
                        {{ contact.id }}
                    </td>
                    <td>
                        <div class="view">{{ contact.Fio }}</div>
                        <div class="edit">
                            <input type="text" v-model="contact.Fio"/>
                        </div>
                    </td>
                    <td>
                        <div class="view">{{ contact.Phone }}</div>
                        <div class="edit">
                            <input type="text" v-model="contact.Phone"/>
                        </div>
                    </td>
                    <td>
                        <div class="view">{{ contact.Email }}</div>
                        <div class="edit">
                            <input type="text" v-model="contact.Email"/>
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-danger" @click="deleteContact(contact.id)">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                        <button v-if="!contact.editing" class="btn btn-warning" @click="editContact(contact)">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </button>
                        <button v-else class="btn btn-success" @click="endEditContactWithValidate(contact)">
                            <i class="fa fa fa-floppy-o" aria-hidden="true"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else>Контактов нет!</p>
        <span>{{ allErrors }}</span>
    </div>    
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

const phoneRegex = /^[0-9]{11}$/i;
const emailRegex = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
export default {
    props: ['allContacts'],
    data() {
        return {
            errors: [],
        }
    },
    computed: {
        ...mapGetters(['contactsCount']),
        allErrors() {
            return this.errors.reduce((acc, err)=> acc+=err+"\n",'')
        }
    },
    methods: {
        ...mapMutations(['deleteContact', 'editContact', 'endEditContact']),
        validateContact(contact) {
            this.errors = []
            if (!contact.Fio.trim() || contact.Fio.length < 6) {
                this.errors.push('Некорректный ФИО')
            }
            console.log(phoneRegex.test(contact.Phone))
            if (!phoneRegex.test(contact.Phone)) {
                this.errors.push('Некорректный Телефон')
            }
            if (!emailRegex.test(contact.Email)) {
                this.errors.push('Некорректный Email')
            }
            return !this.errors.length
        },
        endEditContactWithValidate(contact) {
            if (!this.validateContact(contact)) return
            this.endEditContact(contact)
        }
    }
}
</script>

<style scoped>
    td {
        vertical-align: middle !important;
    }
    td button {
        margin: 0 5px;
    }

    .edit {
      display: none;
    }
    .editing .edit {
      display: block
    }
    .editing .view {
      display: none;
    }

    span {
        color: red
    }
</style>