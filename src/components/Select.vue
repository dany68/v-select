<template lang="html">
    <div class="select">
        <select :name="name" v-model="value" @change="select">
            <option v-for="option in options"
                    :value="getValue(option)"
                    v-text="getLabel(option)">
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        /**
         * The select name attribute
         * @type {String}
         */
        name: {
            type: String,
        },

        /**
         * An array of strings or objects to be used as dropdown choices.
         * If you are using an array of objects, v-select will look for
         * a `label` and a `value` keys (ex. [{label: 'This is Foo', value: 'foo'}]).
         * @type {Array}
         */
        options: {
            type: Array,
            default: () => []
        },

        /**
         * The currently selected value passed through v-model.
         * @type {String|null}
         */
        value: {
            default: null
        }
    },

    methods: {
        /**
         * Get the option label
         *
         * @param  {Object|String} option
         * @return {String}
         */
        getLabel(option) {
            if (option != null && typeof option === 'object') {
                return option.label;
            }
            return option;
        },

        /**
         * Get the option value
         *
         * @param  {Object|String} option
         * @return {String}
         */
        getValue(option) {
            if (option != null && typeof option === 'object') {
                return option.value;
            }
            return option;
        },

        /**
         * Synchronize the selected option.
         */
        select() {
            this.$emit('input', this.value);
        }
    }
}
</script>
