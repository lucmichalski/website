import gql from "graphql-tag";

const ARTICLE_QUERY = gql`  
  query Article($id: ID!) {
    article(id: $id) {
      id
      title
      description
      published_at
      image {
        name
        url
      }
      content
      category {
        name
      }
      user {
        username
        avatar {
          url
        }
      }
    }
  }
`;

export default ARTICLE_QUERY;