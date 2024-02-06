import React, { useRef, useState } from 'react';
import { View, PanResponder, Animated, StyleSheet, Dimensions, Text } from 'react-native';

const DraggableShape = () => {
  const [pan, setPan] = useState(new Animated.ValueXY());
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gesture) => {
        // Handle release logic here
        Animated.spring(pan,
          {
            toValue:{x:0,y:0}, 
            useNativeDriver: false
          }
        ).start();
      },
    })
  ).current;

  return (
    <View style={styles.draggableContainer}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.circle]}
      />
      <Text style={styles.text}>Drag me!</Text>
    </View>
  );
};

let CIRCLE_RADIUS = 62;
let Window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shape: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  dropZone: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    marginTop: 20,
  },
  text: {
    marginTop   : 25,
    marginLeft  : 5,
    marginRight : 5,
    textAlign   : 'center',
    color       : '#fff'
},
draggableContainer: {
    position    : 'absolute',
    top         : 100,
    left        : 150,
},
circle: {
  backgroundColor     : '#1abc9c',
  width               : CIRCLE_RADIUS*2,
  height              : CIRCLE_RADIUS*2,
  borderRadius        : CIRCLE_RADIUS
}
});

export default DraggableShape;
