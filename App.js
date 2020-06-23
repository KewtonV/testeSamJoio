/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const itens = [
  {
    id: 1,
    nome: 'Fulano 1',
    sobrenome: 'beltrano 1',
    idade: 13,
  },
  {
    id: 2,
    nome: 'Fulano 2',
    sobrenome: 'beltrano 2',
    idade: 16,
  },
  {
    id: 3,
    nome: 'Fulano 3',
    sobrenome: 'beltrano 3',
    idade: 27,
  },
  {
    id: 4,
    nome: 'Fulano 4',
    sobrenome: 'beltrano 4',
    idade: 24,
  },
  {
    id: 5,
    nome: 'Fulano 5',
    sobrenome: 'beltrano 5',
    idade: 28,
  },
];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Lista</Text>
              <FlatList
                data={itens}
                renderItem={({item}) => (
                  <Text>{`${item.nome} - ${item.sobrenome} - ${
                    item.idade
                  } `}</Text>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
