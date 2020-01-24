import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`  
  query Page {
    page(id: 2) {
      Section {
        __typename
        ... on ComponentSectionsHero {
          title_en
          title_fr
          description_en
          description_fr
          email_placeholder_en
          email_placeholder_fr
        },
        __typename
        ... on ComponentSectionsSectionFeature {
          title_en
          title_fr
          description_en
          description_fr
        }
      }
    }
  }
`;

export default HOMEPAGE_QUERY;