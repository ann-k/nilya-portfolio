import React from 'react';
import styled from 'styled-components';

function Rickroll({ className }) {
  return (
    <div className={className}>
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        playsinline
      ></iframe>
    </div>
  );
}

export default styled(Rickroll)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  background: black;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
