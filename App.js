import React from "react";
import { StyleSheet,View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/MainNavigation/Navigation";
import store from "./src/Store/store";


const App=()=>{
return(
    <Provider store={store}>
    <View style={styles.container}>

         <Navigation/>
    </View> 
    </Provider> 
)
}

const styles = StyleSheet.create({
    container:{flex:1}
})
export default App