import axios from 'axios'

var instance = axios.create({
    baseURL: 'https://easy-mock.com/mock/5ba8ced6a8066d21b71a468b/xiaoyu',
    timeout: 5000
  });

export const firstGet = function () {
    return instance.get('/xiaoyu01').then(res => {
        return res
    }).catch(e => {
        console.log(e)
    })
}
  
  
