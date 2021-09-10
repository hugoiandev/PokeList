import React from "react";

const Caracteristica = ({history}) => {
    console.log(history)
    return (
        <div>
            <button onClick={() => history.goBack()}>Voltar</button>
        </div>
    )
}

export default Caracteristica