import { StyleSheet } from "react-native";

export const style=StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        // width:200,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      },
      image: {
        width: ITEM_WIDTH,
        // width:200,
        height: 300,
      },
})