import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
  textSize: number;
  title: String;
  additionalStyle?: ViewStyle;
}

const DefaultButton = ({additionalStyle, onPress, textSize, title}: Props) => {
  return (
    <TouchableOpacity style={[styles.mainContainer, additionalStyle]} onPress={onPress}>
      <Text style={{fontSize: textSize}}>{title}</Text>
    </TouchableOpacity>
  );
};
DefaultButton.defaultProp = {
  additionalStyle: {},
  textSize: 14,
};

export default DefaultButton;
