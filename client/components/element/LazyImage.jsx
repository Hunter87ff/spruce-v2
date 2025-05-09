import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


const LazyImage = ({ src, placeholder, alt, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : placeholder}
            alt={alt}
            {...props}
            style={{ display: 'block', width: '100%', height: 'auto' }}
        />
    );
};

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default LazyImage;
