import { useState } from "react";

function EventExamples() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Have a nice day!");
    }

    function incrementAndHello() {
        increment();
        sayHello();
    }

    function sayWelcome(message) {
        alert(message);
    }

    function Clickonme() {
        alert("I was clicked");
    }

    return (

        <div>

            <h2>Counter : {count}</h2>

            <button onClick={incrementAndHello}>
                Increment
            </button>

            &nbsp;

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button
                onClick={() => sayWelcome("Welcome")}
            >
                Say Welcome
            </button>

            <br /><br />

            <button onClick={Clickonme}>
                Click on me
            </button>

        </div>

    );

}

export default EventExamples;