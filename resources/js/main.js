const launchBrowser = () => {
    Neutralino.os.execCommand('xdg-open https://ddg.gg &')
  };
const launchMusic = () => {
    Neutralino.os.execCommand('audacious')
};
const launchTelegram = () => {
    Neutralino.os.execCommand('telegram-desktop &') 
};
const launchTask = () => {
    Neutralino.os.execCommand('xterm -e taskwarrior-tui')
};
const launchEmail = () => {
    Neutralino.os.execCommand('thunderbird &')
};
const launchGithub = () => {
    Neutralino.os.execCommand('xdg-open https://github.com &')
};
const launchPacman = () => {
    Neutralino.os.execCommand('xterm -e ~/Work/GIT/BASH_Scripts_For_Everyone/pacman-wrapper-whiptail.sh &')
};

const launchMySites = () => {
    Neutralino.os.execCommand('xdg-open https://tilde.club/~woland/ &')
}

function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.init();

Neutralino.events.on("windowClose", onWindowClose);
