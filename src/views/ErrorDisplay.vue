<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p>
</template>

<script setup lang="ts">
interface Props {
  error: string;
}

const props = withDefaults(defineProps<Props>(), {
  error: "",
});
</script>
