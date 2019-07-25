`npm i @fuzzco/in-view`

[Demo](https://fuzzco.github.io/in-view/)

In your Vue component:

```html
<script>
    import inView from '@fuzzco/in-view'

    export default {
        mixins: [inView],
        mounted() {
            // call the `inView` method and specify a selector
            this.inView('p')

            // or a selector and delay in ms if multiple enter the viewport at once
            this.inView('p', 100)

            // can also pass an object of opts (see below for defaults)
            this.inView({
                selector: 'p',
                once: true
            })
        }
    }
</script>
```

## Defaults

```js
{
    // pass in DOM node(s) to use directly
    // (doing so ignores `selector`)
    // el for a single node...
    el: null,
    // ...els for an array of nodes
    els: null,

    // single selector - see below
    selector: '',

    // array of selectors for this group
    // if "selector" is set, will create an array from "selector"
    selectors: [],

    // delay between callbacks if multiple instances of this group come in view at once
    delay: 0,

    // run immediately on initialization
    run: true,

    // each callback accepts one parameter, the element in view
    // the defaults set the class to `above-view`, `in-view`, or `below-view`
    onEnter: el => {},
    onLeaveTop: el => {},
    onLeaveBottom: el => {},

    // run in-view callback only once per node
    once: false
}
```

See `demo/App.vue` for usage.

## Methods

| Name           | Params                      | Notes                                                                                                                                                                                                               |
| -------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inView`       | `(options = {}, delay = 0)` | <ul><li>`options` can be a string or object.</li><li> `delay` is overridden by `options.delay` if provided.</li></ul>Register an element or group of elements for `in-view` events. See above for `options` values. |
| `updateInView` | None                        | Recalculate items in view. Called automatically on `scroll`, `mousewheel`, and `resize`, but can also be called manually.                                                                                           |
