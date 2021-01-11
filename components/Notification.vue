/* eslint-disable prettier/prettier */
<template>
  <div :class="`is-${type}`" class="notification">
    {{ message }}
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  name: 'Notification',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: (val) => ['danger', 'success'].includes(val)
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
