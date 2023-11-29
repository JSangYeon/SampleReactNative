// Screen1.tsx
import React from 'react';
import { Screen1NavigationProp } from '../stack/AppNavigator';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/stores/store'; // rootReducer가 있는 파일 경로로 수정해주세요
import { incrementCounter } from '../redux/actions'; // 액션 파일 경로로 수정해주세요
import { SafeAreaView } from 'react-native-safe-area-context';

type Screen1Props = {
	navigation: Screen1NavigationProp;
};

/** 이동용 첫째 뷰 */
const Screen1 = ({ navigation }: Screen1Props) => {
	const dispatch = useDispatch();
	const counter = useSelector((state: RootState) => state.counter);

	const handleIncrement = () => {
		console.log('dispatch increment');
		dispatch(incrementCounter());
	};

	return (
		<SafeAreaView>
			<View>
				<Text style={styles.blueText}>Counter: {counter}</Text>
				<Button title="Increment" onPress={handleIncrement} />
				<Text style={styles.blueText}>Screen 1</Text>
				<Button title="Go to Screen 2" onPress={() => {
          console.log('move to screen2')
          navigation.navigate('Screen2')}
      } />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	blueText: {
		color: 'blue',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default Screen1;
