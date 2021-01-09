import React, { useState } from "react";
import Tweet from "./Tweet";
import { OG_TWEET, generateTweet } from "./tweets";

export default function App() {
  const [tweetContent, setTweetContent] = useState(OG_TWEET);

  function handleClick() {
    setTweetContent(generateTweet());
  }

  return (
    <div className="App">
      <h1>Spoony Sad Tweet Generator</h1>
      <Tweet content={tweetContent} />
      <p style={{ marginTop: "20px", fontSize: ".8rem" }}>
        Generate your very own Spoony tweet and share the sadness with the whole
        world!
      </p>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <button onClick={handleClick} className="new-tweet-button">
          Generate Tweet
        </button>
      </div>
      <div style={{ marginTop: "20px", fontSize: ".8rem" }}>
        Inspired by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.reddit.com/r/thespoonyexperiment/comments/ktbwz0/spoony_sad_tweet_maker_use_it_if_spoony_is_absent/"
        >
          this shitpost
        </a>
        .
      </div>
      <div style={{ marginTop: "5px", fontSize: ".8rem" }}>
        Twitter{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/NoahAntwiIer"
        >
          @NoahAntwiIer
        </a>
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
    </div>
  );
}
