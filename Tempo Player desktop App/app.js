const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      //   preload: path.join(__dirname, "preload.js"),
    },
    maximizable: false,
    resizable: false,
    icon: path.join(__dirname, "/public/images/icon.ico"),
    title: "Tempo Player",
  });

  mainWindow.loadFile(path.join(__dirname, "/public/index.html"));
  mainWindow.removeMenu();
  //mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
