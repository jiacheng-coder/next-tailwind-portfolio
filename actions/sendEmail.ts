'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
export const sendEmail = async (formData: FormData) => {
  const name = formData.get('senderName')
  const content = formData.get('emailContent')
  resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    to: 'jiachengcoder@gmail.com',
    subject: 'Message from contact form',
    text: 'Next.js is awesome!',
  })
}
