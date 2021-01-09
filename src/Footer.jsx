import React from "react";

function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "10px",
        display: "flex",
        fontSize: ".8rem",
        backgroundColor: "#bcfff9",
        justifyContent: "center",
        borderTop: "1px solid #59b060"
      }}
    >
      <div style={{ margin: "0 10px" }}>
        Inspired by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.reddit.com/r/thespoonyexperiment/comments/ktbwz0/spoony_sad_tweet_maker_use_it_if_spoony_is_absent/"
        >
          this shitpost
        </a>
      </div>
      <div style={{ margin: "0 10px" }}>
        Twitter{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/NoahAntwiIer"
        >
          @NoahAntwiIer
        </a>
      </div>
      <div style={{ margin: "0 10px" }}>
        For issues and suggestions:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/theliquidspoonyone/spoony-sad-tweet-generator"
        >
          GitHub
          <svg
            style={{ marginLeft: "5px" }}
            height="12"
            viewBox="0 0 16 16"
            version="1.1"
            width="12"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Footer;
