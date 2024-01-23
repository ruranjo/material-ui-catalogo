import { useEffect, useState } from "react";
import './Carousel.scss'
interface Props {
    images: string[];
    autoPlay?: boolean;
    showButtons?: boolean;
  }
  
  export default function Carousel(props: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    const [loaded, setLoaded] = useState(false);
  
    useEffect  (() => {
      if (props.autoPlay || !props.showButtons) {
        const interval = setInterval(() => {
          selectNewImage(selectedIndex, props.images);
        }, 3000);
        return () => clearInterval(interval);
      }
    });
  
    const selectNewImage = (index: number, images: string[], next = true) => {
      setLoaded(false);
      setTimeout(() => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
      }, 500);
    };
  
    return (
        <img  
          src={selectedImage}
          alt="rubens"
          className="carousel-img"
          onLoad={() => setLoaded(true)}
        />
    );
  }