// main.js
const {app, BrowserWindow, Menu, Tray} = require('electron')
const path = require('path')

let appIcon = null
Menu.setApplicationMenu(false)

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    resizable: false,
    webPreferences: {
    }
  })
  mainWindow.loadFile('index.html')
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