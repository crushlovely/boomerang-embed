# Boomerang Embed Codes

## Nice and simple.

* * *

Put the following code in the `<head>` of your document.

**IMPORTANT**: Requires jQuery.

### Events

        <script src="/javascripts/jquery-1.2.6.js" type="text/javascript" charset="utf-8"></script>
        <script src="/javascripts/boomerang.js" type="text/javascript" charset="utf-8"></script>
        <script src="http://nygasp.boomerang.local/json/events/67/past" type="text/javascript" charset="utf-8"></script>
        <script type="text/javascript" charset="utf-8">
          $(document).ready(function() {
            $('#events').insertBoomerangEvents(events);
          });
        </script>

### News

        <script src="/javascripts/jquery-1.2.6.js" type="text/javascript" charset="utf-8"></script>
        <script src="/javascripts/boomerang.js" type="text/javascript" charset="utf-8"></script>
        <script src="http://nygasp.boomerang.local/json/news/68" type="text/javascript" charset="utf-8"></script>
        <script type="text/javascript" charset="utf-8">
          $(document).ready(function() {
            $('#news').insertBoomerangNews(news);
          });
        </script>

### Text

        <script src="/javascripts/jquery-1.2.6.js" type="text/javascript" charset="utf-8"></script>
        <script src="/javascripts/boomerang.js" type="text/javascript" charset="utf-8"></script>
        <script src="http://kimscharnberg.boomerang.local/json/text_page/99" type="text/javascript" charset="utf-8"></script>
        <script type="text/javascript" charset="utf-8">
          $(document).ready(function() {
            $('#text_page').insertBoomerangTextPage(text_page);
          });
        </script>

