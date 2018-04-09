var Github = require('github-api');
var prompt = require('prompt');
const { spawn } = require('child_process');
prompt.start();

prompt.get(['username','password'],function(err,{ username, password }) {

	//basic auth
	var gh = new Github({
		username,
		password
	});
	var me = gh.getUser();
	me.listRepos(function(err, repos) {
		//look at all starred repos
		console.log(repos);
		repos.map((repo)=>{
			console.log(repo.url);
			const ls = spawn('git', ['clone', repo.clone.url]);

		})
	});
});		
