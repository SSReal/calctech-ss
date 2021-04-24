import React, {useState} from "react"
import styled from "styled-components"
import AnswerBox from "./AnswerBox.js"
import InpButtons from "./InpButtons.js"

function Calculator() {
    const [ans, setAns] = useState("");
    const [dispEq, setDispEq] = useState(false);
    return (
        <div className = "calculator-box">
            <AnswerBox 
                answer = {ans} 
                displayEquals = {dispEq}
            />
            <InpButtons 
                ans = {ans} 
                setAns = {setAns} 
                equals = {dispEq} 
                setDispEq = {setDispEq} 
            />
        </div>
    )
}


export default Calculator