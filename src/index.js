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
        inView(opts = {}) {
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

            this.inViewGroups.push(new InViewGroup(opts))
        },
        updateInView() {
            window.requestAnimationFrame(() => {
                this.inViewGroups.forEach(group => group.update())
            })
        }
    }
}
