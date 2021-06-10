import '@percy/cypress'
import "cypress-audit/commands";

const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

compareSnapshotCommand({
    capture: 'fullPage'
});