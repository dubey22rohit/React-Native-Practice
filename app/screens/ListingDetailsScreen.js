import React from 'react';
import { Image, StyleSheet ,View} from "react-native";
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import ListItem from "../components/ListItem"
function ListingDetailsScreen({route}) {
  const listing = route.params
    return (
      <View>
        <Image style={styles.image} source={listing.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>{listing.price}</AppText>
          <View style = {styles.userContainer}>
            <ListItem
              image={require("../assets/background.jpg")}
              title="Rohit Dubey"
              subTitle="5 Listings"
            />
          </View>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer : {
      marginVertical : 40
  }
});
export default ListingDetailsScreen;