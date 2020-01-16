import MainLayout from '../layouts/Main'
import Hero from "../components/Hero"
import AppPreviewSection from '../components/AppPreviewSection'
import SectionFeature from '../components/SectionFeature'

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <AppPreviewSection />
      <SectionFeature visualOrder={1} contentOrder={2} />
      <SectionFeature visualOrder={2} contentOrder={1} />
    </MainLayout>
  )
}
export default IndexPage

