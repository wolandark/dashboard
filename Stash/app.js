const {exec} = require('node:child_process');

const launchTelegram = () => {
  exec('Forkgram &', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const launchBrowser = () => {
  exec('xdg-open https://ddg.gg &', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const launchAudacious = () => {
  exec('audacious &', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const launchThunderbird = () => {
  exec('thunderbird &', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const launchGithub = () => {
  exec(
    'xdg-open https://github.com/wolandark &',
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    },
  );
};

const launchTask = () => {
  exec('xterm -e taskwarrior-tui &', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const launchPacman = () => {
  exec(
    'xterm -e ~/Work/GIT/BASH_Scripts_For_Everyone/pacman-wrapper-whiptail.sh &',
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    },
  );
};

document.getElementById('tlg').addEventListener('click', launchTelegram);
document.getElementById('browser').addEventListener('click', launchBrowser);
document.getElementById('music').addEventListener('click', launchAudacious);
document.getElementById('email').addEventListener('click', launchThunderbird);
document.getElementById('github').addEventListener('click', launchGithub);
document.getElementById('task').addEventListener('click', launchTask);
document.getElementById('pacman').addEventListener('click', launchPacman);
