const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(cors())

mongoose.connect('mongodb+srv://aul:123qwerty@learngrahql-hirkr.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  
})



app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("now listening port 4000");
});

