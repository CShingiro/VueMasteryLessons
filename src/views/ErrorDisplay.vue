<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ error: any }>();

props.error;
</script>
