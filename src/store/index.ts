import Vue from 'vue';
import Vuex from 'vuex';
import type { Task } from "@/types/main";

Vue.use(Vuex);

function localStorageSaveTasks(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default new Vuex.Store({
  state: () => ({
    tasks: [] as Task[],
  }),
  getters: {
    getTasks(state) {
      return state.tasks
    }
  },
  mutations: {
    ADD_TASK(state, task: Task) {
      state.tasks.push(task);
      localStorageSaveTasks(state.tasks);
    },
    REMOVE_TASK (state, taskIndex: number) {
      state.tasks.splice( taskIndex, 1 )
      localStorageSaveTasks(state.tasks);
    },
    EDIT_TASK(state, [ taskId, taskText ]: any) {
      if ( taskText && taskId ) {
        const currentTask = state.tasks.find( ({id}: any) => id === taskId )
        if ( currentTask ) {
          currentTask.text = taskText
          localStorageSaveTasks(state.tasks);
        }
      }
    },
    INIT(state) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]') 
      state.tasks = tasks
    }
  },
  actions: {
    localStorageSaveTasks({state}) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    addTask({commit}, task: Task) {
      commit('ADD_TASK', task)
    },
    removeTask({commit}, taskIndex: number) {
      commit('REMOVE_TASK', taskIndex)
    },
    editTask({commit}, [ taskId, taskText ]: any) {
      commit('EDIT_TASK', [ taskId, taskText])
    },
  }
});
