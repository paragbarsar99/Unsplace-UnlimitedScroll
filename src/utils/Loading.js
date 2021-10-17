import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

export default function LoadingScreen() {
    return (
        <View>

            <ActivityIndicator
                style={styles.Loading} size="large" color="green"
            >
            </ActivityIndicator>
        </View>
    )
}


const styles = StyleSheet.create({

    Loading: {
        alignSelf: 'center',
        justifyContent: "center",
        marginTop: 300
    }
})