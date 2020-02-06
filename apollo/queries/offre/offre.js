import gql from "graphql-tag";

const OFFRE_QUERY = gql`  
  query Offre($id: ID!) {
    offres(where: { offer_keyid: $id} ) {
      id
      offer_keyid
      posting_date
      updating_date
      job_reference
      job_title
      company_name
      id_agence
      company_description
      SecteurMetierInterim
      job_description
      applicant_profile
      job_function
      job_industry
      location_administrativearea
      location_subadministrativearea
      location_town
      job_type
      job_statute
      job_contract
      application_email
    }
  }
`;

export default OFFRE_QUERY;