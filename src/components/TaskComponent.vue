<template>
 <div>
  <div class="task">
    <div class="task__info">
      <input v-model="task.done" type="checkbox">
      <h2 :class="{'task__info-title': task.done}">
        {{ task?.text }}
      </h2>
    </div>
    <div class="task__buttons">
      <button class="task__buttons-edit" @click="showEditModal"> Редактировать </button>
      <button class="task__buttons-remove" @click="removeTask(task.id)"> Удалить </button>
    </div>
    <task-edit-modal @onclose="closeEditModal" v-if="editModal.display" :task="task"/>
  </div>
 </div>
</template>

<script lang="ts">
import Vue from "vue"

import type { Modal } from "@/types/main";

import { mapGetters } from "vuex";

import TaskEditModal from "@components/modals/TaskEditModal.vue"

export default Vue.extend({
  name: "TaskComponent",
  components: {
    TaskEditModal
  },
  props: {
    task: {
      type: Object,
    }
  },
  data: () => ({
    editModal: {
      display: false as boolean,
      props: {}
    } as Modal
  }),
  computed: {
    ...mapGetters(['getTasks']),
  },
  methods: {
    removeTask(taskId: number) {
      const currentTask = this.getTasks.findIndex( ({ id }: any) => id === taskId )
      this.$store.dispatch( 'removeTask', currentTask )
      this.closeEditModal()
    },
    showEditModal() {
      this.editModal.display = true
    },
    closeEditModal() {
      this.editModal.display = false
    }
  }
})

</script>
