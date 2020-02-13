import React from "react";  
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id=null, slug=null }) => {
   
  const { data, loading, error } = useQuery(query, {
    variables: { id: parseInt(id), slug: slug }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return children({ data });
};

export default Query;