import React, {useState, useRef} from 'react';
import {View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import imagePath from '../../constants/imagePath';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    url: imagePath.icbanner1,
  },
  {
    id: 2,
    url:  imagePath.icbanner2,
  },
  {
    id: 3,
    url:  imagePath.icbanner3,
  },
];

const renderItem = ({item}) => {
  return (
    <View
      style={{
        // borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image source={item.url} style={{width: 300, height: 600,borderRadius:40}} />
    </View>
  );
};

const Carouseldesign = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{marginVertical: 10}}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      {/* <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#F4BB41',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
    </View>
  );
};

export default Carouseldesign;
