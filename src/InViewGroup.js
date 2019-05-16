const ABOVE_VIEW = 'above-view'
const IN_VIEW = 'in-view'
const BELOW_VIEW = 'below-view'

export default class {
    constructor(opts = {}) {
        this.opts = {
            selectors: [],
            delay: 0,
            ...opts
        }

        // this.nodeStatus =
        console.log(this.getNodes())
    }

    getNodes() {
        return this.opts.selectors
            .map(selector =>
                [].slice.call(
                    document.querySelectorAll.bind(document)(selector)
                )
            )
            .reduce((acc, curr) => acc.concat(curr), [])
    }

    update() {
        // console.log(this.opts)
    }
}
