import styled from "styled-components";


const Topo = styled.header`

    background: #ffffff;
    padding: 50px 0 50px 0;

    div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;

        input {
            width: 80%;
            padding: 10px;
            border-radius: 20px 0 0 20px;
            border: 2px solid #d6d6d6;
            border-right: none;
            outline: 0;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 42px;
            width: 80px;
            background: tomato;
            border-radius: 0 20px 20px 0;
        }

        a:before {
            content: '';
            height: 30px;
            width: 30px;
            background-image: url('pesquisar.svg');
            background-size: cover;
        }
    }

    div:nth-child(2) {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        
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
                        transition: .5s;
                    }
                }
            }
        }
    }

`

export default Topo