import Clock from './components/clock.mjs'

const elements = [Clock]

elements.forEach(({ name, element }) => {
  customElements.define(name, element)
})
