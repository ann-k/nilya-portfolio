import React from 'react';
import styled from 'styled-components';

function ExternalLink({ className, title, src }) {
  return (
    <div className={className}>
      <iframe src={src} title={title} frameborder="0"></iframe>
    </div>
  );
}

export default styled(ExternalLink)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
