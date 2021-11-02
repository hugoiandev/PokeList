import styled from "styled-components";

const Div = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    a {
        text-decoration: none;
        color: #313131;
        transition: .3s;
        &:hover {
            transform: translateY(-10px);
        }
        div {
            div:nth-child(1) {
                background: #ffffff;
                padding: 50px 50px;
                border-radius: 10px;
                position: relative;
                overflow: hidden;
                span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    font-weight: bold;
                    color: #fff;
                    background: tomato;
                }
                img {
                    height: 100px;
                    width: 100px;
                }
            }
            div:nth-child(2) {
                margin-left: 30px;
                margin-top: 5px;
                span {
                    font-size: 1.2em;
                    text-transform: capitalize;
                }
                div {
                    margin: 0;
                    margin-top: 5px;
                    span {
                        font-size: .9em;
                        margin-right: 10px;
                        padding: 0 15px;
                        border-radius: 3px;
                    }
                }
            }
        }
    }
`

export default Div