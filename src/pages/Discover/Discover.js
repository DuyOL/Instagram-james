import React, {useState} from 'react';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

//Image
import Image1 from './Image/Image1.jpg';
import Image2 from './Image/Image2.jpg';
import Image3 from './Image/Image3.jpg';
import Image4 from './Image/Image4.jpg';
import Image5 from './Image/Image5.jpg';
import Image6 from './Image/Image6.jpg';
import Image7 from './Image/Image7.jpg';
import Image8 from './Image/Image8.jpg';
import Image9 from './Image/Image9.jpg';
import Image10 from './Image/Image10.jpg';
import Image11 from './Image/Image11.jpg';
import Image12 from './Image/Image12.jpg';
import Image13 from './Image/Image13.jpg';
import Image14 from './Image/Image14.jpg';
import Image15 from './Image/Image15.jpg';
import Image16 from './Image/Image16.jpg';
import Image17 from './Image/Image17.jpg';
import Image18 from './Image/Image18.jpg';
import Image19 from './Image/Image19.jpg';
import Image20 from './Image/Image20.jpg';
import Image21 from './Image/Image21.jpg';
import Image22 from './Image/Image22.jpg';
import Image23 from './Image/Image23.jpg';
import Image24 from './Image/Image24.jpg';
import Image25 from './Image/Image25.jpg';
import Image26 from './Image/Image26.jpg';
import Image27 from './Image/Image27.jpg';
import Image28 from './Image/Image28.jpg';
import Image29 from './Image/Image29.jpg';
import Image30 from './Image/Image30.jpg';
import Image31 from './Image/Image31.jpg';
import Image32 from './Image/Image32.jpg';


// Video
import Video3 from './Image/Video3.mp4';
import Video4 from './Image/Video4.mp4';
import Video5 from './Image/Video5.mp4';
import Video6 from './Image/Video6.mp4';
import Video7 from './Image/Video7.mp4';
import Video8 from './Image/Video8.mp4';
import Video9 from './Image/Video9.mp4';
import Video10 from './Image/Video10.mp4';



const cx = classNames.bind(styles);

function Discover() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper1')}>
        <div className={cx('left-column')}>
          <img src={Image7}
            alt="Description 7"
            className={cx('image')}
            key="image7"
            onClick={() => setSelectedImage(Image7)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
          <img src={Image3}
            alt="Description 3"
            className={cx('image')}
            key="image3"
            onClick={() => setSelectedImage(Image3)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}    
          <img src={Image5}
            alt="Description 5"
            className={cx('image')}
            key="image5"
            onClick={() => setSelectedImage(Image5)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}    
          <img src={Image22}
            alt="Description 22"
            className={cx('image')}
            key="image22"
            onClick={() => setSelectedImage(Image22)}
          />
           {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}    
          <img src={Image8}
            alt="Description 8"
            className={cx('image')}
            key="image8"
            onClick={() => setSelectedImage(Image8)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}    
          <img src={Image17}
            alt="Description 17"
            className={cx('image')}
            key="image17"
            onClick={() => setSelectedImage(Image17)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}    
          <img src={Image21}
            alt="Description 21"
            className={cx('image')}
            key="image21"
            onClick={() => setSelectedImage(Image21)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}    
          <img src={Image1}
            alt="Description 1"
            className={cx('image')}
            key="image1"
            onClick={() => setSelectedImage(Image1)}
          />
           {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
          <img src={Image6}
            alt="Description 6"
            className={cx('image')}
            key="image6"
            onClick={() => setSelectedImage(Image6)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
          <img src={Image4}
            alt="Description 4"
            className={cx('image')}
            key="image4"
            onClick={() => setSelectedImage(Image4)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
          <img src={Image2}
            alt="Description 2"
            className={cx('image')}
            key="image2"
            onClick={() => setSelectedImage(Image2)}
          />
           {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
          <img src={Image18}
            alt="Description 18"
            className={cx('image')}
            key="image18"
            onClick={() => setSelectedImage(Image18)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
          )}
          <img src={Image25}
            alt="Description 25"
            className={cx('image')}
            key="image7"
            onClick={() => setSelectedImage(Image25)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
          )}
          <img src={Image26}
            alt="Description 26"
            className={cx('image')}
            key="image26"
            onClick={() => setSelectedImage(Image26)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
          )}
          <img src={Image28}
            alt="Description 28"
            className={cx('image')}
            key="image28"
            onClick={() => setSelectedImage(Image28)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
          )}
          <img src={Image29}
            alt="Description 29"
            className={cx('image')}
            key="image29"
            onClick={() => setSelectedImage(Image29)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
        </div>
        <div className={cx('right-column')}>
          <div className={cx('bottom-row')}>
            <img src={Image11}
              alt="Description 11"
              className={cx('image')}
              key="image11"
              onClick={() => setSelectedImage(Image11)}
            />
             {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image12}
              alt="Description 12"
              className={cx('image')}
              key="image12"
              onClick={() => setSelectedImage(Image12)}
            />
             {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image9}
              alt="Description 9"
              className={cx('image')}
              key="image9"
              onClick={() => setSelectedImage(Image9)}
            />
            {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image10}
              alt="Description 10"
              className={cx('image')}
              key="image10"
              onClick={() => setSelectedImage(Image10)}
            />      
             {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image13}
              alt="Description 13"
              className={cx('image')}
              key="image13"
              onClick={() => setSelectedImage(Image13)}
            />
            {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image14}
              alt="Description 14"
              className={cx('image')}
              key="image14"
              onClick={() => setSelectedImage(Image14)}
            />
            {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image15}
              alt="Description 15"
              className={cx('image')}
              key="image15"
              onClick={() => setSelectedImage(Image15)}
            />
            {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image16}
              alt="Description 16"
              className={cx('image')}
              key="image16"
              onClick={() => setSelectedImage(Image16)}
            />
            {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image19}
              alt="Description 19"
              className={cx('image')}
              key="image19"
              onClick={() => setSelectedImage(Image19)}
            />
            {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image20}
              alt="Description 20"
              className={cx('image')}
              key="image20"
              onClick={() => setSelectedImage(Image20)}
            />
            {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image23}
              alt="Description 23"
              className={cx('image')}
              key="image23"
              onClick={() => setSelectedImage(Image23)}
            />
             {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
            <img src={Image24}
              alt="Description 24"
              className={cx('image')}
              key="image24"
              onClick={() => setSelectedImage(Image24)}
            />
             {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
<img src={Image27}
            alt="Description 27"
            className={cx('image')}
            key="image27"
            onClick={() => setSelectedImage(Image27)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
            )}
            <img src={Image30}
            alt="Description 30"
            className={cx('image')}
            key="image30"
            onClick={() => setSelectedImage(Image30)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
            )}
            <img src={Image31}
            alt="Description 31"
            className={cx('image')}
            key="image31"
            onClick={() => setSelectedImage(Image31)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
            )}
            <img src={Image32}
            alt="Description 32"
            className={cx('image')}
            key="image32"
            onClick={() => setSelectedImage(Image32)}
          />
          {selectedImage && (
              <div className={cx('fullscreen-image')}>
              <span className={cx('close-button')} onClick={() => setSelectedImage(null)}>
                &times;
              </span>
          <img src={selectedImage} alt="Selected" />
  </div>
)}
          </div>
        </div>
      </div>
    <div className={cx('video-container')}>
         <video controls className={cx('video')}>
          <source src={Video9} type="video/mp4" />
        </video>
        <video controls className={cx('video')}>
          <source src={Video10} type="video/mp4" />
        </video>
         <video controls className={cx('video')}>
          <source src={Video7} type="video/mp4" />
        </video>
            <video controls className={cx('video')}>
          <source src={Video8} type="video/mp4" />
        </video>
        <video controls className={cx('video')}>
          <source src={Video5} type="video/mp4" />
        </video>
        <video controls className={cx('video')}>
          <source src={Video6} type="video/mp4" />
        </video> 
        <video controls className={cx('video')}>
          <source src={Video4} type="video/mp4" />
        </video> 
          <video controls className={cx('video')}>
          <source src={Video3} type="video/mp4" />
        </video> 
      </div>
    </div>
  );
}


export default Discover;