import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
  title: String;
}

const DefaultButton = ({onPress, title}: Props) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
