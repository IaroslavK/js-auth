export class List {
  STATE = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  }

  status = null
  data = null
  element = null

  updateStatus = (status, data) => {
    this.status = status

    if (data) this.data = data

    this.updataeView()
  }

  updataeView = () => {}

  loadData = async () => {}

  convertData = () => {}
}
