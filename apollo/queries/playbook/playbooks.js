import gql from "graphql-tag";

const PLAYBOOKS_QUERY = gql`  
  query Playbooks {
    playbooks {
      id
      title_en
      title_fr
      content_en
      content_fr
      areas {
        id
        name_en
        name_fr
      }
      business_role {
        id
        name_en
        name_fr
      }
      tools {
        id
        name
        logo { 
          url 
        }
      }
    }
  }
`;

export default PLAYBOOKS_QUERY;  