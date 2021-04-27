import React, {useState} from "react"

function InpButtons(props) {
    const [operation, setOperation] = useState(null);
    const [operand1, setOperand1] = useState(null);
    const [operand2, setOperand2] = useState(null);

    function handleDelete() {
        props.setDispEq(false);
        if(props.ans === "+" ||
            props.ans === "-" ||
            props.ans === "*" ||
            props.ans === "/") {
                setOperation(null);
                props.setAns(operand1.toString());
                return;
            }
        let newAns = props.ans.slice(0,-1);
        props.setAns(newAns);
        if(newAns.includes("."))
            setOperand2(parseFloat(newAns));
        else
            setOperand2(parseInt(newAns));
    }
    function handleChange(event) {
        props.setDispEq(false);
        if(props.ans === "+" ||
            props.ans === "-" ||
            props.ans === "*" ||
            props.ans === "/"
            ) {
            props.setAns(event.target.name);
            setOperand2(parseInt(event.target.name));
        }
        else {
            props.setAns(props.ans + event.target.name);
            let newAns = props.ans + event.target.name;
            if(newAns.includes("."))
                setOperand2(parseFloat(newAns));
            else
                setOperand2(parseInt(newAns));
        }
    }

    function handleEquals() {
        if(props.ans.includes("."))
            setOperand2(parseFloat(props.ans));
        else   
            setOperand2(parseInt(props.ans));
        console.log(operand1);
        console.log(operand2);
        let answer;
        if(operation === "+") {
            answer = operand1 + operand2;
        }
        else if(operation === "*") {
            answer = operand1 * operand2;
        }
        else if(operation === "-") {
            answer = operand1 - operand2;
        }
        else if(operation === "/") {
            if(operand2 === 0) {
                answer = Infinity;
                console.log("zero division error");
            }
            else {
                answer = operand1 / operand2;
            }
        }
        else {
            if(props.ans.includes(".")) 
                answer = parseFloat(props.ans);
            else 
                answer = parseInt(props.ans);
        }
        props.setDispEq(true);
        props.setAns(answer.toString());
        setOperand1(null);
        setOperation(null);
    }

    function handleOperation(event) {
        props.setDispEq(false);
        if(props.ans.includes("."))
            setOperand1(parseFloat(props.ans));
        else 
            setOperand1(parseInt(props.ans));
        props.setAns(event.target.name);
        setOperation(event.target.name);
        setOperand2(null);
    }

    return (
        <div>
            <br />
            <button 
                className = "num-button" 
                name = "1" 
                onClick = {handleChange}
            >
                1
            </button>
            <button 
                className = "num-button" 
                name = "2" 
                onClick = {handleChange}
            >
                2
            </button>
            <button 
                className = "num-button" 
                name = "3" 
                onClick = {handleChange}
            >
                3
            </button>
            <button 
                className = "num-button" 
                name = "*" 
                onClick = {handleOperation} 
            >
                x
            </button>
            <br />
            <button 
                className = "num-button" 
                name = "4" 
                onClick = {handleChange} 
            >
                4
            </button>
            <button 
                className = "num-button" 
                name = "5" 
                onClick = {handleChange} 
            >
                5
            </button>
            <button 
                className = "num-button" 
                name = "6" 
                onClick = {handleChange} 
            >
                6
            </button>
            <button 
                className = "num-button" 
                name = "/" 
                onClick = {handleOperation} 
            >
                /
            </button>
            <br />
            <button 
                className = "num-button" 
                name = "7" 
                onClick = {handleChange} 
            >
                7
            </button>
            <button 
                className = "num-button" 
                name = "8" 
                onClick = {handleChange}
            >
                8
            </button>
            <button 
                className = "num-button" 
                name = "9" 
                onClick = {handleChange}
            >
                9
            </button>
            <button
                className = "num-button"
                name = "="
                onClick = {handleEquals}
            >
                =
            </button>
            <br />
            <button 
                className = "num-button" 
                name = "+" 
                onClick = {handleOperation} 
            >
                +
            </button>
            <button 
                className = "num-button" 
                name = "0" 
                onClick = {handleChange} 
            >
                0
            </button>
            <button 
                className = "num-button" 
                name = "-" 
                onClick = {handleOperation} 
            >
                -
            </button>
            <button 
                className = "num-button" 
                name = "." 
                onClick = {handleChange} 
            >
                .
            </button>
            <br />
            <button 
                className = "clear-button"
                onClick = {
                    () => {
                        props.setDispEq(false);
                        props.setAns("");
                    }
                }
            >
                C
            </button>
            <button 
                className = "clear-button"
                onClick = {handleDelete}
            >
                Del
            </button>
        </div>
    )
}

export default InpButtons;