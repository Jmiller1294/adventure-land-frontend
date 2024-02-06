import React, { useRef, useState } from 'react';
import { View, PanResponder, Animated, StyleSheet } from 'react-native';
import DraggableShape from '../../components/DraggableShape';



const DropZone = () => {
  // Implement drop zone logic here

  return <View style={styles.dropZone}></View>;
};

const DragAndDropShapeGame = () => {
  return (
    <View style={styles.container}>
      <DraggableShape style={styles.test}/>
      <DropZone  style={styles.dropCircle}/>
    </View>
  );
};

let CIRCLE_RADIUS = 62;

const styles = StyleSheet.create({
  test: {
    zIndex: 1,
  },
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
    position: 'relative',
    marginTop: 20,
    backgroundColor: 'grey',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    zIndex: 2
  },
  dropZoneContainer: {
      position    : 'absolute',
      top         : 100,
      left        : 150,
  },
  dropCircle: {
    
  }
});

export default DragAndDropShapeGame;
