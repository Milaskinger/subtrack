import emailjs from '@emailjs/browser'

export const sendReminderEmail = ({
  userEmail,
  subscriptionName,
  subscriptionAmount,
  renewalDate,
  daysLeft,
}: {
  userEmail: string
  subscriptionName: string
  subscriptionAmount: string
  renewalDate: string
  daysLeft: number
}) => {
  const params = {
    user_email: userEmail,
    subscription_name: subscriptionName,
    subscription_amount: subscriptionAmount,
    renewal_date: renewalDate,
    days_left: daysLeft,
  }

  console.log("📧 Tentative d’envoi d’email avec :", params)

  return emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      params,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((res) => {
      console.log('✅ Email envoyé :', res.status, res.text)
    })
    .catch((err) => {
      console.error('❌ Erreur EmailJS complète :', JSON.stringify(err, null, 2))
    })
}
