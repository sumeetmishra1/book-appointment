const Users=require('../models/user');
exports.getUsers=async(req,res,next)=>{
    const users= await Users.findAll()
    res.status(200).json({allUsers:users});
}
exports.addUser=async(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const data= await Users.create({
     name:name,
     email:email,
     phone:phone
    })
    res.status(201).json({newUserDetail:data});
 }
exports.deleteUser=async(req,res,next)=>{
    const userid=req.params.userid;
    const user=await Users.findByPk(userid);
     user.destroy();
     res.status(200).json({user:user})

}