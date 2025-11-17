import axios from 'axios'

const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5001/digital-liberia-launch/us-central1/api'
  : 'https://us-central1-digital-liberia-launch.cloudfunctions.net/api'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const submitInterest = async (formData) => {
  // For now, just log and simulate API call
  console.log('Submitting interest:', formData)
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data: formData })
    }, 1000)
  })
  
  // Uncomment when backend is ready:
  // const response = await api.post('/interest', formData)
  // return response.data
}
