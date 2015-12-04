module.exports = {
  book: {
    assets: "./book",
    js: [
      "plugin.js"
    ],
    html: {
      "body:end": function() {
        var config = this.options.pluginsConfig.hotjar || {};

        if (!config.hjid) {
          throw "Hotjar: option 'hjid' is required.";
        }

        return "<!-- <!-- Hotjar Tracking Code -->"
          + "(function(h,o,t,j,a,r){"
          + "h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};"
          + "h._hjSettings={hjid:"+config.hjid+",hjsv:5};"
          + "a=o.getElementsByTagName('head')[0];"
          + "r=o.createElement('script');r.async=1;"
          + "r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;"
          + "a.appendChild(r);"
          + "})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');</script>";
      }
    }
  }
};
