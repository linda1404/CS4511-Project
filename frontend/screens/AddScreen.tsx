import * as React from 'react';
import { StyleSheet, TextInput, Button, Platform, Image } from 'react-native';
import { SearchBar, ButtonGroup, ElementObject } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import { ExpandingTextInput } from '../components/ExpandingTextInput';
import { Text, View } from '../components/Themed';
import * as FileSystem from 'expo-file-system';

export default function AddScreen() {
  const [restaurant, setRestaurant] = React.useState('');
  const [image, setImage] = React.useState<string | null>(null);
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })
      .then((res) => {
        if (res.cancelled) return;
        const filepath = res.uri;
        return FileSystem.readAsStringAsync(filepath, {
          encoding: FileSystem.EncodingType.Base64,
        }).then((base64) => {
          setImage(base64);
        });
      })
      .catch((e) => console.log(e));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Userhandle and Icon goes here</Text>
      </View>
      <View style={styles.restaurantSearch}>
        <Text style={styles.promptText}>Where did you go?</Text>
        <SearchBar
          placeholder={`Restaurant Name`}
          onChangeText={(text) => setRestaurant(text)}
          value={restaurant}
          containerStyle={{
            backgroundColor:
              '#fff' /*Edit according to app theme (background color) */,
          }}
        />
      </View>
      <View style={styles.restaurantSearch}>
        <Text style={styles.promptText}>Where did you go?</Text>
      </View>
      <Button title="Pick an image" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantSearch: {
    paddingHorizontal: 10,
    width: '100%',
  },
  promptText: {
    fontSize: 20,
  },
});
