import axios from 'axios';
const api = {
  requestShop_qtData (pageCode, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get('/api/shop_qt?pageCode='+pageCode+'&pageNumber='+pageNumber).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestShoubanData (pageCode, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get('/api/shouban?pageCode='+pageCode+'&pageNumber='+pageNumber).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestWanouData (pageCode, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get('/api/wanou?pageCode='+pageCode+'&pageNumber='+pageNumber).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestYifuData (pageCode, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get('/api/yifu?pageCode='+pageCode+'&pageNumber='+pageNumber).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestLplData (pageCode, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get('/api/lolzhoubian?pageCode='+pageCode+'&pageNumber='+pageNumber).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestZhubaoData (pageCode, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get('/api/zhubao?pageCode='+pageCode+'&pageNumber='+pageNumber).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestHbData (pageCode, pageNumber) {
    return new Promise((resolve, reject) => {
      axios.get('/api/shop_hb?pageCode='+pageCode+'&pageNumber='+pageNumber).then(data => {
        resolve(data.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default api
