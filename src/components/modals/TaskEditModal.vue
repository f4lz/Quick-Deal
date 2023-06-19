<template>
  <div class="task__modal">
    <button class="task__modal__close" @click="close"> <SvgIcon class="task__modal__close--icon" type="mdi" :path="path"/> </button>
    <div class="task__modal__info">
      <h2 class="task__modal__info__title"> Редактировать задачу </h2>
      <form class="task__modal__info__form" @submit.prevent="editTask(task.id)">
        <input v-model="taskText" class="task__modal__info__form__input" type="text" :placeholder="task.text">
        <button class="task__modal__info__form__button"> Сохранить </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapGetters } from "vuex"
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js';

export default Vue.extend({
  name: "TaskEditModal",
  components: {
    SvgIcon
  },
  props: {
    task: {
      type: Object
    }
  },
  data: () => ({
    path: mdiClose,
    taskText: ''
  }),
  computed: {
    ...mapGetters(['getTasks']),
  },
  methods: {
    close() {
      this.$emit('onclose')
    },
    editTask(taskId: number) {
      this.$store.dispatch('editTask', [ taskId, this.taskText ])
      this.close()
    }
  }
})

</script>