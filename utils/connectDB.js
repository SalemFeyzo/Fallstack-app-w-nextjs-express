const mongoose = require("mongoose")

const connectDB = async (mongoUri) => {
  try {
    const conn = await mongoose.connect(mongoUri)
    console.log(`MongoDB connected on ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
