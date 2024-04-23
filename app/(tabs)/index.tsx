import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Feather } from "@expo/vector-icons";
import  IconFont  from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");

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

const publicidades = [
  require("../../assets/images/advertising/bca.jpeg"),
  require("../../assets/images/advertising/bca1.jpeg"),
  require("../../assets/images/advertising/keve_3.jpeg"),
  require("../../assets/images/advertising/visa.jpeg"),
];

const handleSearch = (text: string) => {
  console.log("Pesquisando por:", text);
};

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.carousel}>
          <Carousel
            data={publicidades}
            renderItem={({ item }: { item: any }) => (
              <Image source={item} style={styles.publicidadeImage} />
            )}
            sliderWidth={width}
            itemWidth={width}
            loop={true}
            autoplay={true}
            autoplayDelay={2000}
            autoplayInterval={3000}
          />
        </View>

        {/* <View style={styles.searchContainer}>
          <Feather name="search" size={24} color="#A9A9A9" />
          <TextInput
            style={styles.input}
            placeholder="Pesquisar..."
            placeholderTextColor="#A9A9A9"
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View> */}

        <View style={estilos.barraDeBusca}>
          <TouchableOpacity activeOpacity={0.10}>
            <View style={estilos.caixaBotaoBusca}>
              <IconFont name="search" color="#0E7B46" />
            </View>
          </TouchableOpacity>
          <TextInput style={estilos.input}></TextInput>
          <TouchableOpacity activeOpacity={0.6}>
            <View style={estilos.caixaBotaoConfiguracoes}>
              <IconFont name="sliders" color="#0E7B46" size={20} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.provinceLuandaContainer}>
          <View style={styles.provinceLuanda}>
            <Text style={styles.nameProvinceLuanda}>
              {" "}
              <Text style={styles.atmText}>ATMs</Text> - Provincia de Luanda
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

        <View style={styles.provinceOutrasProvinciasContainer}>
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
    </ScrollView>
  );
}


const estilos = StyleSheet.create({
  barraDeBusca: {
    flexDirection: 'row',
    width: width * 0.90,
    height: 35,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 30,
  },
  caixaBotaoBusca: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
  },
  caixaBotaoConfiguracoes: {
    width: 35,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    marginTop: 5,
    borderLeftColor: '#d3cbcb',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    marginHorizontal: 6,
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
    marginTop: 10,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 100,
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
  publicidadeImage: {
    width: width,
    height: 400,
    resizeMode: "cover",
  },
  carousel: {
    alignItems: "center",
    marginBottom: 20,
  },
  provinceLuandaContainer: {
    marginTop: 35,
  },
  provinceOutrasProvinciasContainer: {
    marginTop: 35,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});



