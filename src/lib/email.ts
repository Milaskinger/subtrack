import emailjs from 'emailjs-com'

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
  console.log("Tentative d’envoi avec :", {
    user_email: userEmail,
    subscription_name: subscriptionName,
    subscription_amount: subscriptionAmount,
    renewal_date: renewalDate,
    days_left: daysLeft,
  })

  return emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        user_email: userEmail,
        subscription_name: subscriptionName,
        subscription_amount: subscriptionAmount,
        renewal_date: renewalDate,
        days_left: daysLeft,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((res) => {
      console.log('✅ Email envoyé :', res.status, res.text)
    })
    .catch((err) => {
        console.error('❌ Erreur EmailJS complète :', JSON.stringify(err, null, 2))
      })      
}
