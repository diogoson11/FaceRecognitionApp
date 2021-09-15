import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = () => {
    return (
        <div className="ma4 mt0">
          <p className="f3 grey">{'This Magic Brain Will Detect Faces'}</p>
          <div className="center ">
              <div className="form center pa4 br3 shadow-5">
              <input type='text' className="f4 pa2 w-70 center"/>
              <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
              </div>
          </div>
        </div>
    );
}

export default ImageLinkForm;