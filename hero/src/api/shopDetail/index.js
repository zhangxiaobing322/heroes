import axios from 'axios';

const api = {
  requestDetail (id) {
    return new Promise((resolve, reject) => {
      axios.get('/api/all/search_id?goodId='+id).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestUpdate (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/cart/updateCart1',obj).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestCart (qq) {
    return new Promise((resolve, reject) => {
      axios.get('/api/cart/search?qq='+qq).then(data => {
        resolve(data.data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestNum (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/cart/updateNum', obj).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestremove (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/cart/removeCart1', obj).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requesteGou (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/cart/updateCart3', obj).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requesteNewCart (obj) {
    return new Promise((resolve, reject) => {
      axios.post('/api/cart/insertNewCart', obj).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default api