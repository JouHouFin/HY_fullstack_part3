const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

dbUrl = process.env.MONGODB_URI
mongoose.connect(dbUrl, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  })
.then(result => {    
    console.log('connected to MongoDB')  
})  
.catch((error) => {    
    console.log('error connecting to MongoDB:', error.message)  
})

const personSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  number: { type: String, required: true }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)