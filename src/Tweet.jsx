import React from "react";
import { getRandomIntBetween } from './utils';

const DATE = new Date();

function Tweet(props) {
  const { content } = props;

  return (
    <div className="css-1dbjc4n r-9x6qib r-1ylenci r-rs99b7 r-vakc41 r-y54riw r-1udh08x">
      <article
        role="article"
        data-focusable="true"
        tabIndex="0"
        className="css-1dbjc4n r-14lw9ot r-1ny4l3l r-1inuy60 r-1yt7n81 r-ry3cjt r-m611by r-o7ynqc r-6416eg"
      >
        <a
          href="https://twitter.com/TheSpoonyOne/"
          target="_blank"
          role="link"
          data-focusable="true"
          className="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21"
          rel=" noopener noreferrer"
        ></a>
        <div className="css-1dbjc4n r-1niwhzg r-1yadl64 r-109y4c4 r-1udh08x r-t60dpp r-u8s1d r-92ng3h"></div>
        <div className="css-1dbjc4n r-18u37iz r-1mi0q7o">
          <a
            href="https://twitter.com/TheSpoonyOne/"
            target="_blank"
            role="link"
            aria-hidden="true"
            tabIndex="-1"
            className="css-4rbku5 css-18t94o4 css-1dbjc4n r-sdzlij r-1loqt21 r-195d4m8 r-1ny4l3l r-1udh08x r-o7ynqc r-6416eg r-r6l3g7"
            rel=" noopener noreferrer"
          >
            <div className="css-1dbjc4n r-1adg3ll r-1udh08x" style={{}}>
              <div
                className="r-1adg3ll r-13qz1uu"
                style={{ paddingBottom: "100%" }}
              ></div>
              <div className="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
                <div
                  aria-label=""
                  className="css-1dbjc4n r-sdzlij r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010"
                >
                  <div
                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                    style={{
                      backgroundImage:
                        "url(&quot;https://pbs.twimg.com/profile_images/743812055736664064/hoUy5GwP_normal.jpg&quot;)"
                    }}
                  ></div>
                  <img
                    alt=""
                    draggable="true"
                    src="https://pbs.twimg.com/profile_images/743812055736664064/hoUy5GwP_normal.jpg"
                    className="css-9pa8cd"
                  />
                </div>
              </div>
            </div>
            <div className="css-1dbjc4n r-1twgtwe r-sdzlij r-rs99b7 r-1p0dtai r-1mi75qu r-1d2f490 r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
          </a>
          <div className="css-1dbjc4n r-eqz5dr r-1777fci r-5f2r5o r-1kh6xel">
            <a
              href="https://twitter.com/TheSpoonyOne/"
              target="_blank"
              role="link"
              data-focusable="true"
              className="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"
              rel=" noopener noreferrer"
            >
              <div className="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l">
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-dnmrzs">
                  <div
                    dir="auto"
                    className="css-901oao css-bfa6kz r-hkyrab r-1qd0xha r-1b43r93 r-vw2c0b r-ad9z0x r-bcqeeo r-3s2u2q r-qvutc0"
                  >
                    <span className="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                      <span className="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                        Noah Antwiler
                      </span>
                    </span>
                  </div>
                  <div
                    dir="auto"
                    className="css-901oao r-hkyrab r-18u37iz r-1q142lx r-1qd0xha r-1b43r93 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0"
                  ></div>
                </div>
                <div className="css-1dbjc4n r-18u37iz r-1wbh5a2">
                  <div
                    dir="ltr"
                    className="css-901oao css-bfa6kz r-1re7ezh r-18u37iz r-1qd0xha r-1b43r93 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0"
                  >
                    <span className="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                      @TheSpoonyOne
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <a
            href="https://twitter.com/TheSpoonyOne"
            target="_blank"
            aria-label="View on Twitter"
            role="link"
            data-focusable="true"
            className="css-4rbku5 css-18t94o4 css-1dbjc4n r-sdzlij r-1loqt21 r-1jj8364 r-1ny4l3l r-o7ynqc r-6416eg"
            rel=" noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              className="r-13gxpu9 r-4qtqp9 r-yyyyoo r-6zzn7w r-19fsva8 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-q1j0wu"
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="css-1dbjc4n">
          <div
            lang="en"
            dir="auto"
            className="css-901oao r-hkyrab r-1dqbpge r-1qd0xha r-1b6yd1w r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0"
          >
            <span className="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
              {content}
            </span>
          </div>
        </div>
        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1bymd8e">
          <div
            dir="auto"
            className="css-901oao r-1re7ezh r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0"
          >
            <a
              href="https://twitter.com/TheSpoonyOne/"
              target="_blank"
              role="link"
              data-focusable="true"
              className="css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1re7ezh r-1loqt21 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"
              rel=" noopener noreferrer"
            >
              <span className="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                {getRandomIntBetween(1, 13)}:{getRandomIntBetween(10, 60)} AM ·{" "}
                {new Intl.DateTimeFormat("en-US", { month: "long" }).format()}{" "}
                {DATE.getDate()}, {DATE.getFullYear()}
              </span>
            </a>
          </div>
          <a
            href="https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy"
            target="_blank"
            aria-label="Twitter Ads info and privacy"
            role="link"
            data-focusable="true"
            className="css-4rbku5 css-18t94o4 css-1dbjc4n r-sdzlij r-1loqt21 r-1g7fiml r-1777fci r-1jj8364 r-17uwdlj r-1ny4l3l r-o7ynqc r-6416eg r-199wky7"
            rel=" noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              className="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path d="M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z"></path>
                <circle cx="12" cy="8.042" r="1.25"></circle>
                <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="css-1dbjc4n r-1habvwh r-9x6qib r-5kkj8d r-18u37iz r-1g94qm0 r-glunga">
          <a
            href=""
            target="_blank"
            aria-label="Like 34"
            role="link"
            data-focusable="true"
            className="css-4rbku5 css-18t94o4 css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-1mf7evn r-1ny4l3l r-o7ynqc r-6416eg"
            rel=" noopener noreferrer"
          >
            <div className="css-1dbjc4n r-sdzlij r-1g7fiml r-1777fci r-1x6tx0e r-1ny4l3l r-o7ynqc r-6416eg r-199wky7">
              <svg
                viewBox="0 0 24 24"
                className="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                style={{}}
              >
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg>
            </div>
            <div className="css-1dbjc4n r-1ny4l3l">
              <div
                dir="auto"
                className="css-901oao css-bfa6kz r-1re7ezh r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-1f6r7vd r-bcqeeo r-qvutc0"
                style={{}}
              >
                <span className="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                  34
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://twitter.com/TheSpoonyOne/"
            target="_blank"
            role="link"
            data-focusable="true"
            className="css-4rbku5 css-18t94o4 css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-1wbh5a2 r-1ny4l3l r-o7ynqc r-6416eg"
            rel=" noopener noreferrer"
          >
            <div className="css-1dbjc4n r-sdzlij r-1g7fiml r-1777fci r-1ny4l3l r-o7ynqc r-6416eg r-199wky7">
              <svg
                viewBox="0 0 24 24"
                className="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
              >
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
            </div>
            <div className="css-1dbjc4n r-1wbh5a2 r-1ny4l3l">
              <div
                dir="auto"
                className="css-901oao css-bfa6kz r-1re7ezh r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-1f6r7vd r-bcqeeo r-qvutc0"
              >
                <span className="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                  21 people are Tweeting about this
                </span>
              </div>
            </div>
          </a>
        </div>
      </article>
    </div>
  );
}

export default Tweet;
