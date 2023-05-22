import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useRef} from 'react';
import DynamicHeader from '../../Components/DynamicHeader';
import {Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function DynamicScroll() {
  const DATA = [
    {
      id: 1,
      title: 'Modern JS: A curated collection',
    },
    {
      id: 2,
      title: 'JavaScript notes for professionals',
    },
    {
      id: 3,
      title: 'JavaScript: The Good Parts',
    },
    {
      id: 4,
      title: 'JavaScript: The right way',
    },
    {
      id: 5,
      title: 'Exploring ES6',
    },
    {
      id: 6,
      title: 'JavaScript Enlightenment',
    },
    {
      id: 7,
      title: 'You dont know JS',
    },
    {
      id: 8,
      title: 'Learn JavaScript',
    },
    {
      id: 9,
      title: 'JavaScript succintly',
    },
    {
      id: 10,
      title: 'Human JavaScript',
    },
    {
      id: 11,
      title: 'JavaScript design patterns',
    },
    {
      id: 12,
      title: 'JS50: 50 illustrations in JS',
    },
    {
      id: 13,
      title: 'Eloqent JavaScript',
    },
    {
      id: 14,
      title: 'Practical ES6',
    },
    {
      id: 15,
      title: 'Speaking JavaScript',
    },
  ];
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <DynamicHeader animHeaderValue={scrollOffsetY}/>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}>
        {DATA.map(book => {
          return (
            <Text style={styles.scrollText} key={book.id}>
              {book.title}
            </Text>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 0,
  },
  scrollText: {
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000',
  },
});
