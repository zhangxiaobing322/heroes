import axios from 'axios'

const api = {
    requestBannerData () {
        return new Promise ((resolve, reject) => {
            axios.get('/api/banner')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestHeroData () {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/hero?pageCode=1&pageNumber=20')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestHeroSkinData () {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/pifu?pageCode=1&pageNumber=100')
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
    requestActiveData () {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/huodong')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllData (goodName) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/lol/search?goodName=' + goodName)
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
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        })
      },
      requestCartData (qq) {
        return new Promise ((resolve, reject) => {
            axios.get('/api/cart/search?qq='+qq)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAreaData (obj) {
        return new Promise ((resolve, reject) => {
            axios.post('/api/users/updategameDistrict',obj)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
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