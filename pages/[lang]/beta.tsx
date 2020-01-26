import LandingLayout from '../../layouts/Landing'
import Hero from "../../components/Hero"
import CTA from '../../components/CTA'
import AppPreviewSection from '../../components/AppPreviewSection'
import SectionSide from '../../components/SectionSide'
import withLocale from '../../hocs/withLocale'

const BetaPage = () => {
  return (
    <LandingLayout>
      <Hero 
        title="L’AB testing devient plus simple avec Optimize" 
        description="Testez les sections qui convertissent le mieux grâce à une incroyable librairie de widgets marketing"
        email_placeholder="Your email address..."
        button={{"text": "Cliquer ici", "type": "primary"}}
      />
      <AppPreviewSection />
      <SectionSide 
        visualOrder={1} 
        contentOrder={2}
        title="Bien plus que de l'AB testing"
        content="Testez en toute simplicité les éléments de votre site web afin de les rendre plus efficace pour vos visiteurs"
      />
      <SectionSide 
        visualOrder={2} 
        contentOrder={1}
        title="Pilotez grâce à la donnée"
        content="Découvrez comment les visiteurs intéragissent avec votre site et identifiez sur les éléments les plus pertinent pour votre audience."
      />
      <SectionSide 
        visualOrder={1} 
        contentOrder={2}
        title="Utilisez nos widgets et augmentez vos conversions"
        content="Découvrez notre suite de Widgets qui vous aide à convertir, engager et retenir les visiteurs de votre site web."
      />
      <CTA
        title="Ready to get started?"
        description="The best way to understand the power of Grimp is to see it for yourself. Get your website dynamic in minutes."
        button={{"text": "Join priority list", "type": "primary"}}
      />
    </LandingLayout>
  )
}
export default withLocale(BetaPage)