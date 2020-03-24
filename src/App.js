import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { Provider } from 'react-redux'

import './App.css'
import store from './store'
import { useStyles } from './theme'

const App = () => {
	const classes = useStyles()
	return (
		<Provider store={store}>
			<Paper elevation={0} className={(classes.root, classes.centerizer)}>
				<Typography variant='h1'>Title</Typography>
			</Paper>
		</Provider>
	)
}

export default App
