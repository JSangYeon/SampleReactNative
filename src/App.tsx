/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/stores'; // store 파일 경로로 수정해주세요
import Screen1 from './screens/Screen1'; // Screen1 파일 경로로 수정해주세요
import Screen2 from './screens/Screen2'; // Screen2 파일 경로로 수정해주세요
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './stack/AppNavigator';
import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
	title: string;
}>;

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;
