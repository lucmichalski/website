import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      slug
      title
      description
      published_at
      image {
        alt
        media {
          size
          url
        }
      }
      content
      category {
        name
        color
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