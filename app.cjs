const express = require('express');
const htmlToPdf = require("html-pdf-node");
const path = require("path");

const app = express();
const port = 3000;

const generatePdf = () => {
  app.use(express.static("dist"));

  const server = app.listen(port, async () => {
    const url = `http://localhost:${port}`;
    const options = {
      format: "A4",
      path: path.resolve(__dirname, "./output/cv-jordi-gomez-devesa.pdf"),
      margin: {
        top: "20px",
        right: "20px",
        bottom: "100px",
        left: "20px",
      },
      printBackground: true,
    };
    const file = { url };

    try {
      await htmlToPdf.generatePdf(file, options);
      server.close();

    } catch (error) {
      console.log(error);

      if (error.errno === -4082) {
        console.error('ERROR: The file is already opened in another program');
      }

      server.close();
    }

  });
}

generatePdf();