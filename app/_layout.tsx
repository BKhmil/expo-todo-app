import { ThemeProvider } from '@/hooks/useTheme';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { Stack } from 'expo-router';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
	unsavedChangesWarning: false,
});

const RootLayout = () => {
	return (
		<ConvexProvider client={convex}>
			<ThemeProvider>
				<Stack>
					<Stack.Screen
						name='(tabs)'
						options={{
							headerShown: false,
						}}
					/>
				</Stack>
			</ThemeProvider>
		</ConvexProvider>
	);
};

export default RootLayout;
