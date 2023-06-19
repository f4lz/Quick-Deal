<template>
  <div>
    <button class="ui-button" v-bind="$attrs" @click="onclick">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "UIButton",
  methods: {
    onclick() {
      this.$emit( 'onclick' )
    }
  }
})

</script>