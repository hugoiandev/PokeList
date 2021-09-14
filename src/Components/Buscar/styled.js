import styled from "styled-components";

const Div = styled.div`
    display: grid;
    background: tomato;
    grid-template-columns: 1fr;
    box-sizing: border-box;
    padding: 0 40px 100px 40px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    div {
        display: grid;
        h3 {
            color: #fff;
        }
        select {
            margin-top: 10px;
            font-size: 1.3em;
            padding: 10px 5px;
            text-transform: capitalize;
            background: #616161;
            color: #fff;
            border-radius: 5px;
        }
    }

`

export default Div