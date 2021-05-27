import React, { Component } from 'react'
import styled from 'styled-components'

class Header extends Component {

    render() {
        return (
            <Container>
            <h1>TASK TAB</h1> 
            {/* <input type="text"</input>                */}
            </Container>
        )
    }
}

export default Header

const Container =styled.div`
/* background:#090b13; */
font-size: 1.2rem;
/* color: cyan; */
border: solid 2px black;
border-radius: 10px;
`
