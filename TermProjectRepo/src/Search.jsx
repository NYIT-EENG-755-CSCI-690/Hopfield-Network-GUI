import React, { useState, useEffect } from "react";
import BallContainer from "./BallContainer";
import ApiDataContainer from "./ApiDataContainer";
import preload from "./data.json";
import Spinner from "./Spinner";

// TODO not storing state correctly in search term
const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [ApiData, setApiData] = useState([]);
    const [message, setMessage] = useState("");
    const [spinner, setSpinner] = useState(false);
    const BALL_ARR = preload.balls;

    async function requestWord(body) {
        const response = await fetch("/process-word", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        console.log(data);
        setSearchTerm(data);
        setApiData(data.balls);
        // setSearchTerm(word || "");
    }

    const handleMessage = (e) => {
        var newMessage = e.currentTarget.value;
        setMessage(newMessage);
    };

    function refreshPage() {
        window.location.reload(false);
    }

    const delay = (time) => {
        return new Promise((res) => {
            setTimeout(res, time);
        });
    };

    const runAfterDelay = async (cb) => {
        await delay(1000);
        cb(message);
        setSpinner(false);
    };

    let results;
    if (spinner) {
        results = <Spinner />;
    }

    return (
        <div className="search">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    runAfterDelay(requestWord);
                    setSpinner(true);
                    // setMessage(searchTerm.input);
                }}
            >
                <header>
                    <h1>Term Project 755 / 690</h1>
                    <input
                        id="search"
                        value={message}
                        type="text"
                        placeholder="Search"
                        onChange={handleMessage}
                    />
                    <button>Submit</button>
                </header>
            </form>
            <BallContainer ballArr={BALL_ARR} />
            {results}
            <ApiDataContainer ApiBallArr={ApiData} />
            <div>The input is {searchTerm.input}.</div>
            <div>The output is {searchTerm.output}.</div>
            <button onClick={refreshPage}> Reload</button>
        </div>
    );
};

export default Search;
