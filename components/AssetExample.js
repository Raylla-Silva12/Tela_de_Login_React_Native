import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, text, number, Button} from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../img/fofo.jpg')} />
      <Text style={styles.paragraph}>
        Coelho
      </Text>

      <TextInput
        style={styles.input}
        value={text}
        placeholder="Usuário"
      />
      <TextInput
        style={styles.input}
        value={number}
        placeholder="Senha"
      />

      <Text style={styles.espaco}></Text>

      <Button title="Entrar" color='#841584'/>

        <Text style={styles.espaco}></Text>

      <Button title="Cadastrar" color='#841584'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    borderColor: '#000',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  espaco: {
    marginBottom: 10,
  },
  logo: {
    height: 138,
    width: 138,
  },
});
