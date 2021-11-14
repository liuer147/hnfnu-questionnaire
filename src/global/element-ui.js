import { Button } from 'element-ui'

const elems = [Button]

export default function registerElement(Vue) {
  elems.forEach((elem) => {
    Vue.use(elem)
  })
}
