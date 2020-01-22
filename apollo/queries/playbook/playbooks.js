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
        name_en
        name_fr
      }
      business_role {
        name_en
        name_fr
      }
      tools {
        name
        logo { 
          url 
        }
      }
    }
  }
`;

export default PLAYBOOKS_QUERY;  