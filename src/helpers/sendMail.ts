import axios from "axios";

interface IMailData {
  email: string;
  subject: string;
  message: string;
  recipientMail: string;
}

export const sendMail = async (data: IMailData) => {
  return axios.post('/api/mail', data).then(res => res)
}