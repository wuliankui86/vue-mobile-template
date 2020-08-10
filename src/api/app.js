import axios from '@/lib/request'

export const API_GET_APP = () => {
  return axios.request({
    url: '/api/app...',
    method: 'get',
    showLoading: true // 打开loading
  })
}
