<template>
  <div class="popup dialog-wrapper-div">
    <div v-if="firstModal">
      <div class="form">
        <h3 class="h3">Отправить заявку на кредит</h3>
        <span class="time">Ответим в течение 60 минут</span>
        <text-input-easy
            v-model="name"
            class="name"
            placeholder="Ваше имя"
            :error="nameError"
            :regex="/^([а-яёА-Яё\s\-]{0,25}||[a-zA-Z\s\-]{0,25})$/g"/>
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
        <div class="custom-acception">
          <el-checkbox
              v-model="accept"
              class="custom-acception text"
          >
              Отправляя заявку, я соглашаюсь на условия
              <a
                  href="https://finance.mycar.kz/user_agreement.pdf"
                  target="_blank">пользовательского соглашения
              </a>
              , на сбор и обработку
              <a
                  href="https://finance.mycar.kz/sbor_obrabotka.pdf"
                  target="_blank">персональных данных
              </a>
              и
              <a
                  href="https://finance.mycar.kz/income_information_agreement.pdf"
                  target="_blank">информации о доходах
              </a>
              , а также на предоставление информации в
              <a
                  href="https://finance.mycar.kz/kredit_buro.pdf"
                  target="_blank">кредитное бюро
              </a>
          </el-checkbox>
        </div>
        <el-button
            class="custom-button"
            type="primary"
            native-type="submit"
            :disabled="!accept"
            @click="showSuccess"
        >
          Получить одобрение
        </el-button>
        <el-button
            type="text"
            class="close is-no-stroke"
            @click="hide"
        >
          <icon :type="'close-icon'" class="close-modal-icon" />
        </el-button>
      </div>
    </div>
    <load-scoring-popup :is-popup-open="!firstModal" @close="hide"/>
  </div>

</template>

<script>
/*eslint-disable*/
import PhoneInput from './shared/PhoneInput.vue';
import Icon from "@/components/shared/Icon";
import TextInputEasy from './shared/TextInputEasy.vue'
import LoadScoringPopup from "@/components/LoadScoringPopup";


export default {
  components: {
    TextInputEasy,
    PhoneInput,
    LoadScoringPopup,
    Icon
  },
  props: {
    firstModal: {
      type: Boolean,
      default: true
    },
    close: {
      type: Function,
      default: () => {
      },
    }
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
    };
  },
  methods: {
    hide() {
      this.$emit('close')
    },
    async showSuccess() {
      const obj = {
        name: this.name,
        phonenumber: this.phone,
        iin: this.iin,
      };
      console.log(obj);
      this.openSecondModal();
    },
    openSecondModal() {
      this.firstModal = false;
    }

  }

}
</script>

<style lang="scss">
.dialog-wrapper-div {
  width: 450px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(29, 42, 69, 0.1);
  border-radius: 5px;
}
.popup.bcg {
  background-color: #FFFFFF;
}
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 50px;
    width: 450px;
    border-radius: 5px;
    position: relative;

    h3 {
      font-size: 21px;
      line-height: 25px;
      margin: 0;
      margin-bottom: 12px;
      color: #000000;
      font-family: 'Raleway', sans-serif;
      font-weight: normal;
    }

    .time {
      font-size: 15px;
      line-height: 25px;
      color: #737c92;
      margin-bottom: 32px;
    }

    .name {

    }

    .iin {
      margin: 20px 0;
    }

    .custom-button {
      width: 100%;
      background: #6C06E8;
      height: 50px;
      border-color: #6C06E8;
    }

    .custom-button:disabled {
      background-color: rgba(207, 215, 232, .2);
      border-color: rgba(207, 215, 232, .2);
    }

    .close {
      position: absolute;
      top: -40px;
      right: -35px;
    }

    .close-modal-icon {
      width: 25px;
      height: 25px;
    }

    .custom-acception {
      margin: 20px 0 15px 0;
      display: flex;
      align-items: center;
      white-space: break-spaces;
      word-break: break-word;
      width: 100%;

      > .el-checkbox__input {
        transform: scale(1.5);
        margin-left: 5px;
      }

      .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #737c92;
        border-color: #737c92;
      }

      .el-checkbox__inner:hover {
        border-color: #737c92;
      }

       .text > .el-checkbox__label{
        width: 100%;
        height: auto;
        color: #737c92;
        font-size: 13px;
        line-height: 15px;
        white-space: initial;
        text-align: left;

        > a {
          text-decoration: none;
          color: #6c06e8;
        }
      }
    }

  }
}


</style>