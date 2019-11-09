jQuery(document).ready(function($) {
  var $win = $(window);
  var $log = $("#log");
  var $view = $(".view");
  var $content = $view.find(".content");
  var images = 100;
  var width = (images / 4) * 102;

  imageNumberURLMap = {
    "1": "https://www.facebook.com/",
    "2": "https://www.quora.com/",
    "3": "https://www.twitter.com/",
    "4": "https://www.facebook.com/",
    "5": "https://www.quora.com/",
    "6": "https://www.twitter.com/",
    "7": "https://www.facebook.com/",
    "8": "https://www.quora.com/",
    "9": "https://www.twitter.com/",
    "10": "https://www.facebook.com/",
    "11": "https://www.quora.com/",
    "12": "https://www.twitter.com/",
    "13": "https://www.facebook.com/",
    "14": "https://www.quora.com/",
    "15": "https://www.twitter.com/",
    "16": "https://www.facebook.com/",
    "17": "https://www.quora.com/",
    "18": "https://www.twitter.com/",
    "19": "https://www.facebook.com/",
    "20": "https://www.quora.com/",
    "21": "https://www.quora.com/",
    "22": "https://www.twitter.com/",
    "23": "https://www.facebook.com/",
    "24": "https://www.quora.com/",
    "25": "https://www.twitter.com/",
    "26": "https://www.facebook.com/",
    "27": "https://www.quora.com/",
    "28": "https://www.twitter.com/",
    "29": "https://www.facebook.com/",
    "30": "https://www.quora.com/",
    "31": "https://www.facebook.com/",
    "32": "https://www.quora.com/"
  };

  $content.width(width);

  console.log($content);

  $view.css({
    height: $win.height(),
    width: "60%"
  });

  for (var i = 1; i < 33; i += 1) {
    // let imgNumber = Math.floor(Math.random() * 4) + 1;
    let imagePath = `http://entice.bbem.in/wp-content/themes/Divi/images/${i}.jpg`;
    let imgClass = "";
    // if (i === 6) {
    //   imagePath = `http://entice.bbem.in/wp-content/themes/Divi/images/logo.jpg`;
    //   imgClass = "logo";
    // }

    var $image = $("<img>", {
      src: imagePath,
      click: function() {
        redirectImgURL(i);
      },
      class: imgClass
    });

    $image.appendTo($content);
  }

  $view.on("mousemove", function(event) {
    var $this = $(this);
    var parentOffset = $this.parent().offset();
    var mouseX = event.pageX - parentOffset.left;
    var mouseY = event.pageY - parentOffset.top;

    console.log("mouse x", mouseX);
    console.log("mouseY", mouseY);

    $log.text(mouseX + ", " + mouseY);

    var viewRangeX = $this.width();
    var viewRangeY = $this.height();

    console.log("viewRange X:", viewRangeX);
    console.log("viewRange Y:", viewRangeY);

    var contentRangeX = $content.outerWidth(true);
    var contentRangeY = $content.outerHeight(true);

    console.log("contentRange X:", contentRangeX);
    console.log("contentRange Y:", contentRangeY);

    var ratioX = contentRangeX / viewRangeX;
    var ratioY = contentRangeY / viewRangeY;

    // var differenceX = contentRangeX - viewRangeX;
    // var differenceY = contentRangeY - viewRangeY;

    var offsetX = mouseX * ratioX - mouseX;
    var offsetY = mouseY * ratioY - mouseY;

    console.log("offsetX", offsetX);
    console.log("offsetY", offsetY);

    $content.css({
      transform:
        "translate(" + offsetX * -0.62 + "px" + ", " + offsetY * -1 + "px" + ")"
      // top: (offsetY * -1) + 'px',
      // left: ((offsetX * -1) + 200) + 'px'
    });
  });

  function redirectImgURL(imageNumber) {
    var imageNumberStr = imageNumber.toString();
    window.location.href = imageNumberURLMap[imageNumberStr];
  }
});
