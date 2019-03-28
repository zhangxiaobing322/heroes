import axios from 'axios'
const api = {
    requestCartData (qq) {
        return new Promise ((resolve, reject) => {
            axios.get('/api/cart/search?qq='+qq)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestRemoveData (goodId) {
        return new Promise((resolve, reject) => {
          axios.post('/api/cart/removeCart2',goodId).then(data => {
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        })
      },
      requestInputCartData (obj) {
        return new Promise((resolve, reject) => {
          axios.post('/api/cart/updateCart3',obj).then(data => {
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        })
      },
      requestBalanceData (qq) {
        return new Promise ((resolve, reject) => {
            axios.get('/api/users/search?qq='+qq)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestUpdateMoneyData (obj) {
        return new Promise ((resolve, reject) => {
            axios.post('/api/users/updateMoney',obj)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    }
}

export default api
