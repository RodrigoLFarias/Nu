import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

// Definindo a imagem de fundo com um URI (endereço da imagem na web)
const backgroundImage = { uri: "https://s2.glbimg.com/M9JUg8c-K0ISMzZ4Y5bvvrMY7hE=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/w/G/dwaQC1QXOMXJkSwXTt7w/ultravioleta-07.jpg" };

// Componente principal do aplicativo
export default function App() {
  // Definindo estados para email e senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função chamada ao pressionar o botão de login
  const handleLogin = () => {
    Alert.alert('Login', `Email: ${email}\nPassword: ${password}`);
  };

  // Função chamada ao pressionar o botão de cadastro
  const handleRegister = () => {
    Alert.alert('Cadastro', 'Navegar para a tela de cadastro.');
  };

  return (
    // ImageBackground permite usar uma imagem como plano de fundo
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        {/* ScrollView permite rolar o conteúdo se for maior que a tela */}
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          {/* Texto de boas-vindas */}
          <Text style={styles.texto}>Bem-Vindo ao Nubank</Text>
          
          {/* Input de E-mail */}
          <TextInput
            style={styles.input}
            placeholder="Email:"
            placeholderTextColor="black"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Input de Senha */}
          <TextInput
            style={styles.input}
            placeholder="Senha:"
            placeholderTextColor="black"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Botão de Login */}
          <Button title="Login" onPress={handleLogin} color="#841584" />

          {/* Mensagem de cadastro */}
          <Text style={styles.registerText}>Ainda não é cliente? Cadastre-se.</Text>

          {/* Botão de Cadastrar-se */}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

// Estilos usados no aplicativo
const styles = StyleSheet.create({
  // Estilo para a ImageBackground, ocupa todo o espaço disponível
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem para cobrir toda a área
  },
  // Estilo para a sobreposição semitransparente
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor preta com 50% de opacidade
  },
  // Estilo para o conteúdo dentro do ScrollView
  scrollContainer: {
    flexGrow: 1, // Permite que o conteúdo cresça para ocupar todo o espaço disponível
    justifyContent: 'center', // Centraliza verticalmente o conteúdo
    alignItems: 'center', // Centraliza horizontalmente o conteúdo
    padding: 20, // Adiciona padding para evitar que o conteúdo encoste nas bordas
  },
  // Estilo para o texto de boas-vindas
  texto: {
    fontWeight: 'bold', // Texto em negrito
    color: 'white', // Cor do texto branca
    fontSize: 30, // Tamanho da fonte 30
    marginBottom: 20,
  },
  // Estilo para os inputs
  input: {
    width: '80%', // Largura do input
    height: 40, // Altura do input
    backgroundColor: 'white', // Cor de fundo branca
    borderRadius: 5, // Bordas arredondadas
    paddingHorizontal: 10, // Espaçamento horizontal interno
    marginVertical: 10, // Espaçamento vertical externo
    borderColor: 'black', // Cor da borda preta
    borderWidth: 1, // Largura da borda
  },
  // Estilo para o texto de cadastro
  registerText: {
    color: 'white', // Cor do texto branca
    marginTop: 20, // Margem superior
    marginBottom: 10, // Margem inferior
  },
  // Estilo para o botão de cadastro
  registerButton: {
    backgroundColor: '#841584', // Cor de fundo do botão
    paddingVertical: 10, // Espaçamento vertical interno
    paddingHorizontal: 20, // Espaçamento horizontal interno
    borderRadius: 5, // Bordas arredondadas
    borderColor: 'black', // Cor da borda preta
    borderWidth: 1, // Largura da borda
  },
  // Estilo para o texto do botão de cadastro
  registerButtonText: {
    color: 'white', // Cor do texto branca
    fontWeight: 'bold', // Texto em negrito
  },
});
