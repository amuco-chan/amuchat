const { spawn } = require('child_process');
const crypto = require('crypto');

const rand = crypto.randomInt(10000, 99999);
const email = `amuchat_deploy_${rand}@gmail.com`;
const password = `AmuChatPass!123`;
const domain = `amuchat-deploy-${rand}.surge.sh`;

console.log(`Deploying to https://${domain} with ${email}...`);

const surge = spawn('npx', ['surge', './dist', domain]);

surge.stdout.on('data', (data) => {
  const str = data.toString();
  process.stdout.write(str);
  
  if (str.toLowerCase().includes('email:') || str.toLowerCase().includes('login:')) {
    surge.stdin.write(email + '\n');
  } else if (str.toLowerCase().includes('password:')) {
    surge.stdin.write(password + '\n');
  }
});

surge.stderr.on('data', (data) => {
  process.stderr.write(data);
});

surge.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
