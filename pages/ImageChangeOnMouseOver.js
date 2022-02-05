import React from 'react';
//https://github.com/pkellner/pluralsight-course-using-react-hooks/blob/master/02-Basic-React-Hooks-useState-useRef-useEffect/clip3-setState-Tracking-Input-Field/pages/index.js

import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
      <div>
        <ImageToggleOnMouseOver
          primaryImg="/static/speakers/bw/Speaker-187.jpg"
          secondaryImg="/static/speakers/Speaker-187.jpg"
          alt=""
        />
        &nbsp;&nbsp;&nbsp;
        <ImageToggleOnMouseOver
          primaryImg="/static/speakers/bw/Speaker-1124.jpg"
          secondaryImg="/static/speakers/Speaker-1124.jpg"
          alt=""
        />
      </div>
    );

};
export default ImageChangeOnMouseOver;