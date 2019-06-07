import React, { Fragment } from "react";
import styled from "styled-components";

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const Photo = styled.img`
  margin: 10px;
  border-radius: 10px;
`;

const PhotosList = ({ photos, text }) => {
  if (!photos.length) {
    return null;
  }
  return (
    <Fragment>
      <h2>
        Here are the search results for <em>{text}</em>
      </h2>
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
    </Fragment>
  );
};

export default PhotosList;
