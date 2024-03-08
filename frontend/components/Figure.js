import React from "react"
export default function Figure({imageURL, date}) {
    return (
    <figure>
            <img src={imageURL}/>
            <figcaption> Awesome pic take on {date}</figcaption>
          </figure>
    )
    }