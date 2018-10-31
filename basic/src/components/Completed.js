import React, { Component } from 'react';
import { Query, Mutation } from "react-apollo";
import { fetchTodosCompletedQuery } from '../queries/Queries';
import Todo from './Todo';
import '../App.css';

class Completed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user_id } = this.props;
    return (
      <Query query={fetchTodosCompletedQuery} variables={{ user_id }}>
      {
        ({ loading, error, data }) => {
          if(loading)
            return <p>loading ...</p>
          if(error)
            return <p>Error </p>;

          return data.todo.map((t) => (
            <div className="todo-list-completed">
              <Todo t={t} user_id={user_id} key={t.id} />
            </div>
          ))
        }
      }
      </Query>
    )
  }
}

export default Completed;
