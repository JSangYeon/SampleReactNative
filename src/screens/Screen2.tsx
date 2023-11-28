// Screen2.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Screen2NavigationProp } from 'stack/AppNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/stores/store'; // rootReducer가 있는 파일 경로로 수정해주세요
import { SafeAreaView } from 'react-native-safe-area-context';

type Screen2Props = {
  navigation: Screen2NavigationProp;
};


  /** 이동용 둘째 뷰 */
const Screen2 = ({ navigation } :Screen2Props) => {
  const counter = useSelector((state: RootState) => state.counter);

  useEffect(() => {
    // 여기에서 counter 값을 사용하여 필요한 작업을 수행합니다.
  }, [counter]);

  return (
    <SafeAreaView>
      <Text style= {styles.blueText}>Counter from Screen1: {counter}</Text>

      <Text style= {styles.blueText}>Screen 2</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
	blueText: {
		color: 'blue',
		fontSize: 16,
		fontWeight: 'bold',
	},})

export default Screen2;
