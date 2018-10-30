import gql from "graphql-tag";

export const addNameQuery = gql`
  mutation addname($name: String!) {
    insert_users(
      objects: [
        {
          name: $name,
        }
      ]
    ) {
      returning {
        id
        name
        created_at
        last_seen
      }
    }
  }
`;

export const checkNameExistQuery = gql`
  query checkName($name: String!) {
    users (
      where: { name: {_eq: $name }},
    ) {
      id
      name
      created_at
      last_seen
    }
  }
`;

export const checkNameDoesNotExistQuery = gql`
  query checkName($name: String!) {
    users (
      where: { name: {_neq: $name }},
    ) {
      id
      name
      created_at
      last_seen
    }
  }
`;
