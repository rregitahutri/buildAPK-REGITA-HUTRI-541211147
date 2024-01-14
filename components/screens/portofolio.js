import {
    Text,
    StyleSheet,
    View,
    Image,
    Alert,
    ScrollView,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  
  import React, { useState } from 'react';
  import ButtonPortfolio from '../atomics/btn-portofolio';
  import CustomCard from '../atomics/customCard';
  import CardProjects from '../atomics/card-projects';
  
  const Portofolio = () => {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
  
    const likes = () => {
      setLike(like + 1);
    };
  
    const dislikes = () => {
      setDislike(dislike + 1);
    };
  
    return (
      <ScrollView>
        <View style={styles.aboutMe}>
          <Image
            source={require('../../assets/images/img-rere.png')}
            style={styles.homeImage}
          />
  
          <Text style={[styles.name, { fontSize: 26 }]}>REGITA</Text>
          <Text style={[styles.name, { fontSize: 16 }]}>HUTRI CAHYANINGRUM</Text>
  
          <Text style={styles.desc}>
            People usually call me Rere. I am 17 years old. My hobby is watching
            films, series, kdramas and YouTube vlogs.
          </Text>
  
          <ButtonPortfolio title="Contact Me" />
          <ButtonPortfolio title="Download My CV" mode="secondary" />
        </View>
  
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 32,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            HARD SKILL
          </Text>
        </View>
        <CustomCard
          image={require('../../assets/images/img-react-native.png')}
          title="React Native"
          description="React Native is an exciting framework that enables web developers
                to create robust mobile applications using their existing
                JavaScript knowledge."
        />
        <CustomCard
          backgroundColor="#F875AA"
          image={require('../../assets/images/img-uiux.png')}
          title="UI/UX Design"
          description="UX refers to the user’s journey when interacting with a product or
                service. UI design, on the other hand, refers to the actual
                interfaces with which users engage."
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            MY RECENT PROJECTS
          </Text>
        </View>
        <CardProjects
          image={require('../../assets/images/img-stories.jpg')}
          projectTitle="Fashion Stories"
          category="Typography"
        />
        <CardProjects
          image={require('../../assets/images/img-desain-product.jpg')}
          projectTitle="Donut PAN-PAN"
          category="Design Product"
        />
        <View
          style={{
            backgroundColor: '#E1DCFF',
            alignItems: 'center',
            marginTop: 16,
          }}>
          <Text
            style={{
              fontSize: 25,
              color: '#49417E',
              fontWeight: 'bold',
              marginTop: 30,
              marginBottom: 16,
            }}>
            CONTACT ME
          </Text>
          <TextInput
            style={[styles.form, { height: 40 }]}
            placeholder="Name"
            placeholderTextColor={'grey'}
          />
          <TextInput
            placeholder="Message"
            placeholderTextColor={'grey'}
            numberOfLines={6}
            multiline
            editable
            style={styles.form}
          />
          <ButtonPortfolio title="Send Email" mode="form" />
        </View>
  
        <View
          style={{
            backgroundColor: '#E1DCFF',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#49417E',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 22,
            }}>
            ✨ Rate My Portofolio App 😊💌
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 34,
              marginTop: 12,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 22,
              }}>
              <Text style={styles.textReact}>👍 {like}</Text>
              <TouchableOpacity onPress={likes} style={styles.btnLike}>
                <Text>It's pretty!!</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.textReact}>👎 {dislike}</Text>
              <TouchableOpacity onPress={dislikes} style={styles.btnDislike}>
                <Text>Explore more</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    aboutMe: {
      height: '22%',
      width: '100%',
      alignItems: 'center',
      paddingVertical: 50,
      backgroundColor: '#E1DCFF',
      paddingHorizontal: 10,
    },
    homeImage: {
      width: 200,
      height: 200,
    },
    name: { color: '#F875AA', fontWeight: 'bold' },
    desc: {
      marginHorizontal: 20,
      marginVertical: 12,
      textAlign: 'center',
      color: 'black',
    },
    form: {
      width: '90%',
      marginVertical: 6,
      paddingVertical: 6,
      paddingHorizontal: 16,
      backgroundColor: 'white',
      borderRadius: 6,
      fontSize: 14,
    },
    btnLike: {
      backgroundColor: '#FFBED8',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      borderColor: '#F875AA',
      borderWidth: 1,
    },
    btnDislike: {
      backgroundColor: '#E3E3E3',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      borderColor: '#C3C3C3',
      borderWidth: 1,
    },
    textReact: {
      fontSize: 23,
      padding: 6,
      marginVertical: 6,
    },
  });
  
  export default Portofolio;
  