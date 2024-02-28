document.addEventListener(
  "deviceready",
  function () {
    // add handler for button with id "sendIntent"
    document.getElementById("sendIntent").addEventListener(
      "click",
      function () {
        // Define the fake scan data
        var fakeScanData = "1234567890"; // Example barcode data
        var intent = {
          action: "de.meko.scan.plugin.intent.ACTION",
          category: ["android.intent.category.DEFAULT"],
          extras: {
            "com.symbol.datawedge.data_string": fakeScanData,
            "com.symbol.datawedge.source": "scanner",
            "com.symbol.datawedge.label_type": "CODE_128",
          },
        };
        console.log("Sending fake scan");

        window.plugins.intentShim.startActivity(
          intent,
          function () {
            console.log("Fake scan sent successfully");
          },
          function () {
            console.log("Error sending fake scan");
          }
        );
      },
      false
    );
  },
  false
);
