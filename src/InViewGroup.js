const ABOVE_VIEW = 'above-view'
const IN_VIEW = 'in-view'
const BELOW_VIEW = 'below-view'
const classes = [ABOVE_VIEW, IN_VIEW, BELOW_VIEW]

export default class {
    constructor(opts = {}) {
        this.opts = {
            el: null,
            els: null,
            selectors: [],
            delay: 0,
            run: true,
            onEnter: el => this.setClass(el, IN_VIEW),
            onLeaveTop: el => this.setClass(el, ABOVE_VIEW),
            onLeaveBottom: el => this.setClass(el, BELOW_VIEW),
            once: false,
            ...opts
        }

        if (!this.opts.selectors.length && opts.selector) {
            this.opts.selectors = [opts.selector]
        }

        if (!window.wivCount) {
            window.wivCount = 0
        }
        this.id = window.wivCount++
        this.localCount = 0

        this.status = {}
        this.inViewOnce = []

        if (this.run) {
            this.update()
        }
    }

    getNodes() {
        if (this.opts.el) {
            return [this.opts.el]
        } else if (this.els) {
            return this.opts.els
        }

        return this.opts.selectors
            .map(selector =>
                [].slice.call(
                    document.querySelectorAll.bind(document)(selector)
                )
            )
            .reduce((acc, curr) => acc.concat(curr), [])
    }

    setClass(el, className) {
        classes.forEach(c => el.classList.remove(c))
        el.classList.add(className)
    }

    getNodeId(node) {
        return node.getAttribute('data-wiv-id')
    }

    update() {
        const nodes = this.getNodes()

        // prep change caches
        const changed = []
        const enteredViaTop = []
        const enteredViaBottom = []
        const leftViaTop = []
        const leftViaBottom = []

        // go through each node and check status
        nodes.forEach(node => {
            const height = node ? node.clientHeight : 0
            const rect = node ? node.getBoundingClientRect() : {}

            let firstTime = false

            // set data id
            if (!this.getNodeId(node)) {
                node.setAttribute(
                    'data-wiv-id',
                    `${this.id}:${this.localCount++}`
                )
                firstTime = true
            }

            const nodeId = this.getNodeId(node)

            if (this.opts.once && this.inViewOnce.includes(nodeId)) {
                return
            }

            const oldStatus = this.status[nodeId]
            let newStatus = `${oldStatus}`

            if (height && rect.top + height <= 0) {
                // above view
                newStatus = ABOVE_VIEW
            } else if (rect.top >= window.innerHeight) {
                // below view
                newStatus = BELOW_VIEW
            } else {
                // entering
                newStatus = IN_VIEW
            }

            if (oldStatus != newStatus) {
                // any change
                changed.push(node)
            } else {
                return
            }

            if (oldStatus == ABOVE_VIEW && newStatus == IN_VIEW) {
                // entering via top
                enteredViaTop.push(node)
            } else if (oldStatus == IN_VIEW && newStatus == ABOVE_VIEW) {
                // leaving via top
                leftViaTop.push(node)
            } else if (oldStatus == BELOW_VIEW && newStatus == IN_VIEW) {
                // entering via bottom
                enteredViaBottom.push(node)
            } else if (oldStatus == IN_VIEW && newStatus == BELOW_VIEW) {
                // leaving via bottom
                leftViaBottom.push(node)
            }

            if (firstTime) {
                if (newStatus == IN_VIEW) {
                    enteredViaTop.push(node)
                } else if (newStatus == ABOVE_VIEW) {
                    leftViaTop.push(node)
                } else {
                    leftViaBottom.push(node)
                }
            }

            if (newStatus == IN_VIEW) {
                this.inViewOnce.push(nodeId)
            }

            // update status
            this.status[nodeId] = newStatus
        })

        // consolidate changes
        const allEntered = enteredViaTop.concat(enteredViaBottom)
        const allLeft = leftViaTop.concat(leftViaBottom)

        // fire events
        if (this.opts.onEnter) {
            allEntered.forEach((enteredNode, i) => {
                setTimeout(
                    () => this.opts.onEnter(enteredNode),
                    i * this.opts.delay
                )
            })
        }
        if (this.opts.onLeaveTop) {
            leftViaTop.forEach((leftNode, i) => {
                setTimeout(
                    () => this.opts.onLeaveTop(leftNode),
                    i * this.opts.delay
                )
            })
        }
        if (this.opts.onLeaveBottom) {
            leftViaBottom.forEach((leftNode, i) => {
                setTimeout(
                    () => this.opts.onLeaveBottom(leftNode),
                    i * this.opts.delay
                )
            })
        }
    }
}
