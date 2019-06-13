const { app, Menu, Tray } = require('electron')
const path = require('path');

let tray = null
app.on('ready', () => {
  tray = new Tray(path.join(__dirname, 's.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Replicating', type: 'radio' },
  ])
  tray.setToolTip('Replicating all day long...');
  tray.setContextMenu(contextMenu)
})
