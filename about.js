const Store = require('electron-store');
const { shell } = require('electron');
const { version } = require('./package.json');

const store = new Store();

/**
 * Open the given link in the system browser
 *
 * @param  {String} link
 */
function openLink(link) {
    shell.openExternal(link);
}

// Set the app version
document.querySelector('#version').innerText = 'v' + version;

// Set youtube-dl's version
document.querySelector('#youtube-dl-version').innerText = 'v' + store.get('youtubeDl.version', '');
