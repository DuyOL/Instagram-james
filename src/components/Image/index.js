import { useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames";
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, className, fallback:customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleEror = () => {
        setFallBack(customFallback)
    }
    return <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt}{...props}
        onError={handleEror}
    />
})
Image.propTypes = {
    src:PropTypes.string,
    alt:PropTypes.string,
    className:PropTypes.string,
    fallback:PropTypes.string,
}


export default Image;