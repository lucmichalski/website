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

export default ARTICLE_QUERY;