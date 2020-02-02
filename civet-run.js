const yargs = require('yargs')
const path = require('path')
const fs = require('fs')

let arg = yargs.argv._[0]
let command = arg.toLowerCase()
let projectName = yargs.argv._[1]

if(command == "create:service")
{
	if(projectName){
		fs.readFile(path.resolve('core_automation/Controller.js'), (err, data) => {
		  // if (err) throw err;
		  fs.writeFile(path.resolve('controllers/'+yargs.argv._[1]+'Controller'+'.js'),data.toString(),err => {
		  	 if(err) console.log(err)
		  })
		})

		fs.readFile(path.resolve('core_automation/Model.js'), (err, data) => {
		  // if (err) throw err;
		  fs.writeFile(path.resolve('models/'+yargs.argv._[1]+'Model'+'.js'),data.toString(),err => {
		  	 if(err) console.log(err)
		  })
		})

		fs.readFile(path.resolve('core_automation/Route.js'), (err, data) => {
		  // if (err) throw err;
		  fs.writeFile(path.resolve('router/web/'+yargs.argv._[1]+'Routes'+'.js'),data.toString(),err => {
		  	 if(err) console.log(err)
		  })
		})

		console.log(`You can now use your ${yargs.argv._[1]} service to your app`)
	}else{
		console.log(`Service name is undefined`)
	}
}
else
{
	console.log('command not found!')
}

