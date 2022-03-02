
import {React , useState} from 'react';
import { StyleSheet, Text, View , SafeAreaView, TextInput, Button, Alert , TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function App() {
const [data , setData] = useState ({
  username:'',
  password:'',
  check_textInput: false,
  secureTextEntry: true,
  isValidUser: true,
  isValidPassword: true,
})


  const handleInput = (val) => {
    if(val.trim().length != 0){
      setData(
        {
          ... data,
          username: val,
          check_textInput: true,
          isValidUser: true
        }
      )
    } else {
      setData (
        {
          ... data,
          username: val,
          check_textInput: false,
          isValidUser: false
        }
      )
    }
  };
  
  const handleValidUser = (val) => {
    if (val.length >= 4) {
      setData(
        {
          ... data,
          isValidUser: true
        }
      )
    } else {
      setData(
        {
          ... data,
          isValidUser: false
        });
    }
  }

  const handlePasswordChange = (val) => {
    if( val.length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        })
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        })
    }
}

const loginHandle = () => {
  if ( data.username.length == 0 || data.password.length == 0 ) {
    Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
    ]);

} else if ( data.username.length == 4 || data.password.length == 6 ){
    Alert.alert('Username and  password are valid.', [
    ]);
}

}
  return (
    <SafeAreaView>
      
    <View style={styles.container}>
      <Text style={styles.title}
      >Login Form</Text>
      <View>
      <TextInput style={styles.input}
      placeholder="Username"
      onChangeText={(val) => handleInput(val)}
      onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}/>
      {data.check_textInput ?
        <Animatable.View
            animation="bounceIn"
          >
            <Text style={styles.validMsg}>It's valid</Text>
          </Animatable.View>
            :null }
            </View>
            <View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
            </View>
            <View>
          <TextInput style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(val) => handlePasswordChange(val)}
          />
      {data.check_textInput ?
        <Animatable.View
            animation="bounceIn"
          >
            <Text style={styles.validMsg}>It's valid</Text>
          </Animatable.View>
            :null }
          </View>
          <View>
        { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            </View>
      <TouchableOpacity 
       onPress={() => {loginHandle()}}
       style={styles.btn}
       > 
        <Text style={styles.btnText}>
      Login 
      </Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:40,
    padding:80,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:20.
  },
  input:{
    borderWidth: 1,
    width: 200,
    padding: 8,
    margin:8,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
  validMsg: {
    color: 'green',
    fontSize: 14,
  },
  btn:{
    backgroundColor: "black",
    width: 80,
    padding: 8,
    margin:8,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  btnText:{
    color:'white',
    textAlign:'center',
  }
});
