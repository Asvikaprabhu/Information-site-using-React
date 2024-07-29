import React from "react"
import "./Navigate.css"
export default function Main()
{
    return (
        <main>
            <h1 className="main--title">Fun Facts About React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was orginally created by Jordon Walke</li>
                <li>
                    Has well over 100K stars on GitHub
                </li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps,including mobile apps</li>
            </ul>
        </main>
    )
}