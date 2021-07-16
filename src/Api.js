import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Api() {
  let data = [];
  const [apiData, setApiData] = useState([]);
  const [inputUrl, setInputUrl] = useState();

  //test URL
  //"https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch"

  async function getShortUrl() {
    const result = await fetch(
      "https://api.pics.ee/v1/links?access_token=20f07f91f3303b2f66ab6f61698d977d69b83d64&caller=client-simple&lang=zh-tw",
      {
        method: "POST",
        body: JSON.stringify({
          url: `${inputUrl}`,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      }
    )
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        setApiData(response);
      });
  }

  useEffect(() => {
    getShortUrl();
    setApiData(data);
    // console.log("1", apiData);
  }, []);

  const addUrl = () => {
    //add input url to localStorage
    console.log(inputUrl);
    //clear input box
    setInputUrl("");
  };

  console.log(apiData.data);

  return (
    <div>
      <input
        placeholder="your address"
        className="input"
        onChange={(e) => {
          setInputUrl(e.target.value);
        }}
        value={inputUrl}
      ></input>
      <button calssName="click" onClick={addUrl}>
        Enter
      </button>
      <div>result: {apiData.data}</div>
    </div>
  );
}

export default Api;
