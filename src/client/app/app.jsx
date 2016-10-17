import React from 'react';
import ReactDom from 'react-dom';
import Index from './index.jsx';

ReactDom.render(<Index url="http://localhost:8085/data.json"/>, document.getElementById('app'));

