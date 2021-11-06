// @flow
import * as React from 'react'; // TODO (TC): Figure out how to just use ProvidePlugin w/o this explicit import https://github.com/facebook/flow/issues/4280

const HelloWorld = (): React.Node => (
  <div>
    <h2>Hello World</h2>
    <p>Congratulations, you boostrapped into React without all the bloat of CRA!</p>
  </div>
);

export default HelloWorld;
