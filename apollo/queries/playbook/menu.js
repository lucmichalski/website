import gql from "graphql-tag";

const PLAYBOOK_MENU_QUERY = gql`  
  query PlaybookMenu {
    tools {
      id
      name
      logo { 
        url 
      }
    }
  	areas {
      id
      name_en
      name_fr
    }
    businessRoles {
      id
      name_en
      name_fr
    }
  }
`;

export default PLAYBOOK_MENU_QUERY;