import axios from 'axios'
import querystring from 'querystring';

const contactUrl = 'https://script.google.com/macros/s/AKfycbyPU_kFhPA4PH1hJOzyBZch6chIAeeOx1t59EHrYP0vBFTdxFE/exec';

const sendMessage = data => {
  const requestConfig = { method: 'POST', url: contactUrl, data: querystring.stringify(data) };
  console.log(data, requestConfig)
  return axios.request(requestConfig)
  .then(console.log)
  .catch(console.error);
}

export default {
  sendMessage
}
