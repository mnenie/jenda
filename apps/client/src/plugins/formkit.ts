import autoAnimate from '@formkit/auto-animate'
import type { AutoAnimateOptions } from '@formkit/auto-animate'
import type { App } from 'vue'

export default {
  install: (app: App, options?: Partial<AutoAnimateOptions>) => {
    app.directive('auto-animate', {
      mounted(el, binding) {
        const config: Partial<AutoAnimateOptions> = {
          duration: binding.value?.duration || 200,
          easing: binding.value?.easing || 'ease-in',
          disrespectUserMotionPreference: false,
          ...binding.value,
        }
        autoAnimate(el, (el, action, oldCoords, newCoords) => {
          let keyframes: Keyframe[]
          if (action === 'add') {
            keyframes = [
              { transform: 'translateY(100%)', opacity: 0 },
              { transform: 'translateY(0)', opacity: 1 },
            ]
          }
          if (action === 'remain') {
            const deltaY = oldCoords!.top - newCoords!.top

            const start = { transform: `translate(0, ${deltaY}px)` }
            const mid = {
              transform: `translate(0, ${deltaY * 0.4}px)`,
              offset: 0.7,
            }
            const end = { transform: `translate(0, 0)` }

            keyframes = [start, mid, end]
          }
          if (action === 'remove') {
            keyframes = [
              { transform: 'translateY(0)', opacity: 1 },
              { transform: 'translateY(-100%)', opacity: 0 },
            ]
          }
          return new KeyframeEffect(el, keyframes!, config)
        })
      },
    })
  },
}
