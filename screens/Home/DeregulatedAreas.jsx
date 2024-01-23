import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import Header from "../../Component/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";

const DeregulatedAreas = () => {
  const data = [
    "Abilene",
    "Addison",
    "Alamo",
    "Albany",
    "Aledo",
    "Alice",
    "Allen",
    "Alpine",
    "Alvarado",
    "Alvin",
    "Alvord",
    "Andrews",
    "Angleton",
    "Anson",
    "Aransas Pass",
    "Archer City",
    "Argyle",
    "Arlington",
    "Arroyo City",
    "Aspermont",
    "Athens",
    "Atlanta",
    "Aubrey",
    "Austwell",
    "Azle",
    "Bacliff",
    "Baird",
    "Balch Springs",
    "Ballinger",
    "Balmorhea",
    "Barksdale",
    "Bay City",
    "Baytown",
    "Bedford",
    "Beeville",
    "Bellaire",
    "Bellmead",
    "Belton",
    "Benbrook",
    "Big Lake",
    "Big Spring",
    "Bishop",
    "Blooming Grove",
    "Bonham",
    "Booker",
    "Brackettville",
    "Brazoria",
    "Breckenridge",
    "Bronte",
    "Brookshire",
    "Brownwood",
    "Buffalo",
    "Burkburnett",
    "Burleson",
    "Cameron",
    "Canton",
    "Carrizo Springs",
    "Carrollton",
    "Cedar Hill",
    "Cedar Park",
    "Centerville",
    "Channelview",
    "Childress",
    "Christoval",
    "Cisco",
    "Clarendon",
    "Clarksville",
    "Cleburne",
    "Clifton",
    "Clute",
    "Clyde",
    "Collinsville",
    "Colorado City",
    "Columbus",
    "Comanche",
    "Commerce",
    "Comstock",
    "Cooper",
    "Coppell",
    "Copperas Cove",
    "Corpus Christi",
    "Corsicana",
    "Cotulla",
    "Crane",
    "Crockett",
    "Crosby",
    "Cross Plains",
    "Crossroads",
    "Crowell",
    "Crystal City",
    "Cypress",
    "Dallas",
    "De Leon",
    "De Soto",
    "Decatur",
    "Deer Park",
    "Del Rio",
    "Denison",
    "Denton",
    "Devine",
    "Diboll",
    "Dickens",
    "Dickinson",
    "Dilley",
    "Donna",
    "Dublin",
    "Dumas",
    "Duncanville",
    "Eagle Lake",
    "Eagle Pass",
    "Early",
    "Eastland",
    "Eden",
    "Edgewood",
    "Edinburg",
    "Edna",
    "Edom",
    "Egypt",
    "El Campo",
    "Eldorado",
    "Electra",
    "Elgin",
    "Ennis",
    "Escobares",
    "Etoile",
    "Euless",
    "Eustace",
    "Falcon Heights",
    "Falfurrias",
    "Farmers Branch",
    "Flint",
    "Flo",
    "Forest Hill",
    "Forney",
    "Fort Davis",
    "Fort Stockton",
    "Fort Worth",
    "Freeport",
    "Freer",
    "Frisco",
    "Fulton",
    "Gainesville",
    "Galena Park",
    "Galveston",
    "Gatesville",
    "George West",
    "Goliad",
    "Graford",
    "Graham",
    "Granbury",
    "Grand Prairie",
    "Grandview",
    "Grapevine",
    "Gun Barrel City",
    "Hallettsville",
    "Haltom City",
    "Hamilton",
    "Hamlin",
    "Harker Heights",
    "Harlingen",
    "Haskell",
    "Hebbronville",
    "Henrietta",
    "Hidalgo",
    "Hillsboro",
    "Hitchcock",
    "Houston",
  ];

  const tripletsData = [];
  for (let i = 0; i < data.length; i += 3) {
    tripletsData.push({
      city1: data[i],
      city2: data[i + 1],
      city3: data[i + 2],
    });
  }
  const renderItem = ({ item }) => (
    <View style={styles.rowContainer}>
      {item.map((colItem, index) => (
        <View
          key={colItem}
          style={[styles.column, index !== 0 && { marginLeft: columnSpacing }]}
        >
          <Text style={{ color: "white" }}>{colItem}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/ImageBackground.png")}
        style={{
          right: 0,
          bottom: 0,
          flex: 1,
          left: 0,
          top: 0,
        }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Header
            title="Deregulated Areas"
            subTitle="Deregulated areas in Texas let customers pick their electricity provider from many REPs"
          />
          <View style={styles.areacontainer}>
            <Text style={styles.heading}>
              A-Z List of Deregulated Cities in Texas
            </Text>
            <Text style={styles.text}>
              Some of the major cities that are deregulated in Texas are
              Houston, Dallas, Fort Worth, Corpus Christi, Galveston, Waco,
              Lubbock, McAllen, and Abilene. There are over 400 cities and towns
              in Texas that have the power to choose their energy provider. You
              can find a complete list of deregulated cities in Texas
            </Text>
            <View style={styles.divider}></View>
            <FlatList
              data={tripletsData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.cityTripletContainer}>
                  <View
                    style={{
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",
                      width: 100,
                    }}
                  >
                    <Entypo name="dot-single" size={24} color="white" />
                    <Text style={styles.cityText}>{item.city1}</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",

                      width: 100,
                    }}
                  >
                    <Entypo name="dot-single" size={24} color="white" />
                    <Text style={styles.cityText}>{item.city2}</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",
                      width: 100,
                    }}
                  >
                    <Entypo name="dot-single" size={24} color="white" />
                    <Text style={styles.cityText}>{item.city3}</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View></View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default DeregulatedAreas;

const styles = StyleSheet.create({
  container: {
    paddingTop: wp(15),
    flex: 1,
  },
  areacontainer: {
    borderWidth: 1,
    borderColor: "#607A8C",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 25,
    marginTop: 50,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
    marginBottom: 10,
    color: "#069FF8",
  },
  text: {
    marginBottom: 5,
    color: "#B6B6B6",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  divider: {
    height: 1.5,
    backgroundColor: "#607A8C",
    marginTop: 15,
    marginBottom: 14,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  column: {
    padding: 10,
    width: 80,
  },
  cityTripletContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 3,
    paddingHorizontal: 0,
  },
  cityText: {
    flex: 1,
    textAlign: "left",
    color: "white",
  },
});
