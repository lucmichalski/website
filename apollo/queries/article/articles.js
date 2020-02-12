import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      description
      published_at
      reading_time
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

export default ARTICLES_QUERY;