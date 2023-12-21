import React from "react";

interface  Props {
    num1: number;
    num2: number;
    num3: number;
    num4: number;
    num5: number
}

const Person: React.FC<Props> = (props) => {
    return (
        <div className="person">
            <p>{props.num1}</p>
            <p>{props.num2}</p>
            <p>{props.num3}</p>
            <p>{props.num4}</p>
            <p>{props.num5}</p>
        </div>
    );
}

export default Person;