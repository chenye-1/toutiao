
import axios from 'axios'

const instance= axios.create({
    baseURL:"http://toutiao-app.itheima.net"
})

export default instance