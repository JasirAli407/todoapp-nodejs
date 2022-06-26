
const Task = require("../models/task");

// to create a todo task
module.exports.createTask = function (req, res) {
  console.log(req.body);

  let newDate;  
  
  // if date is empty

  // if(req.body.due_date.length == '0'){ OR
    if(req.body.due_date == '' ){
    newDate = 'No Deadline';
  }
  // if date is not empty
  else{
    // for changing the date to a customised format

    let temp = req.body.due_date;
  let date =   temp.substring(8,10);
  let mon = temp.substring(5,7);
  let year = temp.substring(0,4);
  
  if(date[0] == '0'){
    // date = date.substring(1)  OR
    date = date[1];
  }
  if(mon[0] == '0'){
    mon = mon[1];
  }

    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY','JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV','DEC'];

    newDate = ' ' + months[mon-1] + ' ' + date + ' ' + year;
}
  
// to create a task and store in database
  Task.create(
    {
      description: req.body.description,

      category: req.body.category,

      due_date: newDate
    },
    function (err, newTask) {
      if (err) {
        console.log(`error in creating task ${err}`);
      }

      console.log("*******", newTask);

      return res.redirect("back");
    }
  );
};

// to delete  task
module.exports.deleteTask = function (req, res) {
  console.log(req.body);
  let id = req.body.id;
  console.log(id);
    
  // if user doesn't select any task
  if (id == undefined) {
    console.log(`user have not selected any task to delete`);

    return res.redirect("back");
  }

  // if(Array.isArray(id)){
  //     for(let i of id){

  //         Task.findByIdAndDelete(i, err=>{
  //                 if(err){
  //                     console.log(`error in deleting object from db${err}`);
  //                     return;
  //                 }

  //             });
  //     }
  //     res.redirect('back');
  // }

  // if user selects a single task
  else if (typeof id ==
    'string') {
    Task.findByIdAndDelete(id, (err) => {
      if (err) {
        console.log(`error in deleting object from db${err}`);
        return;
      }

      return res.redirect("back");
    });

    // if user selects multiple task
  } else{

    for (let i of id) {
      Task.findByIdAndDelete(i, (err)=> {
        if (err) {
          console.log(`error in deleting object from db${err}`);
          return;
        }
      });
    }
    return res.redirect("back");
  }
};
