import gql from "graphql-tag";

const ARTICLE_QUERY = gql`  
  query Article($slug: String!) {
    articles(where: {slug: $slug}) {
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
        Avatar {
          alt
          media {
            url
          }
        }
      }
    }
  }
`;

export default ARTICLE_QUERY;