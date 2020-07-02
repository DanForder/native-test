import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum varius nisi ac, faucibus rutrum massa. Suspendisse finibus fermentum velit nec facilisis. Nulla a eros eget lacus volutpat feugiat eget id sapien. Pellentesque porta sollicitudin elementum. Curabitur ullamcorper sem nulla, sed ornare mi tristique nec. Maecenas nec varius mi. Maecenas dolor magna, tempus vitae diam ac, aliquam commodo ante. Vestibulum fermentum mattis justo vel semper. Nulla blandit mi ut tortor vulputate consectetur. Etiam consectetur congue lacus, sed tristique tellus rutrum at.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum varius nisi ac, faucibus rutrum massa. Suspendisse finibus fermentum velit nec facilisis. Nulla a eros eget lacus volutpat feugiat eget id sapien. Pellentesque porta sollicitudin elementum. Curabitur ullamcorper sem nulla, sed ornare mi tristique nec. Maecenas nec varius mi. Maecenas dolor magna, tempus vitae diam ac, aliquam commodo ante. Vestibulum fermentum mattis justo vel semper. Nulla blandit mi ut tortor vulputate consectetur. Etiam consectetur congue lacus, sed tristique tellus rutrum at.",
    image: require("../assets/dan.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
            onPress={() => console.log("selected:", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
