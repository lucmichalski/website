import React from 'react'
import LandingLayout from '../layouts/Landing'
import Hero from '../components/Hero'
import HeroSearch from '../components/HeroSearch'

class IndexPage extends React.Component {

  render() {
    return (
      <LandingLayout >
        <Hero
          title="Trouvez le job que vous méritez"
          description="Bienvenue sur la démonstration des sites carrières que nous construisons pour nos clients. C'est l'occasion pour vous de tester le moteur en direct, et de découvrir le blog avec les landings."
        />
        <HeroSearch />
      </LandingLayout>
    )
  }

  
}
export default IndexPage