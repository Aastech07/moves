import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-virtualized-view';
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Details from './Details';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [shows, setShows] = useState([]);
  const navigation = useNavigation();
  const [datas, setDatas] = useState([]);

  const [loading, setLoading] = useState(true);
  const imageUrl1 = 'https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_FMjpg_UX1000_.jpg';
  const imageUrls = 'https://inkbotdesign.com/wp-content/uploads/2023/08/best-tv-show-logos-logo-design-inspiration.jpg'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View  >
      <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>navigateToDetails(item)}>
        <Image source={{ uri: item.image.medium }} style={{ width: 100, height: 150 }} />
      </TouchableOpacity>
      {/* Add other show details as needed */}
    </View>
  );

  const renderItem1 = ({ item }) => (
    <View  >
      <TouchableOpacity style={{paddingHorizontal:10}}  onPress={()=>navigateToDetails(item)}>
        <Image source={{ uri: item.image.medium }} style={{ width: 100, height: 150 }} />
      </TouchableOpacity>
      {/* Add other show details as needed */}
    </View>
  );

  const renderItem2 = ({ item }) => (
    <View  >
      <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:10,}}  onPress={()=>navigateToDetails(item)}>
        <Image source={{ uri: item.image.medium }} style={{ width: 100, height: 150,borderRadius:15 }} />
      </TouchableOpacity>
      {/* Add other show details as needed */}
    </View>
  );
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}  onPress={()=>navigateToDetails(item)}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }


  const navigateToDetails = (item) => {
    navigation.navigate('Details', { showDetails: item });
  };
  return (
    <ScrollView style={{ backgroundColor: '#000' }}>
      <Details data={datas}/>
      <View style={{}}>
        <Image
          source={{ uri: imageUrl1 }}
          style={{
            width: 400,
            height: 500,
            alignSelf: 'center',
            bottom: 7, borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }} />
      </View>

      <View style={{ flexDirection: 'row', bottom: 450, alignSelf: 'center' }}>
        <Text style={{ color: 'white', }}>Tv Shows</Text>
        <Text style={{ color: 'white', left: 40 }}>Moves</Text>
        <Text style={{ color: 'white', left: 70 }}>My List</Text>
        <Image
          source={{ uri: imageUrls }}
          style={{
            width: 40,
            height: 40, position: "absolute", right: 200, bottom: -10,
            borderRadius: 5
          }} />
      </View>

      <View style={{ bottom: 110, left: 50 }}>
        <Text style={{ color: 'white', fontSize: 30, top: 10, position: 'absolute' }}>+</Text>
        <Text style={{ color: 'white', fontSize: 15, position: 'absolute', top: 40, left: -10, }}>MyList</Text>
      </View>


      <View style={{ bottom: 110, left: 200 }}>
        <TouchableOpacity style={{
                  width: "40%",
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 40,
                  marginBottom: 10,
                left:-85,
                  shadowColor: 'black',
                  shadowOffset: {
                      width: 0,
                      height: 50,
                  },
                  shadowOpacity: 0.8,
                  shadowRadius: 16.00,
                  elevation: 10,
                  position:'absolute',
                  top:responsiveHeight(-2)
        }}>
          <Text style={{ color: 'black' ,fontWeight:'600'}}>▶︎ Play</Text>
        </TouchableOpacity>
      </View>

      <View style={{ bottom: 100, left: 300 }}>
        <Text style={{ color: 'white', fontSize: 30, top: 5, position: 'absolute' }}>ⓘ</Text>
        <Text style={{ color: 'white', fontSize: 15, position: 'absolute', top: 40, }}>Info</Text>
      </View>

      <Text style={{color:'white',left:responsiveWidth(6),top:10,fontWeight:'600'}}>Previews</Text>

      <View style={{ }}>
        <FlatList
        horizontal
        pagingEnabled={true}
          data={shows}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={{top:20,marginBottom:50,marginLeft:10,}}
        />
      </View>

      <Text style={{color:'white',left:responsiveWidth(6),top:10,fontWeight:'600'}}>Popular on Movieflix</Text>
      <View style={{ }}>
        <FlatList
        horizontal
        pagingEnabled={true}
          data={shows}
          keyExtractor={(item) => item.id}
          renderItem={renderItem1}
          style={{top:20,marginBottom:50,marginLeft:10}}
        />
      </View>

      <Text style={{color:'white',left:responsiveWidth(6),top:10,fontWeight:'600'}}>Watch it Again</Text>

      <View style={{ }}>
        <FlatList
        horizontal
        pagingEnabled={true}
          data={shows}
          keyExtractor={(item) => item.id}
          renderItem={renderItem1}
          style={{top:20,marginBottom:50,marginLeft:10}}
        />
      </View>

      <Text style={{color:'white',left:responsiveWidth(6),top:10,fontWeight:'600'}}>Trending Now</Text>
      <View style={{ }}>
        <FlatList
        numColumns={3}
        pagingEnabled={true}
          data={shows}
          keyExtractor={(item) => item.id}
          renderItem={renderItem2}
          style={{top:20,marginBottom:50,marginLeft:10}}
        />
      </View>

    </ScrollView>

  );
};

export default Home;
