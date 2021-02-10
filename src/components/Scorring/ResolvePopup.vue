<template>
  <div class="form">
    <error v-if="status === 'error'" />
    <aborted v-if="status === 'aborted'" />
    <not-done v-if="status === 'not-done'" />
  </div>
</template>

<script>
import Error from '../shared/ResolvedStatuses/Error.vue'
import Aborted from '../shared/ResolvedStatuses/Aborted.vue'
import NotDone from '../shared/ResolvedStatuses/NotDone.vue'

/**
 * Popup формы успешного принятия заявки на кредит
 * @module components/pages/credit/SuccessPopup
 */
export default {
  components: {
    Error,
    Aborted,
    NotDone,
  },

  props: {
    status: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 502px;
  height: 420px;
  animation: fadein 2s;
}
.but {
  outline: none;
  background: #6c06e8;
  padding: 10px 32px;
  color: white;
  border-radius: 5px;
  border: none;
  & a:visited {
    color: white;
  }
}
.close {
  position: absolute;
  right: -50px;
  top: -50px;
}

@media (max-width: 576px) {
  .form {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .close {
    position: absolute;
    right: 25px;
    top: 25px;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
