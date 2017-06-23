import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyBaUiPfipgnzOmen-UID2Y48IgM1SUxVos';

// Create a new component. This component should produce
// some HTML

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this ocmponent`s generated HTML and put it
// on the page ( in the DOM )
ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);