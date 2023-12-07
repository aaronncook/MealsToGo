import React from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled(Text)`
  padding: 16px;
  font-size: 40px;
  padding-bottom: 10px;
  color: red;
`;

const Content = styled(Text)`
  padding-left: 20px;
  font-size: 14px;
`;

const RestaurantCard = styled(Card)`
  background: white;
  border-radius: 5px;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Bad Badnandas",
    icon,
    address = "100 Random drive",
    photos = ["https://picsum.photos/536/354"],
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
        <Content>{address}</Content>
      </RestaurantCard>
    </>
  );
};
