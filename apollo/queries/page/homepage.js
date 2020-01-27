import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`  
  query Pages($id: ID!) {
    page(id: $id) {
      id
      slug
    	Section {
        __typename
        ... on ComponentSectionsSideVisual {
          id
          title_en
          title_fr
          content_en
        }
        ... on ComponentSectionsCenterTab {
          id
          title_en
          title_fr
        }
      }
    }
  }
`;

export default HOMEPAGE_QUERY;