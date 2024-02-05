<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from 'lib'
import { ref } from 'vue';

const counterStore = useCounterStore()
const { counter, double } = storeToRefs(counterStore)
const { increment } = counterStore

const incrementValue =  ref(1)
</script>

<template>
  <h1>Mixed Component/Store</h1>
  <div class="card">
    <div>
      <label>
        Counter Value:
        <input type="number" v-model.number="counter" />
      </label>
    </div>
    <div>
      <label>
        Increment Value:
        <input type="number" v-model.number="incrementValue" />
      </label>
    </div>
    <div>Double Value: {{ double }}</div>
    <div>
      <button type="button" @click="increment(incrementValue)">increment by {{ incrementValue }}</button>  
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
