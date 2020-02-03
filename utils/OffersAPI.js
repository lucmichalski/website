const api = "http://www.mytalentplug.com/xml.aspx?jbID=u/S3BRjmcl8="

export const getAll = () =>
  fetch(`${api}`)
    .then(response => response.text())
    .then(text => console.log(text));