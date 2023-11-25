import { createTheme } from '@mui/material';


export default createTheme({
	palette: {
		primary: {
			main: "#6594e8",
		},
		secondary: {
			main: "#E4C560",
		},
		background: {
			default: "#ffffff",
		},
	},
	typography: {
		fontFamily: 'Montserrat Variable',
		allVariants: {
			color: "#000",
			whiteSpace: "pre-line",
		}
	}
});