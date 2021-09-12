import styled from "styled-components";

const Div = styled.div`
    div {
        div:nth-child(1) {
            h1 {
                font-size: 4em;
                text-transform: capitalize;
                text-align: center;
                color: #313131;
            }
        }
        div:nth-child(2) {
            display: grid;
            grid-template-columns: 400px 1fr;
            grid-template-rows: 400px;
            gap: 20px;
            div:nth-child(1) {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            div:nth-child(2) {
                span {
                    font-size: 1.5em;
                    color: #313131;
                }
            }
        }
    }

`

export default Div