import styled from "styled-components";

const Div = styled.div`
    a {
        img {
            height: 50px;
            width: 50px;
            transform: rotate(-180deg);
        }
    }
    div {
        div {
            height: 200px;
            width: 200px;
            img {
                width: 100%;
            }
        }
    }

`

export default Div