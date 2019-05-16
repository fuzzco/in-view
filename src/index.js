import InViewGroup from './InViewGroup'

export default {
    mounted() {
        window.addEventListener('scroll', this.updateInView)
        window.addEventListener('mousewheel', this.updateInView)
        window.addEventListener('resize', this.updateInView)
    },
    data() {
        return {
            inViewGroups: []
        }
    },
    methods: {
        inView(opts = {}, delay = 0) {
            // handle string
            if (typeof opts == 'string') {
                opts = {
                    selectors: [opts]
                }
            }
            // handle array
            else if (Array.isArray(opts)) {
                opts = {
                    selectors: opts
                }
            }

            opts = {
                delay: opts.delay || delay,
                ...opts
            }

            const newGroup = new InViewGroup(opts)
            this.inViewGroups.push(newGroup)

            if (newGroup.run) {
                newGroup.update()
            }
        },
        updateInView() {
            window.requestAnimationFrame(() => {
                this.inViewGroups.forEach(group => group.update())
            })
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateInView)
        window.removeEventListener('mousewheel', this.updateInView)
        window.removeEventListener('resize', this.updateInView)
    }
}
