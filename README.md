# limitTo
Angular directive that limit input type number to provided length.

Availible options: 
  prevent-e="true" to prevent input numbers like e123;
  prevent-plus="true" to prevent input numbers like +123;
  prevent-minus="true" to prevent input numbers like -123;
  
Example of usage: 

  <input type="number" name="age" limit-to="2" prevent-e="true" prevent-plus="true" prevent-minus="true"/>
