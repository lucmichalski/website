const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, values } = req.body

  const content = {
    to: email,
    from: 'arnaud@angulaire.io',
    subject: `Votre Livre Blanc`,
    text: values,
    html: `<p>Hello ${values.firstName}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}