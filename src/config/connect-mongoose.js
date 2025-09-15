const mongoose = require("mongoose");
(async () => {
  try {
    console.log("db connected");
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.DATABASE_URL || 'mongodb+srv://abdullah:12345@pixelcluster.zzbjvjd.mongodb.net/solace?retryWrites=true&w=majority');
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
})();
