import React,{useState} from "react";
import { FlatList, StyleSheet, Platform, StatusBar,View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/chair.jpg"),
  },
];
function MessagesScreen(props) {
  const[messages,setMessages] = useState(initialMessages)
  const [refreshing,setRefreshing] = useState(false)
  const handleDelete = message => {
    const newMessages = messages.filter(m=>m.id !== message.id)
    setMessages(newMessages)
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/chair.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
