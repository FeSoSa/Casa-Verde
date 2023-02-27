import styled from "styled-components";

export const Button = styled.button`
    type: submit
    height: 75px;
    width: 194px;
    left: 751px;
    top: 597px;
    border-radius: 0px;
    color: #fff;
    width: 100%;
    padding: 27px;
    background-color:${(props) => props.valid === true? '#ffcb47' : '#cecece'} ;
    box-shadow: 10px 10px 30px 0px #ffcb474d;
    border: 0;

    @media (min-width: 920px) {
            width: 30%;
    }}
`;

