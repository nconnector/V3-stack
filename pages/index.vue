<script setup lang="ts">
const { $client } = useNuxtApp();

const count = ref(0);
const { data: hello } = await useAsyncData(
  () => $client.hello.query({ text: `greeting #${count.value}` }),
  { watch: [count] }
);

const increment = async () => {
  count.value++;
};
</script>

<template>
  <div>
    <p>{{ hello?.greeting }}</p>
    <button @click="() => increment()">increment Q</button>
  </div>
</template>
