import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:8000"

const client = axios.create({
    baseURL: url
});

type greeting = {
    title: string;
};

function Greeting() {
    const [greeting, setGreeting] = useState<greeting>({
        title: "",
    });

    useEffect(() => {
        async function fetchData() {
            const response = await client.get(`/api/greeting/`)
            // console.log({ response })
            setGreeting({ "title": response.data });
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <h2>Greeting</h2>
            <h2>{greeting.title}</h2>
        </div>
    );
}

export default Greeting;