import { Button, Card, Col, Form, FormItem, Input, Row } from 'element-ui'

const elems = [Button, Form, Card, FormItem, Row, Col, Input]

export default function registerElement(Vue) {
  elems.forEach((elem) => {
    Vue.use(elem)
  })
}
