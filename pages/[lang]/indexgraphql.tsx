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
                    title="Dynamiser son site devient un jeu d’enfant" 
                    description="Chez Grimp, nous sommes des experts de l’AB testing avec Google Optimize. On conçoit, teste, évalue en accord direct avec nos clients."
                    visualOrder={1} 
                    contentOrder={2}
                  />
                )
              }
              if (section.__typename === "ComponentSectionsCTA") {
                return (
                  <CTA
                    title="Ready to get started?"
                    description="The best way to understand the power of Grimp is to see it for yourself. Get your website dynamic in minutes."
                    button={{"text": "Join priority list", "type": "primary"}}
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