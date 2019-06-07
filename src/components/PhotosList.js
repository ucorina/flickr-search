import React from "react";

const PhotosList = ({ photos }) => {
  return (
    <div>
      {photos.map(photo => (
        <img
          key={photo.id}
          src={photo.url_m}
          width={photo.width_m}
          height={photo.height_m}
          alt={photo.title}
        />
      ))}
    </div>
  );
};

export default PhotosList;
