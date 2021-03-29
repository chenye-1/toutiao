import instance from '@/utils/request.js'

export const Login = (data) => {
    return instance({
        method: "post",
        url: '/v1_0/authorizations',
        data
    })
}


