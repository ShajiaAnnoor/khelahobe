
import React, { useState, useCallback} from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
const Data =([
  {
    ID:"8wb3hiF20bQ"
  },
  {
    ID:"yKq8FixQk2Q",
   
  },
  {
    ID:"XDVXA4Nuzw4",
  },
  {
    ID:"u9Tce2NEMag",
  },
  {
    ID:"GmIr5fqbLd0"
  },
  {
    ID:"pHgf1dJD45c"
  },

  
])

export default function App() {

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {    
    if (state === "ended") {      
      setPlaying(false);      
      Alert.alert("video has finished playing!");    
    }  
  }, []);
  return (
    <View style={styles.container}>
      <FlatList 
        data={Data}
        style={{width:"100%",flex:1,flexDirection:'column'}}
        keyExtractor={(item, index) => index+""}
        renderItem={({item, index})=> {
          return (
            <View>      
              <YoutubePlayer        
                height={200}        
                play={playing}        
                videoId={item.ID}        
                onChangeState={onStateChange}      
              />  
              <Text style={styles.headline}>Headline</Text>    
            </View> 
          )
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:15,
    margin:2,
    padding:10,
    
  },

  headline: {
    fontSize:20,
    fontWeight:'bold',
    paddingTop:2,
    marginTop:0,
    marginBottom:30,
  }
  

});