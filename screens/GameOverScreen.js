import React from 'react';
import { Button, StyleSheet, Image, Text, View } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>GAME OVER</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('../assets/success.png')}
        />
      </View>

      <BodyText>
        Your phone needed{' '}
        <Text style={styles.roundsNumber}>{props.roundsNumber}</Text> rounds to
        guess the number
        <Text style={styles.resultNumber}> {props.userNumber} </Text>
      </BodyText>

      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultNumber: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  roundsNumber: {
    color: Colors.accent,
    fontFamily: 'open-sans-bold',
  },
});
