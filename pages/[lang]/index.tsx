import LandingLayout from '../../layouts/Landing'
import HeroSide from '../../components/HeroSide'
import SectionSideTab from '../../components/SectionSideTab'
import CTA from '../../components/CTA'
import withLocale from '../../hocs/withLocale'

const IndexPage = () => {
  return (
    <LandingLayout> 
      <HeroSide 
        title="L’AB testing devient plus simple avec Optimize" 
        description="Chez Grimp, nous sommes des experts de l’AB testing avec Google Optimize. On conçoit, teste, évalue en accord direct avec nos clients."
        button={{"text": "Demander un accompagnement", "type": "primary"}}
        visualOrder={1} 
        contentOrder={2}
      /> 
      <SectionSideTab 
        title="Dynamiser son site devient un jeu d’enfant" 
        description="Chez Grimp, nous sommes des experts de l’AB testing avec Google Optimize. On conçoit, teste, évalue en accord direct avec nos clients."
        visualOrder={1} 
        contentOrder={2}
      />
      <CTA
        title="Ready to get started?"
        description="The best way to understand the power of Grimp is to see it for yourself. Get your website dynamic in minutes."
        button={{"text": "Join priority list", "type": "primary"}}
      />
    </LandingLayout>
  )
}
export default withLocale(IndexPage)

