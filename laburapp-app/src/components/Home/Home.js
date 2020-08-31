const users = [
  {
     name: 'John Doe',
     description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
     name: 'John Doe',
     description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brysn/121.jpg'
  },
  {
     name: 'John Doe',
     description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brrynn/129.jpg'
  },
  {
     name: 'John Doe',
     description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brywnn/118.jpg'
  },
  {
     name: 'John Doe',
     description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynwwn/148.jpg'
  },
  {
     name: 'John Doe',
     description: 'Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynan/123.jpg'
  },
 ]

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, Divider, Button, Icon, Badge } from 'react-native-elements'

export default class Home extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <View style={styles.container}>
        <Card
          containerStyle={{ padding: 0 }}
        >
          {
            users.map((u, i) => {
              return (
                <>
                <View key={i} style={styles.jobCard}>
                  <Image
                    style={styles.logo}
                    resizeMode="cover"
                    source={{ uri: 'https://api.adorable.io/avatars/285/abott@adorable.png' }}
                  />
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={styles.name}>{u.name}</Text>
                    <Text style={styles.description}>{u.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginRight: 3 }}>
                          <Icon
                            name='map-marker'
                            type='font-awesome'
                            color='black'
                          />
                        </View>
                        <View style={{ flexDirection: 'column', marginRight: 3 }}>
                          <Text style={{ flex: 1, fontSize: 11 }}>Distancia</Text>
                          <Text style={{ flex: 1, fontSize: 12 }}>menos de 1km</Text>
                        </View>
                        <View style={{ flex: 1, marginRight: 9, alignItems: 'flex-end' }}>
                          <Badge
                            value="Plomero"
                            status="primary"
                            containerStyle={{ top: 0 }}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <Divider style={styles.divider} />
                </>
              );
            })
          }
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  jobCard: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    fontSize: 18,
    paddingTop: 5,
  },
  description: {
    flex: 2,
    fontSize: 12,
  },
  logo: {
    width: 130,
    height: 130,
    marginRight: 5,
  },
  divider: {
    height: 8,
    marginTop: 5,
    marginBottom: 5,
  },
})