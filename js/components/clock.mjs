import Component from './component.mjs'
import html from './../utils/html.mjs'

class Clock extends Component {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  getTime() {
    return new Date().toLocaleTimeString()
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = html`
      <time id="clock" part="time">${this.getTime()}</time>
    `

    setInterval(() => {
      this.shadowRoot.getElementById('clock').textContent = this.getTime()
    }, 1000)
  }
}

export default { element: Clock, name: 'clock-element' }
