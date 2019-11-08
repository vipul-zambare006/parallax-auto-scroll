$(function() {
  var $win = $(window);
  var $log = $("#log");
  var $view = $(".view");
  var $content = $view.find(".content");
  var images = 100;
  var width = (images / 4) * 102;

  $content.width(width);

  $view.css({
    height: $win.height()
  });

  for (var i = 0; i < 16; i += 1) {
    let imgNumber = Math.floor(Math.random() * 4) + 1;
    let imagePath = `./assets/${imgNumber}.jpeg`;
    let imgClass = "";
    if (i === 6) {
      imagePath = `./assets/logo.jpeg`;
      imgClass = "logo";
    }

    var $image = $("<img>", {
      src: imagePath,
      class: imgClass
    });

    $image.appendTo($content);
  }

  $view.on("mousemove", function(event) {
    var $this = $(this);
    var parentOffset = $this.parent().offset();
    var mouseX = event.pageX - parentOffset.left;
    var mouseY = event.pageY - parentOffset.top;

    $log.text(mouseX + ", " + mouseY);

    var viewRangeX = $this.width();
    var viewRangeY = $this.height();

    var contentRangeX = $content.outerWidth(true);
    var contentRangeY = $content.outerHeight(true);

    var ratioX = contentRangeX / viewRangeX;
    var ratioY = contentRangeY / viewRangeY;

    // var differenceX = contentRangeX - viewRangeX;
    // var differenceY = contentRangeY - viewRangeY;

    var offsetX = mouseX * ratioX - mouseX;
    var offsetY = mouseY * ratioY - mouseY;

    $content.css({
      transform: "translate(" + offsetX * -0.62 + "px" + ", " + offsetY * -1 + "px" + ")"
      // top: (offsetY * -1) + 'px',
      // left: ((offsetX * -1) + 200) + 'px'
    });
  });
});
