import { gql } from "@apollo/client";

export const LOAD_BOOKS = gql`
  query {
    books {
      id
      name
      cover
      category {
        name
        id
      }
    }
  }
`;

export const LOAD_CATEGORIES = gql`
  query {
    categories {
      name
      id
    }
  }
`;
