import axios from 'axios'

const api = {
    requestAllData (pageCode,pageNumber) {
        return new Promise ((resolve, reject) => {
            axios.get('/api/all?pageCode=' + pageCode + '&pageNumber=12')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestHeroData () {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/hero?pageCode=1&pageNumber=200')
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
    requestAllKindData (goodName) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/lol/search?goodName=' + goodName)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestSortAllData (num) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/lol/sort?type=goodPrice&num=' + num)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllHeroSkinData (num) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/pifu?pageCode='+num+'&pageNumber=12')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllPropData (num) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/daojubao?pageCode='+num+'&pageNumber=12')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllPropNameData (name) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/daojubao/search?goodName=' + name)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllTuBiaoData (num) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/tubiao?pageCode='+num+'&pageNumber=12')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllTuBiaoNameData (name) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/tubiao/search?goodName=' + name)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllShouWeiData (num) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/shouwei?pageCode='+num+'&pageNumber=12')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllShouWeiNameData (name) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/shouwei/search?goodName=' + name)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllSkinData (num) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/pifu?pageCode='+num+'&pageNumber=12')
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestAllSkinNameData (name) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/pifu/search?goodName=' + name)
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
    }
}

export default api