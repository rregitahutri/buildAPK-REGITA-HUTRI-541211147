import React from 'react';
import { Text, TouchableOpacity, Alert, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

const CustomCard = ({ image, title, description, backgroundColor }) => {
  return (
    <Card style={[styles.container, backgroundColor && { backgroundColor }]}>
      <Card.Cover source={image} />
      <Card.Title title={title} />
      <Card.Content style={{ padding: 20 }}>
        <Text>{description}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 24,
    backgroundColor: '#69D3F9',
  },
});

export default CustomCard;
