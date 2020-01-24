import React, { useContext } from 'react'
import MainLayout from '../../layouts/Landing'
import Hero from "../../components/Hero"
import AppPreviewSection from '../../components/AppPreviewSection'
import SectionFeature from '../../components/SectionFeature'
import withLocale from '../../hocs/withLocale'
import { LocaleContext } from '../../context/LocaleContext'
import Query from "../../components/query"; 
import HOMEPAGE_QUERY from "../../apollo/queries/page/homepage";

const IndexPage: React.FC = () => {

  const { locale } = useContext(LocaleContext)

  return (
    <MainLayout>
      <Query query={HOMEPAGE_QUERY} id={null}>
        {({ data: { page } }) => {
          return (
            <>
              {page.Section.map((section) => {
                switch (section.__typename) {
                  case "ComponentSectionsHero": return(
                    <Hero />
                  );
                  case "ComponentSectionsSectionFeature": return (
                    <SectionFeature 
                      visualOrder={2}
                      contentOrder={1}
                      title={section[`title_${locale}`]}
                      content={section[`description_${locale}`]}
                    />
                  );
                }
              })}
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
            </>
          );
        }}
      </Query>
    </MainLayout>
  )
}
export default withLocale(IndexPage)