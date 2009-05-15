jQuery.fn.extend({
  insertBoomerangEvents : function(events) {
    if (events) {
      var template = '<div class="entry">\n  <h3>TITLE</h3>\n  <h4 class="date">WHEN</h4>\n  <p>\n    <strong>Where:</strong> LOCATION\n  </p>\nDETAILS\n</div><!-- .entry -->'
      var result = '';
      $(events).each(function(i) {
        var event_template = template;
        result = result + event_template.replace(/TITLE/g, this.title).replace(/WHEN/g, this.when).replace(/DETAILS/g, this.details).replace(/LOCATION/g, this.location);
      });
      $(this).html(result);
    } else {
      $(this).html('<p>Could not load events data!');
    }
  },
  insertBoomerangNews : function(posts) {
    if (posts) {
      var template = '<div class="entry">\n  <h3>TITLE</h3>\n  <h4 class="date">WHEN</h4>\n  <p>\n  </p>\nBODY\n</div><!-- .entry -->'
      var result = '';
      $(posts).each(function(i) {
        var post_template = template;
        result = result + post_template.replace(/TITLE/g, this.title).replace(/WHEN/g, this.date).replace(/BODY/g, this.body);
      });
      $(this).html(result);
    } else {
      $(this).html('<p>Could not load news data!');
    }
  },
  insertBoomerangTextPage : function(text_page) {
    if (text_page) {
      var template = '<h3>TITLE</h3>\nBODY\n'
      $(this).html(template.replace(/TITLE/g, text_page.title).replace(/BODY/g, text_page.body));
    } else {
      $(this).html('<p>Could not load page!');
    }
  }
});
