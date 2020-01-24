import MainLayout from '../../layouts/Landing'
import Hero from "../../components/Hero"
import withLocale from '../../hocs/withLocale'

const ServicePage = () => {
  return (
    <MainLayout>
      <Hero 
        title="Trouvez la meilleure version de votre site web" 
        description="Testez les sections qui convertissent le mieux grâce à une incroyable librairie de widgets marketing"
        email_placeholder="Your email address..."
        button={{"text": "Cliquer ici", "type": "primary"}}
      />
    </MainLayout>
  )
}
export default withLocale(ServicePage)