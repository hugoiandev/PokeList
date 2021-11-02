import styled from "styled-components";

const Div = styled.div`
    background: tomato;
    padding: 20px 40px 30px;
    border-radius: 0 0 10px 10px;

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
            outline: 0;

            ::-webkit-scrollbar {
                width: 10px;
            }
            
            ::-webkit-scrollbar-track {
                background-color: darkgrey;
            }
            
            ::-webkit-scrollbar-thumb {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
        }
    }

`

export default Div