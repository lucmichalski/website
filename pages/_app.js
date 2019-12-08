import App from 'next/app'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: process.env.GOOGLE_TAG_MANAGER_ID
}

export default class MyApp extends App {
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }
}