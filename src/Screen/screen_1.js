import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native'
import LoadingScreen from '../utils/Loading'
import axios from '../utils/axois'
//import axios from 'axios';

import { screen_1_name, screen_2_name } from '../utils/Tabbarname'

//getting height and width of respective window
const Height = Dimensions.get("window").height
const width = Dimensions.get("window").width



export default function screen_1({ navigation }) {
    const [photos, setphotos] = useState([])
    const [page, setpage] = useState(0)


    function getRequest() {
        setpage(page + 1)

        //let URL = `collections/1580860/photos?clinet_id=sqTE5RX5CnbgQS6vD908FieZegTe71ft_3xDiFI9rSo&page=${page}$per_page=10`

        try {
            axios.get(`https://api.unsplash.com/collections/1580860/photos?client_id=oZ-sUzndO7DzYEZ7NBYXfX5Osm_ytS8SVPX6eUPtFoY`, {
                params: {
                    page: page,
                    per_page: 10,
                    //orientation: "landscape"
                }
            })
                .then(res => {
                    //console.log(res.data.urls.full);
                    let value = res.data.map(item => {
                        return {
                            data: item.urls.thumb,
                            name: item.user.name || "Image"

                        }
                    });
                    let updateItem = photos.concat(value)
                    setphotos(updateItem);
                 
                }).catch(err => {
                    console.log(`Error is ${err}`);
                })
        } catch (Error) {
            console.log(`Error is${Error}`);
        }
    }

    React.useEffect(() => {
        getRequest();

    }, [])
    // console.log(photos);





    function renderData({ item }) {
        console.log(item);
        return (

            <View style={styles.container}  >
                <Image style={styles.image} source={{ uri: item }} />
            </View>

        )
    }

    // console.log(JSON.stringify(photos.length) + " photos");
    return (
        <View style={styles.container}>
            <ScrollView
                style={{ height: "100%", marginTop: 5 }}
                showsVerticalScrollIndicator={false}
            >
                <FlatList
                    numColumns={2}
                    contentContainerStyle={{
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'space-between'

                    }}
                    data={photos}
                    keyExtractor={item => (Math.random() * 2).toString()}
                    renderItem={({ item }) => (
                        <View
                        // style={{
                        //     marginTop: 5,
                        //     borderRadius: 15,
                        //     justifyContent:"space-between",

                        // }}
                        >
                            <Image style={styles.image} source={{ uri: item.data }} />
                            <Text style={styles.name}> {item.name} </Text>
                        </View>
                    )}
                    onEndReached={getRequest}
                    onEndReachedThreshold={0.5}
                    initialNumToRender={10}
                    ListFooterComponent={LoadingScreen}

                />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        width: "100%",
        height: "100%",
        flexDirection: "column"

    },
    image: {
        height: 300,
        width: (width - 20) / 2,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderRadius: 20
    },
    name: {
        margin: 5,
        padding: 5,
        fontSize: 14,

    }


})