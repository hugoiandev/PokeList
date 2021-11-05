import styled from "styled-components";

const Div = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    a {
        text-decoration: none;
        color: #313131;
        transition: .3s;

        &:hover {
            transform: translateY(-10px);
        }

        .card-image {
            position: relative;
            padding: 40px;
            border: 5px solid;
            box-shadow: 0 0 10px 0px grey;
            background: url("card-bg.png") no-repeat;
            background-size: cover;
            background-position: top;
            border-image-slice: 1;
            border-image-source: linear-gradient(to top right, grey, #d5d3d3);

                .code {
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding: 5px;
                    font-weight: bold;
                    font-size: 12px;
                    border-radius: 0 0 0 10px;
                    color: #fff;
                    background: tomato;
                }
                img {
                    height: 120px;
                    width: 120px;
                    padding: 0 0 5px;
                }
        }

        .poke-type-container {
            display: inline-flex;
            justify-content: center;
            position: absolute;
            left: 0;
            bottom: 25px;
            width: 100%;
            overflow: hidden;
            filter: drop-shadow(0 0 10px gray);
        }

        .poke-type {
            font-size: 12px;
            font-weight: 700;
            padding: 0 15px;
            text-transform: capitalize;
        }

        .poke-name {
            position: absolute; 
            bottom: -10px;
            left: -10px;
            background: white;
            padding: 3px 15px;
            border: 2px solid #fff;
            border-left: none;
            border-top: none;
            border-radius: 0 20px 0 20px;
            font-size: 14px;
            font-weight: 700;
            text-transform: capitalize;
            box-shadow: inset 0 0 10px 5px #ddd, 2px 2px 3px 0px #000;
            z-index: 1;
        }
    }
`

export default Div