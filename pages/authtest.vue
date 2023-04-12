<template>
  <p v-if="data">
    {{ data.data }}
    <button @click="navigateTo('/')">
      Go back
    </button>
  </p>
  <NuxtErrorBoundary>
    <div v-if="error">
      {{ error.message }}
      <button @click="clearError({ redirect: '/' })">
        Go back
      </button>
    </div>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();
const { data, error } = await $client.user.isAuthed.useQuery();
</script>
