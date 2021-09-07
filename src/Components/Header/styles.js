import styled from "styled-components";


const Topo = styled.header`

    background: #ffffff;

    div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        input {
            width: 600px;
            margin: 0 0 0 20px;
            padding: 10px;
            border-radius: 20px;
            border: 2px solid #d6d6d6;
            position: relative;
            z-index: 1;
            border-right: none;
            flex: 1;
        }

        a {
            position: relative;
            left: -20px;
            z-index: 0;
            background: tomato;
            padding: 5px 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom-right-radius: 20px;
            border-top-right-radius: 20px;

            img {
                height: 30px;
                width: 30px;
            }
        }
    }

    div:nth-child(2) {
        nav {
            ul {
                li {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    a {
                        text-decoration: none;
                        font-size: 1.1em;
                        color: tomato;
                    }
                    img {
                        height: 15px;
                        width: 15px;
                        margin-left: 10px;
                        transform: {};
                    }
                }
            }
        }
    }

`

export default Topo