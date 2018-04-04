# A select dropdown component for Vue.js 2

## Demo

A live demo is available [here](https://dany68.github.io/elements/docs/components/forms#select).

## Installation

You can install the package via npm:

```php
npm install dany68/v-select --save
```

Then you will need to register the component globally in you main js file.

```js
// If Vue has been added to the global scope as:
// window.Vue = require('Vue')
require('v-select');

// Otherwise
import Select from 'v-select';
Vue.use(Select);
```

Alternatively you can register v-select locally:

```js
//in your Component.vue or similar file
import Select from 'v-select';

export default {
    components: { 'v-select': Select }
}
```

## Usage

On your page you can now use html like this to render the select dropdown:

```HTML
<v-select v-model="selected" :options="[{value: 'foo', text: 'This is foo', disabled: true }, {value: 'bar', text: 'This is bar'}]"></v-select>
```

The value is synchronized with the `v-model` attribute.


#### Options

| Prop        | Type   | Default | Required | Description                                            |
| ----------- |:------:|:-------:|:--------:|:------------------------------------------------------:|
| name        | String |         | No       | The HTML select name attribute.                         |
| label       | String |         | No       | If set will add a label. The value will be the label text. |
| icon        | String |         | No       | Classes of the icon to display (ex: 'fas fa-globe').    |
| placeholder | String |         | No       | Placeholder text. If set will add a disabled selected option to mimic an input placeholder. |
| options     | Array  |         | No       | See below.                                              |


#### Select dropdown option list

The option list is generated thanks to the v-select `options` prop.
v-select will look for a `text` and a `value` keys.
You can also add a boolean `disabled` key to specify if the option should be disabled.

```HTML
let options = [
    { value: 'foo', text: 'This is foo' },
    { value: 'bar', text: 'This is bar' },
    { value: 'disabled', text: 'This option is disabled', disabled: true },
];

<v-select v-model="selected" :options="options"></v-select>
```

Alternatively you can use the default slot to render the option list.
This method can be useful if you want to make optgroup.

```HTML
<v-select v-model="selected" placeholder="Choose a city" icon="fas fa-globe">
    <optgroup label="US">
        <option value="PA">Palo Alto</option>
        <option value="SF">San Fransisco</option>
    </optgroup>
    <optgroup label="Europe">
        <option value="P">Paris</option>
        <option value="R">Rome</option>
    </optgroup>
</v-select>
```

## Notes

This package doesn't include CSS styles.
You can either use the [Elements CSS framework](https://github.com/dany68/elements) or simply grab the [select.scss file](https://github.com/dany68/elements/blob/master/sass/components/forms/select.scss) from it.
