import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const TextInputDemo = () => {
    const [userName, SetUserName] = useState("");
    const [dispNm,setDispNm] = useState("");
    return (
        <View style={styles.container}>
            {/* <Text>Name:TextInputDemo</Text>
      <TextInput style={styles.input}></TextInput>
      <Text>Password:TextInputDemo</Text>
      <TextInput style={styles.input}></TextInput> */}
            <TextInput style={styles.input} onChangeText={SetUserName}></TextInput>
            <Pressable style={styles.press} onPress={()=>setDispNm(userName)}>
                <Text style={{ color: "white" }}>Submit</Text>
            </Pressable>
            <Text>UserName is: {dispNm} </Text>
        </View>
    )
}

export default TextInputDemo

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        width: 150,
        marginVertical: 30,
        borderWidth: 5,
        borderColor: "red",
    },
    press: {
        backgroundColor: "green",
        padding: 20,
        textAlign: "center",
    }
})