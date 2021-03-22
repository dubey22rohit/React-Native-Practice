import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListingDetailsScreen from "./ListingDetailsScreen";
import routes from "../navigation/routes";
import AppText from "../components/AppText/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
function ListingScreen({ navigation }) {
  const { data : listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the lisitngs</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id?.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingScreen;
