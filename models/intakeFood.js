const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const intakeFoodSchema = new mongoose.Schema({
  email:{
      type:String,
      required:true,
      unique:true,
  },
  dateNo:{
          type:Array,
          unique:true,
          required:true,
          date:{
              type:String,
              required:true,
          },
          meal:{
              type:Array,
              meals:{
              type:Object,
              required:true,    
              mealId:{
                  type:String,
                  required:true,
              },
              gram:{
                  type:Number,
                  required:true,
              }
            }
          }

      }
  }

 

,{timestamps: true});

module.exports = mongoose.model("intakeFood",intakeFoodSchema);

