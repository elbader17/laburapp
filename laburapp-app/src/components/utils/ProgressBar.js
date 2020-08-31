import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class ProgressBar extends Component {
  render() {
    return(
      <View style={styles.progBar}>
        <ProgressSteps
          progressBarColor="gray"
          activeStep={0}
          completedProgressBarColor="rgb(43, 94, 106)"
          activeStepIconBorderColor="rgb(43, 94, 106)"
          completedStepIconColor="rgb(43, 94, 106)"
          disabledStepIconColor="gray"
        >
          <ProgressStep removeBtnRow={true} />
          <ProgressStep removeBtnRow={true} />
          <ProgressStep removeBtnRow={true} />
          <ProgressStep removeBtnRow={true} />
        </ProgressSteps>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  progBar: {
    marginTop: 20,
    flex: 1,
  },
});

export default ProgressBar;