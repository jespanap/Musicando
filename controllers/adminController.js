const path = require('path');

const controller = {
    getAdmin: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/admin.html'));
        res.render("admin");
    },

    getAdminCreate: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/admin-create.html'));
        res.render("admin-create");
    },

    postCancion: (req, res) => {


        res.redirect('/admin');
    },  

    getAdminEdit: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/admin-edit.html'));
        res.render("admin-edit");
    },
}

module.exports = controller;