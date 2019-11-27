import React from "react";
import "./Content.css";

const theme = {
  textAlign: "center",
  fontFamily: {
    title: "'Pacifico', cursive",
    main: "'Open Sans', sans-serif",
    sizeTitle: "2em",
    sizeText: "1em"
  },
  colors: {
    primary: "#F0F0F0"
  },
  images: {
    width: "10em",
    height: "auto"
  }
};

const Content = ({ title = "", text = "", hyfLogo = {}, codeartLogo = {} }) => {
  return (
    <div style={{ backgroundColor: theme.colors.primary }}>
      <h2
        style={{
          fontFamily: theme.fontFamily.title,
          fontSize: theme.fontFamily.sizeTitle,
          textAlign: theme.textAlign
        }}
        className="contentTitle"
      >
        {title}
      </h2>
      <span className="contentText">{text}</span>
      <h2
        style={{
          fontFamily: theme.fontFamily.title,
          fontSize: theme.fontFamily.sizeTitle,
          textAlign: theme.textAlign
        }}
      >
        made by:
      </h2>
      <div
        style={{ background: theme.colors.primary }}
        className="contentFooter"
      >
        <img
          src={codeartLogo.src}
          alt={codeartLogo.alt}
          style={{
            width: theme.images.width,
            height: theme.images.height
          }}
        />
        <img
          src={hyfLogo.src}
          alt={hyfLogo.alt}
          style={{
            width: theme.images.width,
            height: theme.images.height
          }}
        />
      </div>
    </div>
  );
};

export default Content;
