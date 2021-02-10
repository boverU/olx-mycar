<template>
  <div class="popup">
    <div class="form">
      <h3 class="h3">Отправить заявку на кредит</h3>
      <span class="time">Ответим в течение 60 минут</span>
      <text-input-easy
        v-model="name"
        class="name"
        placeholder="Ваше имя"
        :error="nameError"
        :regex="/^([а-яёА-Яё\s\-]{0,25}||[a-zA-Z\s\-]{0,25})$/g"
      />
      <text-input-easy
        v-model="iin"
        class="iin"
        placeholder="Ваш ИИН"
        :max-length="12"
        :regex="/^[0-9]+$/g"
        :error="iinError"
      />
      <phone-input
        v-model="phone"
        class="phone"
        placeholder="Телефон"
        :error="phoneError"
      />
      <div>
        <div class="text">
          Отправляя заявку, я соглашаюсь с&#160;
          <a target="_blank" href="https://finance.mycar.kz/user_agreement.pdf">
            пользовательским соглашением
          </a>
        </div>
        <el-button
          class="custom-button"
          type="primary"
          native-type="submit"
          :disabled="!accept"
        >
          Получить одобрение
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneInput from './shared/PhoneInput.vue'

import TextInputEasy from './shared/TextInputEasy.vue'
export default {
  components: {
    TextInputEasy,
    PhoneInput,
  },
  data() {
    return {
      iin: '',
      phone: '',
      name: '',
      iinError: '',
      nameError: '',
      phoneError: '',
      accept: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.popup {
  width: 100%;
  padding-top: 50px;
  white-space: normal;
  .form {
    width: 100%;
    h3,
    span {
      display: block;
      text-align: center;
    }
    h3 {
      font-size: 21px;
      line-height: 25px;
    }
    span {
      margin-top: 12px;
    }
    .name {
      margin-top: 32px;
    }
    .iin,
    .phone {
      margin-top: 12px;
    }

    .text {
      margin-top: 32px;
    }

    .custom-button {
      width: 100%;
      margin-top: 32px;
      background: #6c06e8;
      height: 50px;
    }
    .custom-button:disabled {
      background-color: rgba(207, 215, 232, 0.2);
      border-color: rgba(207, 215, 232, 0.2);
    }
  }
}
</style>
