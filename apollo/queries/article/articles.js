import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles(sort: "published_at:desc") {
      id
      slug
      title
      description
      published_at
      image {
        alt
        media {
          url
          provider_metadata
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
          alt
          media {
            url
          }
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;