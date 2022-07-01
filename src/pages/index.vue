<script setup>
useTitle('Vital - Homepage');
const q = useQuasar();
q.notify('Welcome to the Homepage', 'success');
function onClick() {
  q.notify('You clicked the button', 'success');
}
</script>

<template>
  <q-page
    class="flex flex-col flex-center space-y-30 bg-[#404053] text-purple-50"
  >
    <VitalWelcome></VitalWelcome>
    <q-btn
      color="primary"
      icon="check"
      label="OK"
      @click="onClick"
      to="/users/3333"
    />
    <q-icon name="print" size="xl" />
  </q-page>
</template>
