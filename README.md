`npm i @fuzzco/in-view`

In your Vue component:

```html
<script>
    import inView from '../src'

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
