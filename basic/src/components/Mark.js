import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { checkNameExistQuery, checkNameDoesNotExistQuery } from '../queries/Queries';
import '../App.css';


class Mark extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <Query query={checkNameExistQuery} variables={{ name }}>
          {
            ({ loading, error, data }) => {
              if(loading)
                return <span></span>;
              if(error)
                return <p>error</p>

              if(data.users.length === 0)
                return <i class="fas fa-check" style={{ color: 'green', fontSize: '20px' }}></i>;

              return <i class="fas fa-times" style={{ color: 'red', fontSize: '20px' }}></i>;
            }
          }
        </Query>
      </div>
    )
  }
}

export default Mark;
