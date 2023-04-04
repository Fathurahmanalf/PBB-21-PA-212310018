import React from "react";
import { FlatList } from "react-native";
import { Users, Suggested } from "../../Dummy";
import UserItems from "./UserItems";

const ExpFlatList = () => {
  return (
    <FlatList
      data={Users}
      renderItem={({ item }) => <UserItems item={item} />}
    />
  );
};

export default ExpFlatList;