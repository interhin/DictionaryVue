<template>
  <div id="app">
    <Loader v-if="isLoading"/>
    <DataGrid v-else :allContacts="allContacts"/>
    <AddContactForm />
  </div>
</template>

<script>
import DataGrid from "@/components/DataGrid"
import AddContactForm from "@/components/AddContactForm"
import Loader from '@/components/Loader'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "App",
  computed: {
    ...mapGetters(["allContacts", "isLoading"])
  },
  methods: {
    ...mapActions(["fetchContacts"])
  },
  async mounted() {
    this.fetchContacts()
  },
  components: {
    DataGrid, AddContactForm, Loader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
