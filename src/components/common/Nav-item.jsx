
import styled from 'styled-components'

const Wrapper = styled.div`
background-color:rgba(196, 196, 196, 0.25);
justify-content:center;
align-items:center;
border-radius:5px;
position:relative;
display:flex;
width:170px;
height:23px;
margin:auto;
`
const Line = styled.div`
position:absolute;
height:2px;
width:90%;
background-color:black;
opacity:50%;
bottom:3px;
`

function NavButton({children}){
    return(
        <Wrapper>
            {children}
            <Line></Line>
        </Wrapper>
    )
}

 export default NavButton;