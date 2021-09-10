import React from 'react';
import styled from 'styled-components';


const TitleDiv = styled.div`
font-family: 'Dancing+Script', sans-serif;
width: 75%;
color: white;
padding: 15px;
margin: 0 auto;
opacity: 1;
border-radius: 3px;
`;

function Title(props) {
// Display a loading message while the data is fetching
if (!props.title) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
  <TitleDiv>
   <div><h2>{props.title}</h2></div>
  </TitleDiv>
  
)
}

export default Title; 