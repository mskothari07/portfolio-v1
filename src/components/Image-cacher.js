import React, { useEffect } from "react";

const ImageCacher = () => {
  useEffect(() => {
    const imageUrls = [
      "heroimage.jpg",
      "insta-logo.jpg",
      "arrow.svg",
      "github-logo.png",
      "booking-.com-clone.svg",
      "linkedIn-logo.svg",
      "medium-logo.svg",
      "my-portfolio.svg",
      "notIT_app.svg",
      "og-cross.svg",
      "tempit.svg",
      "twitter-logo.svg",
      "transparent.png",
      "logo.png",
    ];

    imageUrls.forEach((imageUrl) => {
      // Fetch the image
      const image = new Image();
      image.src = imageUrl;

      // Cache the image
      localStorage.setItem(imageUrl, image.src);
    });
  }, []);

  return null;
};

export default ImageCacher;
