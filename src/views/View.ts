import { Model } from '../models/Model'

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract eventsMap(): { [key: string]: () => void }
  abstract template(): string

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render(): void {
    // Remove the previous HTML from the parent element
    this.parent.innerHTML = ''

    // Re-render the template
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    // Bind the events
    this.bindEvents(templateElement.content)

    // Stick the events to the parent element
    this.parent.append(templateElement.content)
  }
}
