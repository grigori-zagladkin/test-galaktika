import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'

const theme = extendTheme({
	styles: {
		global: () => ({
			body: {
				bg: '#F7F7FD',
				fontFamily: 'Liberation Sans, sans-serif',
			},
		}),
	},
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
)
