Vue.component('input-number', {
    template: '<div><input type="text" :value="currentValue" @change="handlechange"/><button @click="handleDown" :disabled="currentValue <= min"> - </button> <button @click="handleUp" :disabled="currentValue >= max"> + </button> </div>',
    props: {
        // 定义三个props，并给予类型和初始值
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: Infinity
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data: function () {
        // 不直接对父组件的值进行操作
        return {
            currentValue: this.value
        }
    },
    watch: {
        // 监听currentValue值的变化
        currentValue: function (val) {
            this.$emit('input', val)
        }
    },
    methods: {
        // 和max，min判断，最后赋予currentValue值
        updateValue: function (val) {
            if (val > this.max) val = this.max;
            if (val < this.min) val = this.min;
            this.currentValue = val;
        },
        // 手动填写数字，不点击添加或者减少按钮
        handlechange: function (event) {
            var val = event.target.value.trim();
            var min = this.min;
            var max = this.max;
            var val = Number(val);
            if (val >= max) {
                this.currentValue = max
            } else if (val < min) {
                this.currentValue = min
            } else {
                this.currentValue = Number(val)
            }
        },
        // 点击减小按钮
        handleDown: function () {
            if (this.currentValue < this.min) return;
            this.currentValue -= 1
        },
        // 点击添加按钮
        handleUp: function () {
            if (this.currentValue > this.max) return;
            this.currentValue += 1
        }
    },
    mounted: function () {
        // 加载就执行
        this.updateValue(this.value)
    }
});