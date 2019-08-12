//React
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

//Components
import SlippiPlayer from './components/SlippiPlayer'

const StyledApp = styled.div`
    display: grid;

`;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render( <App/>, root);
});

class App extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <StyledApp>
                <SlippiPlayer></SlippiPlayer>

            </StyledApp>
        )
    }
}