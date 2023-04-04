import React, { Component } from "react";
import { View, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import SearchBar from "./widget/SearchBar";
import { Suggested, Users } from "../Dummy";
import ExpScrollView from "./widget/ExpScrollView";
import ExpSectionList from "./widget/ExpSectionList";
import ExpFlatList from "./widget/ExpFlatList";


class Myfriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} style="light" />
        <View style={styles.header}>
          <SearchBar /> 
        </View>
        <View style={styles.body}>
          {/* <ScrollView /> */}
          <ExpScrollView Users={Users} /> 

          {/* FlatList */}
          {/* <ExpFlatList  Users={Users} /> */}

          {/* SectionList */}
          <ExpSectionList  Users={Suggested} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Myfriends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  body: {
    flex: 10,
    backgroundColor: "black",
  },
});