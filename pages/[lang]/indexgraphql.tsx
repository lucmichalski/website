import React, { useContext } from 'react'
import MainLayout from '../../layouts/Landing'
import withLocale from '../../hocs/withLocale'
import { LocaleContext } from '../../context/LocaleContext'
import Query from "../../components/query"; 
import HOMEPAGE_QUERY from "../../apollo/queries/page/homepage";

const IndexPage = () => {

  const { locale } = useContext(LocaleContext)

  return (
    <MainLayout>
      <Query query={HOMEPAGE_QUERY} id={10}>
        
        {({ data: { page } }) => {
          return (
            <p>Page id is {page.id} and slug is {page.slug}</p>
          );
        }}
      </Query>
    </MainLayout>
  )
}
export default withLocale(IndexPage)