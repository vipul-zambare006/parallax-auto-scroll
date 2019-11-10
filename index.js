jQuery(document).ready(function($) {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    window.location.href = "index-mobile.html";
  } else {
    var $win = $(window);
    var $log = $("#log");
    var $view = $(".view");
    var $content = $view.find(".content");
    var images = 100;
    var width = (images / 4) * 102;

    imageNumberURLMap = {
      "1": "http://entice.bbem.in/about-us/",
      "2": "http://entice.bbem.in/about-us/",
      "3": "http://entice.bbem.in/about-us/",
      "4": "http://entice.bbem.in/about-us/",
      "5": "http://entice.bbem.in/about-us/",
      "6": "http://entice.bbem.in/about-us/",
      "7": "http://entice.bbem.in/about-us/",
      "8": "http://entice.bbem.in/contact-us/",
      "9": "http://entice.bbem.in/contact-us/",
      "10": "http://entice.bbem.in/contact-us/",
      "11": "http://entice.bbem.in/contact-us/",
      "12": "http://entice.bbem.in/contact-us/",
      "13": "http://entice.bbem.in/contact-us/",
      "14": "http://entice.bbem.in/contact-us/",
      "15": "http://entice.bbem.in/contact-us/",
      "16": "http://entice.bbem.in/contact-us/",
      "17": "http://entice.bbem.in/contact-us/",
      "18": "http://entice.bbem.in/contact-us/",
      "19": "http://entice.bbem.in/contact-us/",
      "20": "http://entice.bbem.in/contact-us/",
      "21": "http://entice.bbem.in/contact-us/",
      "22": "http://entice.bbem.in/contact-us/",
      "23": "http://entice.bbem.in/contact-us/",
      "24": "http://entice.bbem.in/contact-us/",
      "25": "http://entice.bbem.in/contact-us/",
      "26": "http://entice.bbem.in/contact-us/",
      "27": "http://entice.bbem.in/contact-us/",
      "28": "http://entice.bbem.in/contact-us/",
      "29": "http://entice.bbem.in/contact-us/",
      "30": "http://entice.bbem.in/contact-us/",
      "31": "http://entice.bbem.in/contact-us/",
      "32": "http://entice.bbem.in/contact-us/"
    };

    $content.width(width - 60);

    // console.log($content);

    $view.css({
      height: $win.height(),
      width: "60%" //MAKE IT 60% to before deploy
    });

    for (var i = 1; i < 33; i += 1) {
      let imagePath = `http://entice.bbem.in/wp-content/themes/Divi/images/${i}.jpg`;
      let imgClass = "";

      var $image = $("<img>", {
        src: imagePath,
        class: imgClass
      });

      var productLink = imageNumberURLMap[i.toString()];

      var anchorTag = $("<a></a>")
        .attr("id", i)
        .attr("href", productLink)
        .attr("target", "_black");

      anchorTag.appendTo($content);
      $image.appendTo(anchorTag);
    }

    $view.on("mousemove", function(event) {
      var $this = $(this);
      var parentOffset = $this.parent().offset();
      var mouseX = event.pageX - parentOffset.left;
      var mouseY = event.pageY - parentOffset.top;

      // console.log("mouse x", mouseX);
      // console.log("mouseY", mouseY);

      $log.text(mouseX + ", " + mouseY);

      var viewRangeX = $this.width();
      var viewRangeY = $this.height();

      // console.log("viewRange X:", viewRangeX);
      // console.log("viewRange Y:", viewRangeY);

      var contentRangeX = $content.outerWidth(true);
      var contentRangeY = $content.outerHeight(true);

      // console.log("contentRange X:", contentRangeX);
      // console.log("contentRange Y:", contentRangeY);

      var ratioX = contentRangeX / viewRangeX;
      var ratioY = contentRangeY / viewRangeY;
      var offsetX = mouseX * ratioX - mouseX;
      var offsetY = mouseY * ratioY - mouseY;

      // console.log("offsetX", offsetX);
      // console.log("offsetY", offsetY);

      $content.css({
        transform:
          "translate(" +
          offsetX * -0.56 +
          "px" +
          ", " +
          offsetY * -1.04 +
          "px" +
          ")"
      });
    });
  }
});
