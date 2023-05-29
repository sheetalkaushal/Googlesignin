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
  const images = useImage(
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  );

  const leftstar = Skia.Path.MakeFromSVGString(
    'M 0 0 L 100 30 L 100 151 L 0 120 Z',
  );
  const Rightstar = Skia.Path.MakeFromSVGString(
    'M 0 30 L 100 0 L 100 120 L 0 151 Z',
  );
  const Topstar = Skia.Path.MakeFromSVGString(
    'M 99 35 L 0 70 L 100 100 L 201 70 Z',
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
        <Group transform={[{translateY: 50}, {translateX: 80}]} clip={Topstar}>
          <Image
            image={images}
            x={0}
            y={0}
            width={200}
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
