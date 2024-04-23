import React from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";

const atms = [
  {
    id: "1",
    nome: "Luanda",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "2",
    nome: "Belas",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "3",
    nome: "Cacuaco",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "4",
    nome: "Cazenga",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "5",
    nome: "Icolo e Bengo",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
];

const provincias = [
  {
    id: "1",
    nome: "Luanda",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "2",
    nome: "Bengo",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "3",
    nome: "Benguela",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "4",
    nome: "Bié",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "5",
    nome: "Cabinda",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "6",
    nome: "Cuando Cubango",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "7",
    nome: "Cuanza Norte",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "8",
    nome: "Cuanza Sul",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "9",
    nome: "Cunene",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "10",
    nome: "Huambo",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "11",
    nome: "Huíla",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "12",
    nome: "Malanje",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "13",
    nome: "Namibe",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "14",
    nome: "Moxico",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "15",
    nome: "Uíge",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
  {
    id: "16",
    nome: "Zaire",
    imagem: require("../../assets/images/atm-infector-fb.png"),
  },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>

      

      <View>
        <View style={styles.provinceLuanda}>
          <Text style={styles.nameProvinceLuanda}>
            {" "}
            <Text style={styles.atmText}>ATM</Text> - Provincia de Luanda
          </Text>
        </View>
        <FlatList
          data={atms}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.imagem} style={styles.imagem} />
              <Text style={styles.nomeAtm}>{item.nome}</Text>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

      <View>
        <View style={styles.provinceLuanda}>
          <Text style={styles.nameProvinceLuanda}>
            {" "}
            <Text style={styles.atmText}>ATMs</Text> - Outras Provincias
          </Text>
        </View>
        <FlatList
          data={provincias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.imagem} style={styles.imagem} />
              <Text style={styles.nomeAtm}>{item.nome}</Text>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 16,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 40,
    alignItems: "center",
  },
  nomeAtm: {
    fontSize: 12,
    marginTop: 8,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  flatListContent: {
    alignItems: "flex-start",
  },
  provinceLuanda: {},
  nameProvinceLuanda: {
    color: "#000",
    fontSize: 13,
  },
  atmText: {
    color: "#0E7B46",
    fontSize: 15,
  },
});
