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