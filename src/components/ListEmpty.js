import { StyleSheet, TouchableOpacity, Text, SafeAreaView, useColorScheme, View, FlatList, TextInput } from 'react-native';
import styles from '../styles/Styles';
import * as Animatable from 'react-native-animatable';

const ListEmpty= () => {
    const anim = {
      0: { translateY: 0 },
      0.5: { translateY: 50 },
      1: { translateY: 0 },
    };
    return (
      <View style={[styles.listEmpty]}>
        <Animatable.Text
          animation={anim}
          easing="ease-in-out"
          duration={3000}
          style={{ fontSize: 24 }}
          iterationCount="infinite">
          Empty List!
        </Animatable.Text>
      </View>
    );
  };

  export default ListEmpty;