<template>
  <div class="main">
    <router-link to="/tasks"><button class="main__button border-gradient">Перейти к задачам</button></router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "MainPage",
})

</script>
