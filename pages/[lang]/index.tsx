import React, { useContext } from 'react'
import LandingLayout from '../../layouts/Landing'
import withLocale from '../../hocs/withLocale'
import { LocaleContext } from '../../context/LocaleContext'
import Query from "../../components/query"; 
import HOMEPAGE_QUERY from "../../apollo/queries/page/homepage";
import HeroSide from '../../components/HeroSide'
import SectionSideTab from '../../components/SectionSideTab'
import CTA from '../../components/CTA'

const IndexPage = () => {

  const { locale } = useContext(LocaleContext)

  return (
    <Query query={HOMEPAGE_QUERY} id={11}>
      {({ data: { page } }) => {
        return (
          <LandingLayout>  
            {page.Section.map((section) => {
              {console.log(section)}
              if ( section.__typename === "ComponentSectionsSideVisual") {
                return (
                  <HeroSide 
                    title={section[`title_${locale}`]} 
                    description={section[`description_${locale}`]} 
                    buttons={section.Button}
                    visualOrder={1} 
                    contentOrder={2}
                  /> 
                )
              }
              if (section.__typename === "ComponentSectionsSideCollapseTab") {
                return (
                  <SectionSideTab 
                    title={section[`title_${locale}`]} 
                    tabs={section.Tab}
                    visualOrder={section.visual_order} 
                    contentOrder={section.content_order}
                    locale={locale}
                  />
                )
              }
              if (section.__typename === "ComponentSectionsCta") {
                return (
                  <CTA
                    title={section[`title_${locale}`]}
                    description={section[`content_${locale}`]}
                    button={section.button}
                  />
                )
              }
            })}
          </LandingLayout>
        );
      }}
    </Query>
  )
}
export default withLocale(IndexPage)