import React from 'react';
import { Image, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';

const Details = () => {
  const route = useRoute();
  const showDetails = route.params?.showDetails || {};
  const img = showDetails.image?.medium || null; // Use the actual path to your image

  if (!img) {
    return (
      <View>
        <Text>No Image Available</Text>
      </View>
    );
  }

  return (

    <ScrollView style={{ backgroundColor: '#000' }} contentContainerStyle={{ paddingBottom: 700 }}>
      <View style={{}}>
        <Image
          source={{ uri: img }}
          style={{
            width: 400,
            height: 450,
            alignSelf: 'center',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            
          }}
        />
      </View>
      <View style={{ top: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>{showDetails.name}</Text>
      </View>

      <View style={{}}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 17, top: 20, right: 90 }}>language:- {showDetails.language}.</Text>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 17, top: 23, right: 70 }}>premiered:- {showDetails.premiered}.</Text>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 17, top: 25, right: 82 }}>Ended:- {showDetails.ended}.</Text>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 17, top: 27, right: 115 }}>Rating:- {showDetails.rating.average}.</Text>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 17, top: 27, right:75 }}>Country:- {showDetails.network.country.name}.</Text>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 17, top: 30, right:123 }}>code:- {showDetails.network.country.code}.</Text>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 17, top: 35, right:45 }}>timezone:- {showDetails.network.country.timezone}.</Text>

      </View>

      <View style={{top:50,marginLeft:10,marginRight:10}}>
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, top: 27,  }}>Summary</Text>

      <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, top: 65, position:"absolute" }}> {showDetails.summary}.</Text>

      </View>
    </ScrollView>


  );
};

export default Details;
