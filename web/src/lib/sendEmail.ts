import * as emailJS from '@emailjs/browser'

const templateID = 'template_yygz9cd'
const publicKey = 'zaxAvRhYg03vTjALp'
const serviceID = 'service_zy7xtem'

export const sendSignupEmailJS = async (email: string, code: string) => {
  const templateParams = {
    to_email: email,
    code: code,
  }
  emailJS.send(serviceID, templateID, templateParams, publicKey).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text)
    },
    function (error) {
      console.log('FAILED...', error)
    }
  )
}
