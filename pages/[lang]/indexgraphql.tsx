import React, { useContext } from 'react'
import MainLayout from '../../layouts/Landing'
import Hero from "../../components/Hero"
import AppPreviewSection from '../../components/AppPreviewSection'
import SectionSide from '../../components/SectionSide'
import withLocale from '../../hocs/withLocale'
import { LocaleContext } from '../../context/LocaleContext'
import { Query } from 'react-apollo';
import HOMEPAGE_QUERY from "../../apollo/queries/page/homepage";

const IndexPage = () => {

  const { locale } = useContext(LocaleContext)

  return (
    <MainLayout>
      <Query query={HOMEPAGE_QUERY}>
        
        {({ data: { page } }) => {
          return (
            <>
              {console.log(page)}
              <AppPreviewSection />
              <SectionSide 
                visualOrder={1} 
                contentOrder={2}
                title="Much more than an AB testing tool."
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <SectionSide 
                visualOrder={2} 
                contentOrder={1}
                title="Data driven website optimisation."
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <SectionSide 
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