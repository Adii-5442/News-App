import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Button,
    Touchable,
    TouchableOpacity} from 'react-native';
import HomeScreen from './HomeScreen';
  

const Welcome = ({navigation}) => {
    const image = require('../assets/welcome.jpg');
  
    return (
      <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          blurRadius={5}
          style={styles.image}>
          <View style={{flex:1}} >
            <Text style={styles.text1}>
              WELCOME
            </Text>
            <View style={{flex:2}}>
              <Text style={styles.text2}>
                This News App aims to keep you updated with the latest Technology News
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.navigate('HomeScreen')}
              >
                <Text style={{color:"white",
              fontWeight:"bold",
              fontSize:20,
              }}>Let's Begin -></Text>
            </TouchableOpacity>
            <View style={{flex:1}}>
              <Text
              style={styles.text3}>>
                Made By Aditya

              </Text>
            </View>
          </View>

        </ImageBackground>
        
      </View>
    );
}

export default Welcome;

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection:'column',
},
image: {
    flex: 1,
    justifyContent: 'center',
},
button:{
  alignItems: "center",
  backgroundColor: "black",
  padding: 10

},
text1:{fontSize:60,
  fontWeight:'bold',
  fontFamily:'sans-serif-condensed',
  alignSelf:"center",
  marginTop:"20%",
  justifyContent:"center"
  
},
text2:{
  fontSize:30,
  fontWeight:'bold',
  alignSelf:'center',
  marginTop:"10%",
  alignItems:'center',
  justifyContent:'space-between',
  top:"30%"
  
},
text3:{
  fontSize:25,
  fontWeight:'bold',
  alignSelf:'center',
  marginTop:"20%",
  alignItems:'center',
  justifyContent:'space-between'
  
}
});