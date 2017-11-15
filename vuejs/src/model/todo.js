export default class Todo {
  constructor (text, state = false) {
    this.body = text
    this.state = state
  }
}
