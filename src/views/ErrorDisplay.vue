<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p>
</template>

<script lang="ts">
export default {
  props: ["error"],
};
</script>
