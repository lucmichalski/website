import React from "react";  
import Link from "next/link"  
import Query from "../components/query";  
import CATEGORIES_QUERY from "../apollo/queries/category/categories";

const Nav = () => {  
  return (
    <Query query={CATEGORIES_QUERY} id={null}>
      {({ data: { categories } }) => (
        categories.map((category, i) => {
          return (
            <li key={category.id}>
              <Link
                href={{
                  pathname: "category",
                  query: { id: category.id }
                }}
              >
                <a>{category.name}</a>
              </Link>
            </li>
          );
        })
      )}
    </Query>
  );
};

export default Nav; 