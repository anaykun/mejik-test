import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      user {
        id
        firstName
        lastName
        email
      }
      token
    }
  }
`;

export const REGISTER = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      token
      user {
        id
        role
        firstName
        lastName
        email
      }
    }
  }
`;
