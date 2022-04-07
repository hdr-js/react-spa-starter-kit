/* eslint-disable max-len */
import React from 'react';
import './suspense-loader.scss';

const SuspenseLoader = () => {
  return (
    <section className="d-flex justify-content-center align-items-center loader-sec">
      <svg className="simple-loader" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </section>
  );
};

export default SuspenseLoader;
