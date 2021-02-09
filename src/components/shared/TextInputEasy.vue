<template>
    <div class="textInp">
        <label
            class="textLabel"
            :class="[{ 'is-error': error }, focused]"
        >
            <input
                v-if="inputMasked"
                v-model="getValue"
                v-mask="inputMask"
                :disabled="disabled"
                :maxLength="maxLength"
                :type="inputType"
                :masked="inputMasked"
                @keyup.enter="emitEnter"
                @focus="focus"
                @blur="blur"
            >

            <input
                v-else
                v-model="getValue"
                :disabled="disabled"
                :maxLength="maxLength"
                :type="inputType"
                @keyup.enter="emitEnter"
                @focus="focus"
                @blur="blur"
            >
            <span class="placeholder">{{ placeholder }}</span>
            <span
                v-if="iconClass"
                class="inpIcon"
            >
                <i :class="['icon', iconClass]" />
            </span>

            <icon-button
                v-if="iconClose && maxLength === getValue.length"
                class="icon"
                icon-class="icon-input-close"
                @click.native="clearInput"
            />
        </label>
        <span
            v-if="error"
            class="error-text"
        >{{ error }}</span>
    </div>
</template>

<script>
/**
 * Компонент Инпут для ввода текст
 * @module Component/Shared/TextInputEasy
 * @vue-prop {String} placeholder - placeholder
 * @vue-prop {String} error - текст ошибки
 * @vue-prop {Boolean} disabled - запрет ввода текста
 * @vue-prop {String} value - текст приходящий
 * @vue-prop {Number} maxLength - максимальная допустимая длина ввода
 * @vue-prop {String} inputType - тип инпута
 * @vue-prop {String} inputMask - маска для инпута
 * @vue-prop {Boolean} inputMasked - используем маску или нет
 * @vue-date {Boolean} isFocus - есть ли фокус на инпуте
 * @vue-computed {String} getValue - работает с моделью инпута
 * @vue-computed {String} focused - стиль фокус/анфокус
 */

import { mask } from 'vue-the-mask';

export default {
    directives: { mask },
    props: {
        placeholder: {
            type: String,
            default: 'Текст в поле',
        },
        error: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: [String, Number],
            default: '',
        },
        maxLength: {
            type: Number,
            default: Infinity,
        },
        iconClass: {
            type: String,
            default: '',
        },
        inputType: {
            type: String,
            default: 'text',
        },
        inputMask: {
            type: String,
            default: '',
        },
        inputMasked: {
            type: Boolean,
            default: false,
        },
        iconClose: {
            type: Boolean,
            default: false,
        },
        minValue: {
            type: Number,
            default: 0,
        },
        regex: {
            type: RegExp,
            default: () => /.{0,}/,
        },
    },
    data() {
        return {
            isFocus: false,
        };
    },
    computed: {
        getValue: {
            get() {
                this.checkFocus();
                /* Другой вывод для ценового типа данных */
                if (this.inputType === 'price') {
                    if (this.value === '') return '';
                    return (+this.value).toLocaleString();
                }
                return this.value;
            },
            set(val) {
                if (this.maxLength && val.length <= this.maxLength) {
                    let value = val;
                    /* Приводим в нормальную строку */
                    // eslint-disable-next-line
                    if (this.inputType === 'price') value = val.split(/[, ]/).join('');
                    this.$emit('input', value);
                }
            },
        },
        focused() {
            return this.isFocus ? 'is-focused' : 'no-focus';
        },
    },
    watch: {
        value() {
            if (this.regex && this.value) {
                const regex = this.value.match(this.regex);
                if (!regex) this.getValue = this.value.slice(0, this.value.length - 1);
            }
        },
    },
    methods: {
        clearInput() {
            this.$emit('input', '');
        },
        /**
         * Ставим или убираем фокус с инпута, по пришедшему value
         */
        checkFocus() {
            if (this.value) this.isFocus = !!String(this.value).length;
        },
        /**
         * Ставим фокус на инпут
         */
        focus() {
            this.$emit('focus');
            this.isFocus = true;
        },
        /**
         * Убираем фокус с инпута
         */
        blur() {
            this.$emit('blur');
            if (this.value.length < 1) this.isFocus = false;
        },
        /**
         * Эмит кнопки Энтер
         */
        emitEnter() {
            this.$emit('enter');
        },
    },
};
</script>

<style lang="scss" scoped>
.textInp {
    display: block;
    position: relative;
    width: 100%;
}

.textLabel {
    display: flex;
    align-items: center;
    position: relative;
    background-color: white;
    padding: 10px;
    padding-right: 25px;
    border: 1px solid #cfd7e8;
    box-sizing: border-box;
    border-radius: 5px;

    input {
        width: 100%;
        height: 28px;
        border: none;
        outline: none;
        text-overflow: ellipsis;

        ::-ms-clear {
            width: 0;
            height: 0;
        }

        ::-ms-reveal {
            width: 0;
            height: 0;
        }
    }

    &:hover {
        border: 1px solid #737c92;
    }
}

.inpIcon {
    position: absolute;
    right: 12px;
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
    position: absolute;
    pointer-events: none;
    font-size: 15px;
    top: 15px;
    transition-duration: 0.2s;
    color: #737c92;
}

.readonly {
    cursor: not-allowed;
    border: 1px solid #cfd7e8;
    &:hover {
        border: 1px solid #cfd7e8;
    }
    & > input {
        cursor: not-allowed;
    }
}

.is-error {
    border: 1px solid #ff6770;
}

.error-text {
    font-size: 11px;
    color: #fa4550;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[type='text']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
}
input[type='text']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
}
input[type='number'] {
    -moz-appearance: textfield;
}
</style>
