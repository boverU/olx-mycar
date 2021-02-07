<template>
    <div class="slInp">
        <el-slider
            v-model="slider"
            class="slider is-inButton"
            :min="min"
            :max="max"
            :step="step"
            :marks="marks"
            :show-tooltip="false"
            autocomplete="off"
            @change="changeData"
        />
    </div>
</template>

<script>
/**
 * Компонент текстового поля со слайдером
 * @module components/shared/SliderInput
 * @vue-prop {String} placeholder - placeholder
 * @vue-prop {String} value - значние инпута и слайдера
 * @vue-prop {String} iconClass - опц иконка
 * @vue-prop {Number} min - мин значение
 * @vue-prop {Number} max - макс значение
 * @vue-prop {String} mask - Маска для инпута
 * @vue-data {Object} tokens - значения regex для маски
 * @vue-data {Boolean} focus - фокус инпута
 * @vue-event {} marks - Расчет промежуточных цифр для слайдера
 * @vue-event {} blur - Снять фокус и инпута
 */
export default {
    props: {
        placeholder: {
            type: String,
            default: 'Введите цену',
        },
        value: {
            type: [Number, String],
            default: 0,
        },
        iconClass: {
            type: String,
            default: '',
        },
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 72,
        },
        showMarks: {
            type: Boolean,
            default: false,
        },
        step: {
            type: Number,
            default: 1,
        },
        customStep: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            money: {
                decimal: ',',
                thousands: '.',
                prefix: '',
                suffix: '',
                precision: 0,
                masked: false,
            },
            focus: true,
            inputModel: '',
        };
    },
    computed: {
        inputValueWithSpaces: {
            get() {
                /* Приводим к нормальному отображению число */
                return Number(this.inputModel).toLocaleString();
            },
            set(val) {
                // eslint-disable-next-line
                const value = val.split(/[, ]/).join('');
                /* Валидация поля, только цифры */
                if (Number(value[value.length - 1]) > -1 && value[value.length - 1] !== ' ') {
                    this.inputModel = Number(value);
                } else {
                    this.inputModel = '';
                    this.inputModel = value.slice(0, value.length - 1);
                }
            },
        },
        slider: {
            get() {
                if (Number(this.value)) {
                    return Number(this.value);
                }
                return 0;
            },
            set(val) {
                let outValue = val;
                if (this.customStep !== 1) {
                    outValue = Math.round(val / this.customStep) * this.customStep;
                    if (val === this.min) outValue = this.min;
                    if (outValue > this.max) outValue = this.max;
                }

                if (outValue === 0) {
                    this.$emit('input', '');
                } else {
                    this.$emit('input', String(outValue));
                }
            },
        },
        marks() {
            if (this.showMarks) {
                const marks = {};
                const range = this.max - this.min;
                let min = Math.floor(this.min / 6) * 6;

                let shag = 12;
                if (range < 48) shag = 6;

                while (min < this.max) {
                    if (min === 0) {
                        marks[1] = '1';
                    } else {
                        marks[min] = `${min}`;
                    }

                    min += shag;
                }

                marks[this.max] = `${this.max}`;
                return marks;
            }
            return {};
        },
    },
    watch: {
        value() {
            this.inputModel = this.value;
        },
        inputModel() {
            /* Эмитим только в случае нахождения внутри диапазона */
            if (this.inputModel <= this.max && this.inputModel >= this.min) {
                this.$emit('input', this.inputModel);
            }
        },
    },
    created() {
        this.inputModel = this.value;
    },
    methods: {
        changeData() {
            this.$emit('slider-change');
        },
        validInput() {
            /* Обработка крайних значений при снятии фокуса с инпута */
            if (this.inputModel > this.max) {
                this.inputModel = this.max;
            } else if (this.inputModel < this.min) {
                this.inputModel = this.min;
            }
            this.$emit('input', this.inputModel);
            this.$emit('slider-change');
        },
    },
};
</script>

<style lang="scss" >
.slInp {
    display: block;
    width: 100%;
    height: 50px;
}

.slLabel {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: white;
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
}

.icon {
    position: absolute;
    right: 12px;
}

.slInp:hover {
    .slLabel {
        border: 1px solid #737c92;
    }
}

.is-focused {
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

::-webkit-input-placeholder {
    color: #737c92;
}
::-moz-placeholder {
    color: #737c92;
} /* Firefox 19+ */
:-moz-placeholder {
    color: #737c92;
} /* Firefox 18- */
:-ms-input-placeholder {
    color: #737c92;
}
.el-slider__bar{
    background: #6C06E8 !important;
}
</style>
