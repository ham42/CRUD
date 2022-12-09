const User = require('../models/userModel')

exports.registerUser = async(req, res) => {
    const {name, email, password} = req.body;

    await User.sync();
    const user = await User.create({ name, email, password });
    
    res.status(201).json({success: true, user})
}


exports.updateUser = async(req, res) => {
    const {id, name, email} = req.body;
    
    await User.update({name:name, email:email});

    res.status(202).json({success: true})
}


exports.getAllUsers = async(req, res) => {

    const users = await User.findAll();

    res.status(200).json({success: true, users})
}


exports.deleteUser = async(req, res) => {

    const user = await User.destroy({ id });

    res.status(200).json({success: true})
}