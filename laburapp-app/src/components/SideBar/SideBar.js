// import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  PermissionsAndroid,
} from 'react-native';

// import Geocoder from 'react-native-geocoder';

// import components
// import { ModalSwitchUserType } from 'components/common/ModalSwitchUserType';
// import { showNotificationModal } from '../../redux/reducers/notificationsModalRedux';
// import {
//   deleteToken as deleteNotificationToken
// } from 'utils/notifications.js';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { signout, edit, setLocation } from '../../redux/reducers/authRedux.js';

// import * as Actions from '../redux/actions';
// import images from 'utils/images';
// import { getProfileImgUri } from 'utils/users';
// import colors from 'utils/colors';

// create a component
class SideBar extends Component {
  constructor(props) {
    super(props);
    // this.state = {

    // };

    // this.handleLogout = this.handleLogout.bind(this);
    // this.goToSettingsPage = this.goToSettingsPage.bind(this);
  }

  // handleLogout = () => {
  //   // this.setState({"showAlert" : true});
  //   const { signout } = this.props;
  //   // TODO: consider to move `deleteNotificationToken` into redux signout function.
  //   // look for others function calls
  //   deleteNotificationToken();
  //   signout();
  // };

  // goToMyProfile = () => {
  //   this.props.navigation.navigate('MyUserProfileScreen');
  //   this.props.navigation.closeDrawer();
  // }

  // getProfileImageSource = () => {
  //   const { userInfo } = this.props;
  //   const profileImagePath = userInfo.is_driver
  //     ? getProfileImgUri(userInfo.driverProfileImg)
  //     : getProfileImgUri(userInfo.profileImg);
  //   return {
  //     uri: profileImagePath,
  //   };
  // }

  // initializeGeolocation = async () => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     this.props.setLocation({ coords: position.coords });
  //     this.getCurrentLocation(position);
  //   }, (err) => {
  //     this.props.setLocation({ coords: null });
  //     console.log(err);
  //   }, geolocationOptions);
  // }



  render() {
    // const { userInfo } = this.props;

    // if (!userInfo) {
    //   return <View style={styles.container} />;
    // }

    // const userFullName = `${userInfo.first_name} ${userInfo.last_name}`;
    // const location = this.props.location || {};

    return (
      <Text>COCA</Text>
    //   <SafeAreaView style={styles.container}>
    //     <View style={styles.userinfoContainer}>
    //       <View style={styles.userInfo}>
    //         <Image
    //           source={this.getProfileImageSource()}
    //           style={styles.avatar}
    //           defaultSource={images.avatar_0}
    //         />

    //         <View style={styles.contact}>
    //           <Text style={styles.contactName}>
    //             {userFullName}
    //           </Text>
    //         </View>
    //       </View>
    //       <View style={styles.userLocation}>
    //         {isCurrentLocationValid ? (
    //           <>
    //             <Text style={styles.locationCaption}>Your Location</Text>
    //             <Text style={styles.locationLabel}>{location.currentLocality},
    //               {location.currentState}, {location.currentCountry}
    //             </Text>
    //           </>
    //         ) : (
    //           <TouchableOpacity
    //             onPress={this.goToPermissionLocation}
    //           >
    //             <Text style={styles.locationCaption}></Text>
    //             <Text style={styles.locationLabel}>{notLocationMessage}</Text>
    //           </TouchableOpacity>
    //         )}
    //         <TouchableOpacity
    //           onPress={this.goToSettingsPage}
    //           style={styles.settingIcon}
    //         >
    //           <Image
    //             source={images.sidebarIconSetting}
    //             style={styles.settingIcon}
    //           />
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //     <ScrollView style={styles.menuContainer}>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.goToHome}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconHome} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Home</Text>
    //         </>
    //       </TouchableHighlight>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.onPressNotifications}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconNotification} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Notifications</Text>
    //         </>
    //       </TouchableHighlight>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.goToMessages}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconMessages} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Messages</Text>
    //         </>
    //       </TouchableHighlight>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.goToMyShiments(userInfo)}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image
    //             source={images.sidebarLightIconMyShipment}
    //             style={styles.menuIcon}
    //           />
    //           <Text style={styles.menuLabel}>My Shipments</Text>
    //         </>
    //       </TouchableHighlight>
    //       <CustomSeparator title='MY SHOP'/>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.onPressWatching}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconWatching} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Watching</Text>
    //         </>
    //       </TouchableHighlight>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.onPressPurchases}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconPurchases} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Purchases</Text>
    //         </>
    //       </TouchableHighlight>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.onPressSelling}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconSelling} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Selling</Text>
    //         </>
    //       </TouchableHighlight>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={() => this.goToEComEarnings()}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image
    //             source={images.sidebarLightIconEarnings}
    //             style={styles.menuIcon}
    //           />
    //           <Text style={styles.menuLabel}>Earnings</Text>
    //         </>
    //       </TouchableHighlight>
    //       <CustomSeparator/>
    //       {!userInfo.is_driver ? (
    //         <TouchableHighlight
    //           style={styles.menuItem}
    //           onPress={this.goToPayments}
    //           underlayColor={colors.menuHighlight}
    //         >
    //           <>
    //             <Image
    //               source={images.sidebarLightIconPayments}
    //               style={styles.menuIcon}
    //             />
    //             <Text style={styles.menuLabel}>Payments</Text>
    //           </>
    //         </TouchableHighlight>
    //       ) : (
    //         <TouchableHighlight
    //           style={styles.menuItem}
    //           onPress={this.goToEarnings}
    //           underlayColor={colors.menuHighlight}
    //         >
    //           <>
    //             <Image
    //               source={images.sidebarLightIconPayments}
    //               style={styles.menuIcon}
    //             />
    //             <Text style={styles.menuLabel}>Driver Earnings</Text>
    //           </>
    //         </TouchableHighlight>
    //       )}

    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.onPressMethodsSettings}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconPaymentsOptions} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Payments Options</Text>
    //         </>
    //       </TouchableHighlight>

    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={() => this.setState({ isModalSwitchVisible: true })}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image
    //             source={
    //               userInfo.is_driver
    //                 ? images.sidebarLightIconDriverPartner
    //                 : images.sidebarLightIconDriverPartner
    //             }
    //             style={styles.menuIcon}
    //           />
    //           <Text style={styles.menuLabel}>
    //             {userInfo.is_driver ? 'Sender' : 'Driving Partner'}
    //           </Text>
    //         </>
    //       </TouchableHighlight>
    //       <CustomSeparator/>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.goToSettingsPage}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconSettings} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Settings</Text>
    //         </>
    //       </TouchableHighlight>
    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.helpService}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconHelp} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Help</Text>
    //         </>
    //       </TouchableHighlight>

    //       <TouchableHighlight
    //         style={styles.menuItem}
    //         onPress={this.handleLogout.bind(this)}
    //         underlayColor={colors.menuHighlight}
    //       >
    //         <>
    //           <Image source={images.sidebarLightIconLogout} style={styles.menuIcon} />
    //           <Text style={styles.menuLabel}>Logout</Text>
    //         </>
    //       </TouchableHighlight>
    //     </ScrollView>
    //     <ModalSwitchUserType
    //       user={userInfo}
    //       toggleModalSwitch={this.toggleModalSwitch}
    //       isModalSwitchVisible={this.state.isModalSwitchVisible}
    //       edit={this.props.edit}
    //       goToSignupDriver={() =>
    //         this.props.navigation.navigate('SignupDriverScreen', {
    //           isFromSideBar: true
    //         })
    //       }
    //       goToHome={this.goToHome}
    //       isSideBar={true}
    //     />
    //   </SafeAreaView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.themePrimary
//   },
//   userinfoContainer: {
//     backgroundColor: '#712a8c',
//     flexDirection: 'column',
//     paddingTop: 20
//   },
//   userInfo: {
//     marginTop: 20,
//     marginLeft: 20,
//     marginBottom: 10,
//     flexDirection: 'row'
//   },
//   contact: {
//     flex: 1,
//     marginLeft: 10,
//     flexDirection: 'column'
//   },
//   contactName: {
//     width: '95%',
//     flexWrap: 'wrap',
//     color: '#ffffff',
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   contactEmail: {
//     color: '#ffffff',
//     fontSize: 14
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     borderWidth: 3,
//     borderColor: '#ffffff'
//   },
//   userLocation: {
//     marginTop: 10,
//     marginLeft: 20,
//     marginBottom: 5,
//     flexDirection: 'column'
//   },
//   locationCaption: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   locationLabel: {
//     color: '#ffffff',
//     fontSize: 12
//   },
//   menuContainer: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     flexDirection: 'column',
//     paddingTop: 10,
//   },
//   menuItem: {
//     height: 65,
//     paddingTop: 5,
//     paddingBottom: 5,
//     flexDirection: 'row',
//   },
//   menuIcon: {
//     marginLeft: 20,
//     marginTop: 10,
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//   },
//   settingIcon: {
//     width: 40,
//     height: 40,
//     paddingBottom: 20,
//     right: 0,
//     position: 'absolute'
//   },
//   menuLabel: {
//     marginLeft: 20,
//     paddingTop: 5,
//     color: '#213b58',
//     fontSize: 22,
//     justifyContent: 'center'
//   }
// });

const mapStateToProps = state => ({
  // userInfo: state.auth.user,
  // location: state.auth.location
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // signout,
      // edit,
      // showNotificationModal,
      // setLocation,
    },
    dispatch
  );

// make this component available to the app
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);