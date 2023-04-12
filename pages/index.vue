<template>
  <div class="auth">
    <button @click="() => signIn()">
      Log in
    </button>
    <button @click="() => signOut()">
      Log out
    </button>
    <div>Status: {{ status }}</div>
    <div>Data: {{ data }}</div>
    <div>lastRefreshedAt: {{ lastRefreshedAt }}</div>
  </div>
  <div class="test-handles">
    <div>
      <div>{{ hello?.greeting || "unavailable" }}</div>
      <button @click="() => increment()">
        increment public
      </button>
    </div>
    <div>
      <div>{{ helloAuth?.greeting || "unavailable" }}</div>
      <button @click="() => incrementAuth()">
        increment auth-protected
      </button>
    </div>
  </div>
  <button @click="() => navigateTo('/authtest')">
    Test protected page
  </button>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMainStore } from "~/store";

const { $client } = useNuxtApp();

// auth state
const { status, data, signIn, signOut, lastRefreshedAt } = useAuth();

// pinia state
const { count, countAuthed } = storeToRefs(useMainStore());

// async trpc state
const { data: hello } = await useAsyncData(
  () =>
    $client.helloWorld.hello.query({
      text: `#${count.value}`
    }),
  { watch: [count] }
);
const { data: helloAuth } = await useAsyncData(
  () =>
    $client.helloWorld.helloAuthenticated.query({
      text: `#${countAuthed.value}`
    }),
  { watch: [countAuthed] }
);

// methods
const increment = () => {
  count.value++;
};
const incrementAuth = () => {
  countAuthed.value++;
};
</script>

<style scoped>
.auth,
.test-handles {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}
</style>
