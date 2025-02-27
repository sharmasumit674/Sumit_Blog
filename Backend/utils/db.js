import mongoose from 'mongoose'

const connectDb = async ()=>{
  
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected");
    
  } 
  catch (error) {
    console.log(error);
    console.log("Database is not connected");
  }
}

export default connectDb;