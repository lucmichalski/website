import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`  
  query Page($id: ID!) {
    page(id: $id) {
      id
      slug
      Section {
        __typename
        ... on ComponentSectionsSideVisual {
          title_en
          title_fr
          description_en
          description_fr
          
        }
        ... on ComponentSectionsSideCollapseTab {
          id
          title_en
          title_fr
        }
      }
    }
  }
`;

export default HOMEPAGE_QUERY;