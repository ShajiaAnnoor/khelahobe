import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image 
} from 'react-native';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import {
	useDispatch,
	useSelector
} from 'react-redux';

import { fetchBlogs } from '../../../redux/complex-actions/blog';
import { getBlogs } from '../../../redux/reducers';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Headline',
    paragraph: 'Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (NSAttributedString on iOS, SpannableString on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect1.'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Headline',
    paragraph: 'Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (NSAttributedString on iOS, SpannableString on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect2.'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Headline',
    paragraph: 'Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (NSAttributedString on iOS, SpannableString on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect3.'
  },
];


 
const Item = ({item, onPress, backgroundColor, textColor}) => {
  const jopu = JSON.parse(item.intro);
  const body = JSON.parse(item.content);
  const res = documentToPlainTextString(item.intro);
  console.log(res);
  console.log(jopu);
  return (
    <TouchableOpacity>
      <View style={styles.ItemContainer}>
        <Image style={styles.image} source={{ uri:item.images[0] }}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.paragraph}>{body.blocks[1].text}</Text>
        {/*<Text style={styles.paragraph}>{jopu.blocks[0].text}</Text>*/}
      </View>
    </TouchableOpacity>
  );
};


const App = () => {

  const dispatch = useDispatch();
    useEffect(
      () => {
              dispatch(
                  fetchBlogs(0, 3)
              );
          
        },
    [
        dispatch,
    ]
)

const blogs = useSelector(
  state => getBlogs(state)
)
  ||
  [];
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

 // const navigation=useNavigation();

//  console.log(blogs);
  console.log("BAbim>>>>>>>>>>>>>>>>>>>>>>>>>BAbim")

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={blogs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
       // extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingBottom:20,
    padding:10
    
  },

  ItemContainer: {
    padding:15,
  },

  image: {
    width:'100%',
    height:200,
    borderRadius:25,
  },

  title: {
    fontSize:20,
    fontWeight:'bold',
    flexDirection:'row',
    paddingTop:10,
    justifyContent:'flex-start',
    fontFamily: "'Roboto Slab', serif",
  },

  paragraph: {
    paddingTop:10,
    fontSize:15,
    fontWeight:'normal',
    fontFamily: "'Roboto Slab', serif",
  },
  
  
});

export default App;