import React from 'react';
import { StyleSheet, FlatList, Text, View, Image } from 'react-native';

const atms = [
  { id: '1', nome: 'Luanda', imagem: require('../../assets/images/atm-infector-fb.png') },
  { id: '2', nome: 'Belas', imagem: require('../../assets/images/atm-infector-fb.png') },
  { id: '3', nome: 'Cacuaco', imagem: require('../../assets/images/atm-infector-fb.png') },
  { id: '4', nome: 'Cazenga', imagem: require('../../assets/images/atm-infector-fb.png')},
  { id: '5', nome: 'Icolo e Bengo', imagem: require('../../assets/images/atm-infector-fb.png') },

];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 16,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 40,
    alignItems: 'center',
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
    alignItems: 'flex-start',
  },
});
