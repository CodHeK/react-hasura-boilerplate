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

export const fetchUserQuery = gql`
  query fetchName($name: String!) {
    users (
      where: { name: {_eq: $name }},
    ) {
      name
    }
  }
`;

export const fetchTodosQuery = gql`
  query fetchTodos($user_id: Int!) {
    todo (
      where: { user_id: {_eq: $user_id }, is_completed: { _eq: false }},
      order_by: id_desc
    ) {
      id
      data
      is_completed
      created_at
      updated_at
      is_public
    }
  }
`;

export const addTodoQuery = gql`
  mutation addTodo($data: String!, $user_id: Int!) {
    insert_todo (
      objects: [
        {
          data: $data,
          user_id: $user_id
        }
      ]
    ) {
      returning {
        id
        data
        is_completed
        created_at
        updated_at
        is_public
      }
    }
  }
`;
