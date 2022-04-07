import React from 'react';
import propTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

import configs from '../../../utils/data/contentLoaderConfig';
import './loader.scss';

const Loader = ({ variant }) => {
  const configData = configs[variant];
  return (
    <ContentLoader
      height={configData.height}
      width={configData.width}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      {configData.lines.map(shape => (
        <rect
          key={`${shape.x}-${shape.y}`}
          x={shape.x}
          y={shape.y}
          rx={shape.rx}
          ry={shape.ry}
          width={shape.width}
          height={shape.height}
        />
      ))}
    </ContentLoader>
  );
};

Loader.propTypes = {
  variant: propTypes.string,
};

export default Loader;
