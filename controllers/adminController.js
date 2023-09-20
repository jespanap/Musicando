const path = require('path');

const controller = {
    getAdmin: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/admin.html'));
    },

    getAdminCreate: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/admin-create.html'));
    },

    getAdminEdit: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/admin-edit.html'));
    },
}

module.exports = controller;