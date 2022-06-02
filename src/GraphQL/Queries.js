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
      author {
        name
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
export const LOAD_DETAIL = gql`
  query detailBook($id: String!) {
    book(id: $id) {
      id
      name
      cover
      description
      code
      status
      category {
        name
        code
        id
      }
      rack {
        name
        code
        id
      }
      author {
        name
        photo
        biography
        id
      }
    }
  }
`;

export const GETUSER = gql`
  query getUserCheckHeader($id: String) {
    user(id: $id) {
      id
      role
      firstName
      lastName
      email
    }
  }
`;
