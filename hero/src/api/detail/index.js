import axios from 'axios'
const api = {
    requestAllData (id) {
        return new Promise ((resolve, reject) => {
            axios.get('/api/all/search_id?goodId=' + id)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestShouWeiData () {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/shouwei')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestShouBanData () {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/shouban')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestUpdate (obj) {
        return new Promise((resolve, reject) => {
          axios.post('/api/cart/updateCart2',obj).then(data => {
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        })
      },
      requestUpdateData (qq) {
        return new Promise((resolve, reject) => {
          axios.get('/api/cart/search?qq='+qq).then(data => {
            resolve(data.data)
          }).catch(err => {
            reject(err)
          })
        })
      }
}

export default api