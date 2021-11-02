import styled from "styled-components";

const Div = styled.div`
    div {
        .div-title {
            margin-top: 20px;
            img {
                height: 50px;
                width: 50px;
                transform: rotate(-180deg);
            }
            h1 {
                font-size: 4em;
                text-transform: capitalize;
                text-align: center;
                color: #313131;
                margin-bottom: 20px;
                @media (max-width: 700px) {
                    font-size: 2em;
                }
            }
        }
        .container-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-left: 15px;
            margin-right: 15px;
            margin-bottom: 50px;
            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
            .div-img {
                padding: 20px;
                background: #ffffff;
                border-radius: 15px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .div-attr {
                border-radius: 15px;
                padding: 20px;
                background: #f6bd20;
                div {
                    background: #ffffff;
                    padding: 10px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    h3 {
                        font-size: 1.3em;
                        font-weight: 700;
                        color: #de9400;
                    }
                    span {
                        font-size: 1.5em;
                        color: #313131;
                        font-weight: 600;
                    }
                }
            }
            .div-stats {
                border-radius: 15px;
                padding: 20px;
                background: #ffa439;
                h2 {
                    color: #313131;
                }
                div {
                    margin-top: 20px;
                    div {
                        background: #ffffff;
                        padding: 10px;
                        border-radius: 10px;
                        h3 {
                            text-transform: capitalize;
                            font-size: 1.3em;
                            font-weight: 700;
                            color: #ffa439;
                        }
                        span {
                            font-size: 1.5em;
                            color: #313131;
                            font-weight: 600;
                        }
                    }
                }
            }
            .div-types {
                padding: 20px;
                h2 {
                    color: #313131;
                }
                div {
                    margin-top: 20px;
                    display: flex;
                    flex-wrap: wrap;
                    span {
                        padding: 3px 20px;
                        border-radius: 5px;
                        font-size: 1.5em;
                        margin-right: 20px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }

`

export default Div