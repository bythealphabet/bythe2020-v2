export default (markup, css, helmet) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <!-- Meta Tag -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- SEO -->
    <meta name="author" content="bythealphabet.com" />
   <link rel="icon" 
      type="image/png" 
      href="https://bythe-market.s3.amazonaws.com/default-logo.svg">
     ${helmet.title ? helmet.title.toString() : ""} 
  </head>
  <body>
    <div id="root">${markup}</div>
    <style id="server-side-styles">${[...css].join("")}</style>
    <script type="text/javascript" src="/dist/bundle.js"></script>
  </body>
</html>`;
};
