// Iteration #1
require('../db')
const mongoose = require('mongoose')

let DroneModel = require('../models/Drone.model') 

// const drones = [
//     { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
//     { name: "Racer 57", propellers: 4, maxSpeed: 20 },
//     { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
//   ];
  
  DroneModel.insertMany([
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ])
  .then(()=>{
          console.log('Drones inserted in database')
          mongoose.connection.close()
  })
  
  .catch((err)=>{
      console.log('Faillure while inserted drones in database' , err)
      mongoose.connection.close()
  })
