import React, { useEffect, useState } from "react";
import { View, StyleSheet , Text , SafeAreaView, FlatList } from "react-native";
import Article from "../components/Article";
import axios from "axios";


const HomeScreen = (navigation) => {
    console.log("Showing news in the order of Newest First")
    const [articles,setArticles] = useState([]);

    //Using the AXIOS to fetch news
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3ff5ce77d87f44d497eebcc5c0249ed1',{
            params:{
                category: "technology",
                country: "in",
                sortBy:"publishedAt"
            }
        })
            .then( (response) =>{
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

   useEffect( ()=>{

        getNews();


   }, []
   );

   return(
    <SafeAreaView style={styles.container}>
        <FlatList
            data={articles}
            renderItem = {({item}) =>
                <Article
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description = {item.description}
                    author = {item.author}
                    publishedAt = {item.publishedAt}
                    sourceName = {item.source.name}
                    url={item.url}
                />}
            keyExtractor = {(item) => item.title}
        />

    </SafeAreaView>
)



}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
        

    }
})