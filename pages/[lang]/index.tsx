import MainLayout from '../../layouts/Landing'
import Hero from "../../components/Hero"
import CTA from '../../components/CTA'
import AppPreviewSection from '../../components/AppPreviewSection'
import SectionFeature from '../../components/SectionFeature'
import withLocale from '../../hocs/withLocale'

const IndexPage = () => {
  return (
    <MainLayout>
      <Hero 
        title="Trouvez la meilleure version de votre site web" 
        description="Testez les sections qui convertissent le mieux grâce à une incroyable librairie de widgets marketing"
        email_placeholder="Your email address..."
        button={{"text": "Cliquer ici", "type": "primary"}}
      />
      <AppPreviewSection />
      <SectionFeature 
        visualOrder={1} 
        contentOrder={2}
        title="Much more than an AB testing tool."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <SectionFeature 
        visualOrder={2} 
        contentOrder={1}
        title="Data driven website optimisation."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <SectionFeature 
        visualOrder={1} 
        contentOrder={2}
        title="Focus on what matters."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <CTA
        title="Ready to get started?"
        description="The best way to understand the power of Grimp is to see it for yourself. Get your website dynamic in minutes."
        button={{"text": "Join priority list", "type": "primary"}}
      />
    </MainLayout>
  )
}
export default withLocale(IndexPage)

