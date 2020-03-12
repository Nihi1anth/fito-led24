<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import firestore from "../firestore"

export default {
  name: 'App',
  components: {Navbar},
  created() {

  }
}
</script>

<style>

</style>
