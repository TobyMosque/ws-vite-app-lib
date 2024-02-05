import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('lib-counter', () => {
  const counter = ref(0)
  const double = computed(() => counter.value * 2)
  function increment(val: number) {
    counter.value += val
  }

  return {
    counter,
    double,
    increment
  }
})

export type CounterStore = ReturnType<typeof useCounterStore>