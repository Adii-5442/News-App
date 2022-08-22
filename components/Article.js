import React from "react";
import { View, StyleSheet , Text , SafeAreaView , Image , Platform , StatusBar, TextInput} from "react-native";

const Article = (props) => {
    var main_date = (props.publishedAt).substring(0,10)
    return(
        



        
        <View style={styles.container}>
            <Image source = {{
                uri:props.urlToImage
            }}

            style={styles.image}
            />

            <Text style={styles.title}>{props.title}</Text>

            <Text style={styles.date}>{main_date}</Text>
        </View>
    )


}
export default Article;
const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center',
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
        borderRadius:20,
        backgroundColor:"black",


    },
    image:{
        height:200,
        width:"100%",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderWidth:2,
        borderColor:'white',


    },
    title:{
        fontSize:25,
        
        fontWeight:'bold',
        marginTop:10,
        color:'white'
    },
    data:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:10,
            fontWeight:'bold',

    },
    date:{
        color:"red",
        fontWeight:"bold"

    },
    
})