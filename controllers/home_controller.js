// import collection
const Task = require('../models/task')

 
let colors = {
    personal: 'rgb(4, 4, 161)',
    work: 'rgb(96, 3, 96)',

    school: '#f9be02',

    other: '#f53240'

}

// to render home page from server
module.exports.home = function(req, res){

    Task.find({},function(err,tasks){
        if(err){
            console.log(`error in fetching tasks from db:${err}`);
            return;
        }
        return res.render('home',{
            task_list: tasks,
            color_list: colors
        });
       
    });

    
}