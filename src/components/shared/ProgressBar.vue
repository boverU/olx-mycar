<template>
    <div
        class="progress"
        :style="barStyle"
    />
</template>

<script>
export default {
    props: {
        percentage: {
            type: Number,
            default: 0,
        },
        backgroundColor: {
            type: String,
            default: '#F8FAFF',
        },
        barColor: {
            type: Array,
            default: () => ['#30c884'],
            // один элемент - однотонный, два цвета для градиента
        },
    },

    data() {
        return {
            localPercentage: 0,
            timerId: null,
        };
    },

    computed: {
        barStyle() {
            let fillColorsString;

            if (this.barColor.length === 1) {
                fillColorsString = `${this.barColor[0]} 0%, ${this.barColor[0]} ${this.localPercentage}%`;
            } else {
                fillColorsString = `${this.barColor[0]} 0%, ${this.barColor[1]} ${this.localPercentage}%`;
            }

            const str = `linear-gradient(90deg, ${fillColorsString}, ${this.backgroundColor} ${this.localPercentage}%)`;
            const outObjStyle = {
                background: str,
                'transition-duration': '200ms',
            };

            return outObjStyle;
        },
    },

    watch: {
        percentage() {
            clearInterval(this.timerId);

            this.timerId = setInterval(() => {
                if (this.localPercentage < this.percentage) {
                    this.localPercentage += 0.5;
                } else {
                    this.localPercentage -= 0.5;
                }

                this.localPercentage = Number(this.localPercentage.toFixed(1));
                if (this.percentage === this.localPercentage) clearInterval(this.timerId);
            }, 10);
        },
    },

    created() {
        this.localPercentage = this.percentage;
    },
};
</script>

<style lang="scss" scoped>
.progress {
    width: 100%;
    height: 100%;
}
</style>
