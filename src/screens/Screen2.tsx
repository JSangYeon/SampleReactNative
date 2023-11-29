// Screen2.tsx
import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Screen2NavigationProp } from 'stack/AppNavigator'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/stores/store' // rootReducer가 있는 파일 경로로 수정해주세요
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCounter, add, subtract } from '../hooks/useCounter'

type Screen2Props = {
	navigation: Screen2NavigationProp
}

/** 이동용 둘째 뷰 */
const Screen2 = ({ navigation }: Screen2Props) => {
	const counter = useSelector((state: RootState) => state.counter)

	const { count, increment, decrement } = useCounter()
	useEffect(() => {
		// 여기에서 counter 값을 사용하여 필요한 작업을 수행합니다.
	}, [counter])

	return (
		<SafeAreaView>
			<Text style={styles.blueText}>Counter from Screen1: {counter}</Text>

			<Text style={styles.blueText}>Screen 2</Text>
			<Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />

			<Text style={styles.blueText}>useCounter Test count : {count}</Text>
			<Button title="Increment" onPress={increment} />
			<Button title="decrement" onPress={decrement} />
			<Button title="testAdd" onPress={() => console.log(add(5, 3))} />
			<Button title="testAdd" onPress={() => console.log(subtract(5, 3))} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	blueText: {
		color: 'blue',
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default Screen2
