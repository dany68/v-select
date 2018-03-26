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

On your page you can now use html like this to render the select input box:

```html
<v-select v-model="selected" :options="['foo','bar']"></v-select>

// OR

<v-select v-model="selected" :options="[{label: 'foo', value: 'f'}, {label: 'Bar', value: 'b'}]"></v-select>
```

##### Synchronize the selected value

The selected value is synchronize with the parent component via the `v-model` attribute.

##### Option list

The `options` property accept an array of literal strings, or an array of objects containing a `label` and a `value` keys.

##### Name attribute

You can define the `name` attribute of the select input by applying it on the v-select component.

```html
<v-select name="country" :options="['Israël','US']"></v-select>
```
