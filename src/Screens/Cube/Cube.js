// import {View, Text, StyleSheet, Image} from 'react-native';
// import React from 'react';
// import imagePath from '../../constants/imagePath';
// const Cube = () => {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.face, styles.frontFace]}>
//         <Image style={{width: 100, height: 160}} source={imagePath.icWeather} />
//       </View>
//       <View style={[styles.face, styles.backFace]}>
//         <Image style={{width: 100, height: 160}} source={imagePath.icback} />
//       </View>
//       <View style={[styles.face, styles.leftFace]}>
//         <Image style={{width: 100, height: 160}} source={imagePath.icbanner1} />
//       </View>
//       <View style={[styles.face, styles.rightFace]} />
//       <View style={[styles.face, styles.topFace]} />
//       <View style={[styles.face, styles.bottomFace]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: 200,
//     height: 200,
//     transformStyle: 'preserve-3d',
//     perspective: 1000,
//   },
//   face: {
//     position: 'absolute',
//     width: 200,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     opacity: 0.8,
//   },
//   frontFace: {
//     // backgroundColor: 'yellow',
//     transform: [{rotateY: '30deg'}, {translateX: 100}, {translateY: 100}],
//   },
//   backFace: {
//     // backgroundColor: 'green',
//     transform: [{rotateY: '-30deg'}, {translateX: 0}, {translateY: 100}],
//   },
//   leftFace: {
//     // backgroundColor: 'yellow',
//     transform: [{rotateY: '-90deg'}, {translateX: -100}, {translateY: 0}],
//   },
//   rightFace: {
//     // backgroundColor: 'yellow',
//     transform: [{rotateY: '90deg'}, {translateX: 100}, {translateY: 0}],
//   },
//   topFace: {
//     // backgroundColor: 'orange',
//     transform: [{rotateX: '-60deg'}, {translateY: -100}, {translateX: 0}],
//   },
//   bottomFace: {
//     // backgroundColor: 'purple',
//     transform: [{rotateX: '90deg'}, {translateY: 100}, {translateX: 0}],
//   },
// });

// export default Cube;
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Canvas,
  Group,
  Image,
  useImage,
  Skia,
  center,
  rotate,
} from '@shopify/react-native-skia';
// create a component
const Cube = () => {
  const image = useImage(
    'https://i.scdn.co/image/ab67616d0000b2733a5bc065989932c556d13103',
  );
  const leftstar = Skia.Path.MakeFromSVGString(
    'M 0 0 L 100 30 L 100 151 L 0 120 Z',
  );
  const Rightstar = Skia.Path.MakeFromSVGString(
    'M 0 30 L 100 0 L 100 120 L 0 151 Z',
  );
  const Topstar = Skia.Path.MakeFromSVGString(
    'M 0 90 L 97  0 L 198 70 L 0 130 Z', //    'M 0 80 L 99  0 L 198 70 L 0 130 Z',
  );
  return (
    <>
      <Canvas
        style={{
          flex: 1,
          marginTop: 100,
          backgroundColor: 'red',
        }}>
        <Group
          transform={[{translateY: 120}, {translateX: 80}]}
          clip={leftstar}>
          <Image
            image={image}
            x={0}
            y={0}
            width={100}
            height={151}
            fit="cover"
          />
        </Group>
        <Group
          transform={[{translateY: 120}, {translateX: 180}]}
          clip={Rightstar}>
          <Image
            image={image}
            x={0}
            y={0}
            width={100}
            height={151}
            fit="cover"
          />
        </Group>
        <Group
          transform={[{rotate: 0}, {translateY: 50}, {translateX: 83}]}
          clip={Topstar}>
          <Image
            image={image}
            x={0}
            y={0}
            width={198}
            height={100}
            fit="cover"
          />
        </Group>
      </Canvas>
    </>
  );
};

//make this component available to the app
export default Cube;
