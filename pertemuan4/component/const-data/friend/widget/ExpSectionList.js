import React from "react";
import { SectionList, Text } from "react-native";
import { Users, Suggested, Followers } from "../../Dummy";
import UserItems from "./UserItems";

const ExpSectionList = () => {
  const data = [
    { title: "Suggested", data: Suggested },
    { title: "Followers", data: Followers },
  ];
  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <UserItems item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ color: "white", fontSize: 16 }}>{title}</Text>
      )}
    />
  );
};

export default ExpSectionList;