import React from "react";

export default function Custom(){

    return (
        <div className="p-5 text-center bg-body-tertiary rounded-3">
            <svg className="bi mt-4 mb-3" width="100" height="100">
                <use href="#bootstrap"></use>
            </svg>
            <h1 className="text-body-emphasis" style={{fontSize: "8rem"}}>
                <div className={"my-rotate d-inline-block"}>
                    <i className="bi bi-yin-yang"></i>
                </div>
                <br/>
                404
            </h1>
        </div>
    )
}