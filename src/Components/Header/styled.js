import styled from "styled-components";


const Topo = styled.header`
    
    background: #ffffff;
    padding: 20px 0;

    .header-image {
        width: 440px;
        height: 160px;
        background-image: url("pokemon-logo-header.png");
        background-size: cover;
    }

    div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        input {
            width: 80%;
            padding: 10px;
            border-radius: 20px 0 0 20px;
            border: 2px solid #d6d6d6;
            border-right: none;
        }

        a {
            background: tomato;
            height: 42px;
            width: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom-right-radius: 20px;
            border-top-right-radius: 20px;
        }
        a:before{
            content: "";
            background-image: url('pesquisar.svg');
            height: 30px;
            width: 30px;
            background-size: cover;
        }
    }


    div:nth-child(2) {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 30px;
        nav {
            ul {
                li {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    a {
                        display: flex;
                        align-items: center;
                        text-decoration: none;
                        font-size: 1.1em;
                        color: white;
                        background-color: tomato;
                        padding: 15px;
                        border-radius: 5px;
                    }

                    a:before {
                        content: "";
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background-image: url('menu-hamburguer.png');
                        background-size: cover;
                        margin-right: 10px;
                        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(69deg) brightness(108%) contrast(101%);
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