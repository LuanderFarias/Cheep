// main.js
const {app, BrowserWindow, Menu, Tray} = require('electron')
const path = require('path')
const url = require('url')

let appIcon = null
Menu.setApplicationMenu(false)

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    resizable: false,
    backgroundColor: "#111",
    icon: __dirname + 'sources/icon.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('/scr/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin')
  app.quit()
})