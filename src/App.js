import React, { useState } from "react";
import Tweet from "./Tweet";
import Footer from "./Footer";
import { OG_TWEET, generateTweet } from "./tweets";

export default function App() {
  const [tweetContent, setTweetContent] = useState(OG_TWEET);

  function handleClick() {
    setTweetContent(generateTweet());
  }

  return (
    <div className="App">
      <h1 style={{ marginBottom: "10px" }}>Spoony Sad Tweet Generator</h1>
      <h2 style={{ marginTop: "10px", marginBottom: "30px", fontSize: "1rem" }}>
        Generate your very own Spoony tweet and share the sadness with the whole
        world!
      </h2>
      <Tweet content={tweetContent} />
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button onClick={handleClick} className="new-tweet-button">
          Generate Tweet
        </button>
      </div>

      <div
        style={{
          marginTop: "100px"
        }}
      >
        <figure>
          <blockquote cite="some dingus">
            <p>
              Wow, I tried this and I think that now I <strong>would</strong>{" "}
              understand...
            </p>
          </blockquote>
          <figcaption>
            — Some Twitter Dingus, <cite>Dark Times Survivor</cite>
          </figcaption>
        </figure>
      </div>
      <Footer />
    </div>
  );
}
