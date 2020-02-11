import React from 'react'
import LandingLayout from '../layouts/Landing'
import Hero from '../components/Hero'
import HeroSearch from '../components/HeroSearch'
import defaultPage from "../hocs/defaultPage";

class IndexPage extends React.Component {

  render() {
    return (
      <LandingLayout >
        <Hero
          title={"Trouvez le job que vous meritez"} 
          description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        />
        <HeroSearch />
      </LandingLayout>
    )
  }

  
}
export default defaultPage(IndexPage)