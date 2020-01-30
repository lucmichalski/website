import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`  
  query Page($id: ID!) {
    page(id: $id) {
      id
      slug
      Section {
        __typename
        ... on ComponentSectionsSideVisual {
          id
          title_en
          title_fr
          description_en
          description_fr
          visual_order
          content_order
          Media {
            name
            url
          }
          Button {
            text_en
            text_fr
            type
            url
          }
        }
        ... on ComponentSectionsSideCollapseTab {
          id
          title_en
          title_fr
          Tab {
            id
            title_en
            title_fr
            content_en
            content_fr
            Image {
              name
              url
            }
            Icon {
              name
              url
            }
          }
        }
        ... on ComponentSectionsCta {
          id
          title_en
          title_fr
          content_en
          content_fr
          button {
            text_en
            text_fr
            type
            url
          }
        }
      }
    }
  }
`;

export default HOMEPAGE_QUERY;