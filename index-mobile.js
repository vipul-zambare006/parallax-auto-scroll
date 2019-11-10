jQuery(document).ready(function($) {
  var $view = $(".view");
  var $content = $view.find(".content");

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

  for (var i = 1; i < 33; i += 1) {
    let imagePath = `http://entice.bbem.in/wp-content/themes/Divi/images/${i}.jpg`;
    let imgClass = "product-img";

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
});
