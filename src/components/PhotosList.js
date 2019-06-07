import React from "react";
import styled from "styled-components";

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const Photo = styled.img`
  margin: 10px;
  border-radius: 10px;
`;

const PhotosList = ({ photos }) => {
  return (
    <PhotoWrapper>
      {photos.map(photo => (
        <Photo
          key={photo.id}
          src={photo.url_s}
          width={photo.width_s}
          height={photo.height_s}
          alt={photo.title}
          title={photo.title}
        />
      ))}
    </PhotoWrapper>
  );
};

export default PhotosList;
