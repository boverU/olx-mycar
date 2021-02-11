<template>
  <div class="phoneInp">
    <label
        class="phoneLabel"
        :class="[focus ? 'is-focused' : 'no-focus', { 'is-error': error || localError }]"
    >
      <input
          v-model="myInputModel"
          v-mask="{ mask: phoneMask, tokens: tokens }"
          type="text"
          masked="true"
          autocomplete="off"
          @focus="onFocus"
          @blur="onblur"
          @input="onchange"
      >
      <span class="placeholder">Введите телефон</span>
      <!--            <icon-button-->
      <!--                v-if="full"-->
      <!--                class="icon"-->
      <!--                icon-class="icon-input-close"-->
      <!--                @click.native="clear"-->
      <!--            />-->

      <icon
          v-if="full"
          :type="'input-clear'"
          class="input-close"
          @click.native="clear"
      />

    </label>
    <span
        v-if="error && !localError"
        class="error-text"
    >{{ error }}</span>
    <span
        v-if="localError"
        class="error-text"
    >{{ localError }}</span>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask';
import Icon from "@/components/shared/Icon";

export default {
  components: {Icon},

  directives: {mask},
  props: {
    phoneMask: {
      type: String,
      default: '+7 (F##) ###-##-##',
    },
    tokens: {
      type: Object,
      default: () => ({
        F: {
          pattern: /[7,9]/,
        },
        '#': {pattern: /[0-9]/},
      }),
    },
    error: {
      type: String,
      default: '',
    },
    init: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      myInputModel: '',
      focus: false,
      full: false,
      localError: '',
    };
  },
  mounted() {
    if (this.init) {
      this.myInputModel = this.init;
      this.focus = true;
    }
  },
  methods: {
    onblur() {
      if (this.myInputModel.length < this.phoneMask.length) {
        this.localError = 'Телефон введен некорректно';
      } else {
        this.localError = '';
      }
      if (this.myInputModel.length < 1) {
        this.focus = false;
      }
    },
    onchange() {
      if (this.myInputModel.length === this.phoneMask.length) {
        this.full = true;
      } else {
        this.full = false;
      }
      this.$emit('input', this.myInputModel);
    },
    clear() {
      this.myInputModel = '';
      this.onchange();
    },
    onFocus() {
      this.focus = true;
      this.localError = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.phoneInp {
  display: block;
  position: relative;
  width: 100%;
}
.input-close {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.phoneLabel {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  padding: 10px;
  border: 1px solid #cfd7e8;
  box-sizing: border-box;
  border-radius: 5px;

  input {
    width: 100%;
    height: 28px;
    border: none;
    outline: none;
  }

  &:hover {
    border: 1px solid #737c92;
  }
}

.icon {
  position: absolute;
  right: 5px;
}

.is-focused {
  border: 1px solid #224ce2;

  &:hover {
    border: 1px solid #224ce2;
  }

  .placeholder {
    position: absolute;
    top: 4px;
    left: 10px;
    font-size: 11px;
    transition-duration: 0.2s;
    color: #737c92;
  }

  input {
    padding-top: 15px;
    padding-bottom: 5px;
  }
}

.no-focus .placeholder {
  pointer-events: none;
  position: absolute;
  left: 10px;
  top: 15px;
  font-size: 15px;
  transition-duration: 0.2s;
  color: #737c92;
}

.is-error {
  border: 1px solid #ff6770;
}

.error-text {
  position: absolute;
  bottom: -16px;
  font-size: 11px;
  color: #fa4550;
}
</style>
