import React, { useState, useEffect } from "react";
import BallContainer from "./BallContainer";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [message, setMessage] = useState("");

    async function requestWord(body) {
        await fetch("/process-word", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSearchTerm(data);
            })
            .catch((error) => console.log(error));
        // setSearchTerm(word || "");
    }

    const handleMessage = (e) => {
        var newMessage = e.currentTarget.value;
        console.log(newMessage);
        setMessage(newMessage);
    };

    return (
        <div className="search">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(message);
                    requestWord(message);
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
            <BallContainer />
            <div>The input is {searchTerm.input}.</div>
            <div>The output is {searchTerm.output}.</div>
        </div>
    );
};

export default Search;
