const HubSpotClient = require('hubspot-api');

export default async function(req, res) {
  const hs = new HubSpotClient(process.env.HUBSPOT_API_KEY);

  const { email } = req.body

  hs.contacts.createOrUpdateContact({
    email: email
  }).then(response => console.log(response));
}