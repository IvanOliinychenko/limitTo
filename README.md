# limitTo
Angular directive that limit input type number to provided length.

Availible options: <br>
  <strong>prevent-e="true"</strong> to prevent input numbers like e123 <br>
  <strong>prevent-plus="true"</strong> to prevent input numbers like +123 <br>
  <strong>prevent-minus="true"</strong> to prevent input numbers like -123 <br>
  
Example of usage: 
<pre>&lt;input type="number" name="age" limit-to="2" prevent-e="true" prevent-plus="true" prevent-minus="true"/&gt;</pre>
