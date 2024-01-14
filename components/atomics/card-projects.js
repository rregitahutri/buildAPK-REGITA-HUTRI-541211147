import React from 'react';
import {
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { Card } from 'react-native-paper';

const CardProjects = ({ image, projectTitle, category }) => {
  return (
    <Card style={{ margin: 4 }}>
      <Card.Cover source={image} />
      <Card.Actions style={styles.action}>
        <View>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>
            {projectTitle}
          </Text>
          <Text style={styles.text}>{category}</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/ic-right-arrow.png')}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  action: { justifyContent: 'space-between', alignItems: 'center' },
  text: {
    fontSize: 20,
    marginHorizontal: 12,
  },
});

export default CardProjects;
