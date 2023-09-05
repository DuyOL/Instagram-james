// Upload.jsx
import React, { useCallback, useState } from "react";
import styles from './Upload.module.scss';
import classNames from 'classnames/bind';
import { useDropzone } from 'react-dropzone';

const cx = classNames.bind(styles);

function Upload() {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
        setUploading(true);

        const newImages = acceptedFiles.map(file => URL.createObjectURL(file));
        setUploadedImages(prevImages => [...prevImages, ...newImages]);

        setTimeout(() => {
            setUploading(false);
        }, 1000);
    }, []);

    const handleRemoveImage = (index) => {
        if (!uploading) {
            const newImages = uploadedImages.filter((_, i) => i !== index);
            setUploadedImages(newImages);
        }
    };

    const handleAddImage = () => {
        if (!uploading) {
            
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className={cx('wrapper')}>
            <h1>Create new article</h1>
            <div {...getRootProps()} className={cx('dropzone', { 'active': isDragActive })}>
                <input {...getInputProps()} />
                <div className={cx('uploaded-images')}>
                    {uploadedImages.map((imageURL, index) => (
                        <div key={index} className={cx('uploaded-image')}>
                            <img src={imageURL} alt={`Uploaded ${index}`} />
                            <div className={cx('delete-image')} onClick={() => handleRemoveImage(index)}>
                                <span>X</span>
                            </div>
                        </div>
                    ))}
                </div>
                {uploadedImages.length === 0 && (
                    <p>
                       Drag and drop an image or video here
                       or click to select <br />
                    </p>
                )}
                {!uploading && (
                    <div className={cx('add-image')} onClick={handleAddImage}>
                        <span>+</span>
                    </div>
                )}
            </div>
            <button className={cx('button')}>Choose from computer</button>
        </div>
    );
}

export default Upload;
