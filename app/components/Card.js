import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText/AppText";

function Card({imageUrl, subTitle, title ,onPress}) {
  return (
    <TouchableWithoutFeedback onPress = {onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri : imageUrl}} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow : "hidden"
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle : {
      color : colors.secondary,
      fontWeight : "bold"
  },
  title : {
      marginBottom : 10
  }
});
export default Card;
