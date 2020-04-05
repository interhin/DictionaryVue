export default {
    actions: {
        async fetchContacts(ctx) {
            setTimeout(()=>{
                const contactsList = [
                    { id: 1, Fio: "Пупкин Василий Евгеньевич", Phone: "89133945496", Email: "diman7277@gmail.com", editing: false }
                ]
                ctx.commit('updateContactsList', contactsList)
                ctx.commit('changeLoading', false)
            },1000)
        },
    },
    mutations: {
        addContact(state, newContact) {
            state.contactsList.push(newContact)
        },
        deleteContact(state, contactId) {
            state.contactsList = state.contactsList.filter(c=> c.id !== contactId)
        },
        updateContactsList(state, contactsList) {
            state.contactsList = contactsList
        },
        changeLoading(state, isLoading) {
            state.loading = isLoading
        },
        editContact(state, contact) {
            contact.editing = true
        },
        endEditContact(state, contact) {
            contact.editing = false
        },
    },
    state: {
        contactsList: [],
        errors: [],
        loading: true
    },
    getters: {
        allContacts(state) {
            return state.contactsList
        },
        isLoading(state) {
            return state.loading
        },
        contactsCount(state) {
            return state.contactsList.length
        }
    },
}