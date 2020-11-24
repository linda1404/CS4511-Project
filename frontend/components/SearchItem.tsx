import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
interface SearchItemProps {
  id: number;
  name: string;
  location: any;
  img: string;
  rating: string;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  logo: {
    borderRadius: 100,
    width: 66,
    height: 66,
    marginRight: 20,
  },
  subtext: {
    color: 'gray',
  },
  rating: {
    position: 'absolute',
    right: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
export const SearchItem: React.FC<SearchItemProps> = ({
  id,
  location,
  img,
  name,
  rating,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {img ? (
        <Image style={styles.logo} source={{ uri: img }} />
      ) : (
        <Image
          style={styles.logo}
          source={require('../static/images/empty_user.png')}
        />
      )}
      <View>
        <Text style={{ color: 'black' }}>{name}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
          }}
        >
          <Icon
            name="map-pin"
            type="font-awesome-5"
            color="gray"
            size={12}
            iconStyle={{ marginRight: 10 }}
          />
          <Text style={styles.subtext}>{location.locality_verbose}</Text>
        </View>
      </View>
      <View style={styles.rating}>
        {parseInt(rating) !== 0 && (
          <Icon
            name="star"
            type="font-awesome-5"
            size={16}
            iconStyle={{ marginRight: 10 }}
          />
        )}

        <Text>{parseInt(rating) !== 0 && rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface UserItemProps {
  id: number;
  name: string;
  handle: string;
  img: string;
}
export const UserSearchItem: React.FC<UserItemProps> = ({
  id,
  img,
  name,
  handle,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {img ? (
        <Image style={styles.logo} source={{ uri: img }} />
      ) : (
        <Image
          style={styles.logo}
          source={require('../static/images/empty_user.png')}
        />
      )}
      <View>
        <Text style={{ color: 'black' }}>{handle}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
          }}
        >
          <Text style={styles.subtext}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
