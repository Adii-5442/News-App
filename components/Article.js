import React from "react";
import { View, StyleSheet , Text , SafeAreaView , Image , Platform , StatusBar, TextInput} from "react-native";

const Article = (props) => {

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////// RECENT AGO FUNCTIONALITY /////////////////////////////////////////////////////////
    var main_date =  (props.publishedAt)
    const [year , month , day] = (main_date.substring(0,10)).split('-');
    const[hours,minutes,seconds] = (main_date.substring(11,19)).split(':')
    var currentDate = new Date().toLocaleString()
    var modified_md = new Date(year,month-1,day,hours,minutes,seconds).toLocaleString()
    let msCD = Date.parse(currentDate);
    let msMD = Date.parse(modified_md);
    let difsec = (msCD-msMD)/1000;
    let difminutes = Math.floor(difsec/60)
    let difhours = Math.floor(difminutes/60)
    var dateToShow = "";
    if(difhours>=24){
        dateToShow= (Math.floor(difhours/24)).toString()+" Days ago";
    }
    else if(difhours>1)
    {
        dateToShow = (difhours).toString()+" Hours ago";
    }
    else if(difhours==0 && difminutes>0)
    {
        dateToShow=(difminutes).toString()+" Minutes ago";
    }
    else if(difminutes==0)
    {
        dateToShow=(difsec).toString() + " Seconds ago"

    }

    console.log("Current Date :=>",currentDate,"(",msCD,")"," ","News Feed Date :=>",modified_md,"(",msMD,")"," ","Published :==>",dateToShow)
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return(        
        <View style={styles.container}>
            <Image source = {{
                uri:props.urlToImage
            }}
            style={styles.image}
            />

            <Text style={styles.title}>{props.title}</Text>

            <Text style={styles.date}>{dateToShow}</Text>
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