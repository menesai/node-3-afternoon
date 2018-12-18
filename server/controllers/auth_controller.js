const users = require('../models/users');
let id = 1;

module.exports ={
    login: (req, res, next) => {
        const { session } = req;
        const { username, password }= req.body;

        const user = user.find( user => user.username === username && user.password === password)

    },
    register: (req, res, next) =>{
        const { session } = req;
        const { username, password } = req.body;

        username.push({ id, username, password });
        id++;

        session.user.username = username;
        res.status(200).send( session.user );
    },
    signout: (req, res, next) =>{
        const { session } = req;
        session.destroy();
        res.status(200).send(session);
    },
    getUser: (req, res, next) => {
        const { session } = req;
        session.destroy();
        res.status(200).send(session)
    }
}