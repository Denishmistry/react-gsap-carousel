import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  /******************* 
  @purpose : Rander HTML/ React Components
  @Author : INIC
  ******************/
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="assets/images/favicon.ico"
          ></link>
          <link
            rel="apple-touch-icon-precomposed"
            href="assets/images/apple-touch-icon.png"
          ></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        </Head>
        <body>
          <script
            async
            defer
            dangerouslySetInnerHTML={{
              __html: `
            var list = [
              'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css',
              'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css',
            ];
            for (var i=0; i<list.length;i++) {
              var myCSS = document.createElement( "link" );
              myCSS.rel = "stylesheet";
              myCSS.href = list[i];
              document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
            }
            `,
            }}
          ></script>
          <Main />
          <NextScript />
          <style jsx global>{`

            #__next {
              height: 100%;
            }
          `}</style>

<script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
<script> Splitting(); </script>
        </body>
      </Html>
    );
  }
}
