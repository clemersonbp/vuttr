import React, { useState, useEffect } from "react";

import api from "../services/api";

import '../styles/components/tools.css';

export default function Tools() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        async function setTool() {
            const response = await api.get('/tools');
            setTools(response.data);
        }
        setTool();
    }, []);

    return (
        <>
            {tools.map(tools => (
                <article key={tools.id} className="tool-container" >
                    <a href={tools.link} ><strong className="tool-name" >{tools.title}</strong></a>
                    <p className="tool-desc" >{tools.description}</p>
                    {tools.tags.map((tag, keyTag) => {
                        return (
                            <p key={keyTag} className="tool-tag" >#{tag}</p>
                        );
                    })}

                </article>
            ))}
        </>
    )
}
