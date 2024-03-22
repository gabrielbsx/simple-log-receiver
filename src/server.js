const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post('/logging', (request, response) => {
  console.log(request.body);

  return response.json({
    ok: true,
  });
});

app.listen(7000, () => {
  console.log('Server started on port 7000!');
});

