import { ScrollView } from "react-native";
import React from "react";
// import { Users } from "../../const-data/User";
import UserItems from "./UserItems";

const ExpScrollView = ({ Users }) => {
  return (
    <ScrollView>
      {Users.map((v, index) => (
        <UserItems item={v} key={index} />
      ))}
    </ScrollView>
  );
};

export default ExpScrollView;