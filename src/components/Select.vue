<template lang="html">
    <div class="select" :class="classes">

        <i v-if="icon" class="input-icon" :class="icon"></i>

        <select :name="name" @change="select">

            <option v-if="placeholder" value="" :selected="value == null" disabled>{{ placeholder }}</option>

            <slot></slot>

            <option
            v-for="option in options"
            :value="option.value"
            :selected="option.value == value"
            :disabled="option.disabled"
            v-text="option.text"></option>

        </select>

        <label v-if="label" class="floating-label">{{ label }}</label>

    </div>
</template>

<script>
export default {
    props: {
        /**
         * The HTML select name attribute.
         */
        name: {
            type: String,
        },

        /**
         * If set will add a label.
         * The value will be the label text.
         */
        label: {
            type: String
        },

        /**
         * If set will add an <i> tag and
         * bind this icon prop to the <i> class attribute.
         */
        icon: {
            type: String
        },

        /**
         * Placeholder text.
         * If set will add a disabled selected option to mimic an input placeholder.
         */
        placeholder: {
            type: String
        },

        /**
         * An array of objects to be used as dropdown choices.
         * v-select will look for a `text` and a `value` keys.
         * You can also add a boolean `disabled` key to specify if the option should be disabled.
         * ex: [ {value: 'foo', text:'This is Foo', disabled: true} ]
         */
        options: {
            type: Array,
            default: () => []
        },

        /**
         * Used to bind the value with v-model.
         */
        value: {
            default: null
        }
    },

    computed: {
        /**
         * Classes to be output on .select
         */
        classes() {
            return {
                'has-label': this.label,
                'has-icon': this.icon,
                'selected-is-null': this.value == null
            }
        }
    },

    methods: {
        /**
         * Emit an input event up to the parent.
         */
        select(e) {
            this.$emit('input', e.target.value);
        }
    }
}
</script>
