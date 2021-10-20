import React from "react";
import nan from "./nan.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  min-width: 4em;
`;

const UserImage = props => {
  let { users, userId, src, ...restProps } = props;
  let imageSrc = nan;
  if (src) imageSrc = src;
  if (props.users) imageSrc = findUserImage(users, userId);
  return <Image src={imageSrc} {...restProps} />;
};

export default UserImage;
