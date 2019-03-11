const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose')


const app = express();

mongoose.connect('mongodb+srv://aul:<123>@learngrahql-hirkr.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
  
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening port 4000");
});

