// create main.js file
// npm init -y
// npm install electron
// add "start":"electron ."

const electron = require("electron");
const ejse = require('ejs-electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; 

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
 
    win.loadFile('index.ejs').then(function(){
        win.maximize();
        win.webContents.openDevTools()
    });
}

app.whenReady().then(createWindow);