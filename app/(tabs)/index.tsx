import { useTheme } from '@/hooks/useTheme';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TodosScreen() {
	const { toggleDarkMode } = useTheme();

	return (
		<View style={{ flex: 1 }}>
			<Text>Todos</Text>
			<Text>---------</Text>
			<TouchableOpacity onPress={toggleDarkMode}>
				<Text>Toggle theme</Text>
			</TouchableOpacity>
		</View>
	);
}
