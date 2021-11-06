import '@testing-library/jest-dom';
import * as React from 'react';
import _ from 'lodash';

// Using https://stackoverflow.com/questions/39487906/jest-with-webpack-provide-plugin to simulate globals as provided by webpack.providePlugin :/
window.React = React;
window._ = _;
