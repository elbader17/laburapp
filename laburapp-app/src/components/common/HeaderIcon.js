import React from 'react';
import { Icon } from 'react-native-elements';
import noop from 'lodash/noop';

const HeaderIcon = ({ type, name, color = 'white', onPress = noop }) => {
  return (
    <Icon
      type={type}
      name={name}
      color={color}
      style={styles.optionIcon}
      disabledStyle={styles.optionIconDisabled}
      containerStyle={styles.optionIconContainer}
      underlayColor="rgba(255,255,255,0)"
      onPress={onPress}
    />
  );
};

const styles = {
  optionIconContainer: {
    height: 30,
    width: 50
  },
  optionIconDisabled: {
    backgroundColor: 'transparent'
  },
  optionIcon: {
    height: 30,
    width: 20
  }
};

export { HeaderIcon };
