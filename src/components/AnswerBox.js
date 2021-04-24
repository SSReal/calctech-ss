import React from "react"

function AnswerBox(props) {
    return (
        <h1 className = "answer-h1">
            {(props.displayEquals) && "=" } {props.answer}
        </h1>
    )
}

export default AnswerBox;