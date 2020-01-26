import React from 'react';
import './Content.css';

const Content = ({
  title = '',
  text = '',
  hyfLogo = {},
  codeartLogo = {},
  theme = {},
}) => {
  return (
    <div style={{ backgroundColor: theme.colors.primary }}>
      <h2
        data-testid="title"
        style={{
          fontFamily: theme.fontFamily.title,
          fontSize: theme.fontFamily.sizeTitle,
          textAlign: theme.textAlign,
        }}
        className="content-title"
      >
        {title}
      </h2>
      <span data-testid="text" className="content-text">
        {text}
      </span>
      <h2
        style={{
          fontFamily: theme.fontFamily.title,
          fontSize: theme.fontFamily.sizeTitle,
          textAlign: theme.textAlign,
        }}
      >
        Made by:
      </h2>
      <div
        style={{ background: theme.colors.primary }}
        className="content-footer"
      >
        <img
          src={codeartLogo.src}
          alt={codeartLogo.alt}
          style={{
            width: theme.images.width,
            height: theme.images.height,
          }}
        />
        <img
          src={hyfLogo.src}
          alt={hyfLogo.alt}
          style={{
            width: theme.images.width,
            height: theme.images.height,
          }}
        />
      </div>
    </div>
  );
};

export default Content;
