import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { markCompletedQuery, fetchTodosQuery, fetchTodosCompletedQuery, deleteQuery } from '../queries/Queries';
import $ from 'jquery'
import '../App.css';


class Todo extends Component {
  constructor(props) {
    super(props);
  }

  markCompleted(completeTodo, id, e) {
    $("#" + id + " h3").css({ 'text-decoration': 'line-through'});
    completeTodo({
      variables: { id: id },
      refetchQueries: [{ query: fetchTodosQuery, variables: { user_id: this.props.user_id}}, { query: fetchTodosCompletedQuery, variables: { user_id: this.props.user_id }}]
    })
  }

  delete(deleteTodo, id, e) {
    deleteTodo({
      variables: { id: id },
      refetchQueries: [{ query: fetchTodosQuery, variables: { user_id: this.props.user_id}}, { query: fetchTodosCompletedQuery, variables: { user_id: this.props.user_id }}]
    })
  }

  render() {
    const { t } = this.props;
    return (
      <Mutation mutation={markCompletedQuery} >
        {
          (completeTodo, { data }) => (
            <div className="todos" onClick={this.markCompleted.bind(this, completeTodo, t.id)} id={t.id}>
              <Mutation mutation={deleteQuery} >
                {
                  (deleteTodo, { data }) => (
                    <i className="fas fa-times-circle cross" onClick={this.delete.bind(this, deleteTodo, t.id)}></i>
                  )
                }
              </Mutation>
              <h3>{t.data}</h3>
              {"Created at: " + t.created_at.slice(12, 16) + " on " + t.created_at.slice(0, 10)}
            </div>
          )
        }
      </Mutation>
    )
  }
}

export default Todo;
