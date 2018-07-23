import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_home';

import { TextField } from 'redux-form-material-ui';

import IconButton from 'material-ui/IconButton';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Home extends React.PureComponent<Props, {}> {
  logout = () => {
    const { logoutUser } = this.props;
    logoutUser();
  }

  render() {
    return (
      <div className="Home container">
        <h1 className="page-header">Home page</h1>
        <button onClick={this.logout}>Logout</button>
        <form className="form">
              <div className="input-wrap">
              <input type="text"/>
                <TextField />
                <IconButton className="addButton" aria-label="Add" type="submit">
                  bla
                </IconButton>
              </div>
            </form>   
      </div>
    );
  }
}
