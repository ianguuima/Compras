import React, { useState, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, SafeAreaView, View, AsyncStorage, FlatList } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Compra from '../components/Compra'

import { useSelector, useDispatch } from 'react-redux'
import { addToList, showList, clearList, setList } from '../redux/actions/index'

export default function App() {

    
  const [atualValue, setValue] = useState('')

  const lista = useSelector(state => state.list)
  const dispatch = useDispatch()

  function passToAdd(){
    if (atualValue === '') return

    dispatch(addToList(atualValue))
    setValue('')

  }


  return (
    <SafeAreaView>

      <SafeAreaView style={styles.firstContent}>

      <TextInput
        mode="outlined"
        theme={{colors: { primary: '#140E0C'}}}
        style={styles.textInput}
        value={atualValue}
        onChangeText={text => {
          setValue(text)
        }}
      />

      <View style={styles.buttonsView}>
          <Button mode="contained" onPress={passToAdd}>
            Adicionar
          </Button>

          <Button mode="contained" onPress={() => dispatch(clearList())}>
            Limpar Lista
          </Button>
      </View>

      </SafeAreaView>



      <View style={styles.listView}>
        <FlatList

          data={lista}
          keyExtractor={lista => lista.id}
          showsVerticalScrollIndicator={false}
          renderItem={( item ) => (
            <Compra value={item}/>
          )}

        >
        </FlatList>
      </View>
        



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  firstContent: {
    marginTop: 30,
    flex: 1
  },

  textInput: {
    width: 300,
    marginBottom: 5,
  },


  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  listView: {
    marginTop: 30,
    fontWeight: '500',
    flex: 5
  }

});
