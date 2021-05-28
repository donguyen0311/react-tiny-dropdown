import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dropdown from '../.';

const App = () => {
  return (
    <div>
      <Dropdown uncontrolled style={{width: 300}} show={true} label={"Options"}>
        <Dropdown.Item>Account</Dropdown.Item>
        <Dropdown.Item>Support</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
