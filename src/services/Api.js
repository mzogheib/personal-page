import axios from 'axios'

const contactUrl =
  'https://script.google.com/macros/s/AKfycbyPU_kFhPA4PH1hJOzyBZch6chIAeeOx1t59EHrYP0vBFTdxFE/exec'

// No control over responses codes from Google Apps Scripts so faking it in the body of the success response
const sendMessage = (data) => {
  const searchParams = new URLSearchParams(data)
  const requestConfig = { method: 'POST', url: contactUrl, data: searchParams.toString() }
  return axios.request(requestConfig).then((response) => {
    if (
      !(
        response &&
        response.data &&
        Number.isInteger(response.data.status) &&
        response.data.message
      )
    ) {
      console.error('Unknown response')
      return Promise.reject()
    }
    if (response.data.status === 400) {
      console.error(response.data.message)
      return Promise.reject()
    }
    // Assume any other response is success!
    return Promise.resolve()
  })
}

export default {
  sendMessage
}
