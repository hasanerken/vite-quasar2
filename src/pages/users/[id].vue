<template>
  <div>Merhaba {{ $route.params.id }}</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  layout: admin
  requiresAuth: true
  # roles:
  #   - admin1
  #   - client1
</route>
