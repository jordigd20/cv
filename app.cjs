const express = require('express');
const htmlToPdf = require("html-pdf-node");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

const template = fs.readFileSync(
  path.resolve(__dirname, "./dist/index.html"),
  "utf8"
);
const content = ejs.render(template, { title: "CV - Jordi Gómez Devesa" });

fs.writeFile(path.resolve(__dirname, "./public/index.html"), content, () => {
  app.use(express.static("dist"));

  const server = app.listen(port, async () => {
    const url = `http://localhost:${port}`;
    const options = {
      format: "A4",
      path: "cv.pdf",
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
});