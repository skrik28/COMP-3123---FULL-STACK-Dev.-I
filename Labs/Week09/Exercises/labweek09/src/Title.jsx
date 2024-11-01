import React from "react";

export default function Title({title, subtitle}) {
    return (
        // the shortcut for this is empty <> </>
        <React.Fragment>  
            <h1 style={{ textColor: "red"}}>{title}</h1>
            <h2>{subtitle}</h2>
        </React.Fragment>
    )
}