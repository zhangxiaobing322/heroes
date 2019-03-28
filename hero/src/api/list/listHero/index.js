import axios from 'axios'

const api = {
    requestHeroData (pageCode) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/hero?pageCode='+pageCode+'&pageNumber=12')
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
    requestSortAllData (num) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/hero/sort?type=hero.heroPrice&num=' + num)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestHeroNameData (heroname) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/hero/search?heroName=' + heroname)
            .then(data => resolve(data.data))
            .catch(err => reject(err))
        })
    },
    requestStringHeroData (string) {
        return new Promise ((resolve, reject) =>{
            axios.get('/api/hero/search_hero?nick=' + string)
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