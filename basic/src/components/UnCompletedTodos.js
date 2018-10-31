import React, { Component } from 'react';
import { Query } from "react-apollo";
import { fetchTodosQuery } from '../queries/Queries';
import '../App.css';

class UnCompletedTodos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user_id } = this.props;
    return (
      <Query query={fetchTodosQuery} variables={{ user_id }}>
      {
        ({ loading, error, data }) => {
          if(loading)
            return <p>loading ...</p>
          if(error)
            return <p>Error </p>;

          if(data.todo.length == 0)
            return <h3 style={{ textAlign: 'center' }}>No todos to complete :\/ </h3>;

          return data.todo.map((t) => (
            <div key={t.id} className="todos">
              <h3>{t.data}</h3>
              {"Created at: " + t.created_at.slice(12, 16) + " on " + t.created_at.slice(0, 10)}
            </div>
          ))
        }
      }
      </Query>
    )
  }
}

export default UnCompletedTodos;
