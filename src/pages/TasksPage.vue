<template>
  <section class="todolist">
    <h1 class="todolist__title"> Список задач </h1>
    <div class="todolist__form">
      <input v-model="taskText" class="todolist__form__input" type="text" placeholder="Напишите задачу...">
      <UIButton class="todolist__form__button" @onclick="addTask"> Добавить </UIButton>
    </div>
    <div class="todolist__tasks">
      <task-component v-for="task in getTasks" :key="task.id" :task="task"/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import { mapGetters } from "vuex";
import UIButton from "@components/ui/UIButton.vue"

import TaskComponent from "@components/TaskComponent.vue";

export default Vue.extend({
  name: "TasksComponent",
  components: {
    TaskComponent,
    UIButton
  },
  data: () => ({
    taskText: ""
  }),
  computed: {
    ...mapGetters(['getTasks']),
  },
  methods: {
    addTask() {
      if ( this.taskText ) {
        this.$store.dispatch( 'addTask', {
          id: new Date().getTime(),
          text: this.taskText,
          done: false
        } )
        this.taskText = ''
      }
    }
  }
})

</script>
