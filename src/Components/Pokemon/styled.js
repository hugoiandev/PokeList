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

        .card {
            border: 7px solid #eec711;
            border-radius: 10px;
            border-image-slice: 1;
            border-image-source: linear-gradient(to top right, #ffaf1b, tomato);
            background-color: #ededed;
            background-position: 0 0;
            background-size: 8px 8px;
        }

        .card-image {
            position: relative;
            background: #ffffff;
            padding: 25px;
            margin: 15px;
            position: relative;
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
                    border-radius: 0 0 0 15px;
                    color: #fff;
                    background: tomato;
                }
                img {
                    height: 120px;
                    width: 120px;
                }
        }

        .card-content {
            margin-left: 10px;
            margin-top: 5px;

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