import MainLayout from '../layouts/Main'
import Hero from "../components/Hero"
import AppPreviewSection from '../components/AppPreviewSection'
import SectionFeature from '../components/SectionFeature'

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
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
    </MainLayout>
  )
}
export default IndexPage

