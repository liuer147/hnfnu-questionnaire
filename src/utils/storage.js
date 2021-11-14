const nameSpace = 'questionnaire'

export default {
  getStorage() {
    return JSON.parse(window.localStorage.getItem(nameSpace) || '{}')
  },
  getItem(key) {
    return this.getStorage()[key]
  },
  setItem(key, value) {
    const temp = this.getStorage()
    temp[key] = value
    window.localStorage.setItem(nameSpace, JSON.stringify(temp))
  },
  clearItem(key) {
    const temp = this.getStorage()
    delete temp[key]
    window.localStorage.setItem(nameSpace, JSON.stringify(temp))
  },
  clearAll() {
    window.localStorage.removeItem(nameSpace)
  },
}
