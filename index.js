const chalk = require('chalk')
const copydir = require('copy-dir')
const execSync = require('child_process').execSync
const fs = require('fs')
const resolve = require('path').resolve
const yargs = require('yargs')

yargs
	.usage('Usage $0 [app-name] Creates a react app with redux and material-ui.')
	.demandCommand(1)

const Dirname = yargs.argv._[0]
const Abspath = resolve(Dirname)

const createDirectory = () => {
	if (Abspath === process.cwd()) {
		console.log('Creating boilerplate in current folder...')
		return
	}

	if (fs.existsSync(Dirname)) {
		throw new Error(
			`Directory named ${Dirname} already exists. Choose another name or destination.`
		)
	}

	console.log(`Creating directory ${Dirname}...`)
	fs.mkdirSync(Dirname)
	process.chdir(Dirname)
}

const copyFiles = () => {
	copydir.sync(__dirname + '/files', Abspath, { utimes: true, mode: true })
}

const installPackages = () => {
	console.log(chalk.blue('\nInstalling Packages...'))
	execSync('npm i', { stdio: 'ignore' })
	console.log(chalk.green('\n\nApp created succesfully.'))
	console.log(`Boilerplate is available in ${Dirname}.`)
}

createDirectory()
copyFiles()
installPackages()
