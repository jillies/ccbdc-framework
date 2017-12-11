Grid
======

Grids are used to lay out other components (one or many) within a set grid. Grids available are:

**Size 1 of 1 (100% full grid)**
```HTML
<div class="grid--container">
	<div class="grid--column">
		<small>Size 1 of 1 = 100%</small>
	</div>
</div>
```
**Size 1 of 2 (50% full grid)**
```HTML
<div class="grid--container column--halves">
	<div class="grid--column">
		<small>Size 1 of 2 = 50%</small>
	</div>
	<div class="grid--column">
		<small>Size 1 of 2 = 50%</small>
	</div>
</div>
```
**Size 1 of 3 (33.3% full grid)**
```HTML
<div class="grid--container column--onethirds">
	<div class="grid--column">
		<small>Size 1 of 3 = 33.3%</small>
	</div>
	<div class="grid--column">
		<small>Size 1 of 3 = 33.3%</small>
	</div>
	<div class="grid--column">
		<small>Size 1 of 3 = 33.3%</small>
	</div>
</div>
```
**Size 1 of 4 (25% full grid)**
```HTML
<div class="grid--container column--quarters">
	<div class="grid--column">
		<small>Size 1 of 4 = 25%</small>
	</div>
	<div class="grid--column">
		<small>Size 1 of 4 = 25%</small>
	</div>
	<div class="grid--column">
		<small>Size 1 of 4 = 25%</small>
	</div>
	<div class="grid--column">
		<small>Size 1 of 4 = 25%</small>
	</div>
</div>
```
**Thirds (66.7% and 33.3%)**
```HTML
<div class="grid--container column--thirds">
	<div class="grid--column">
		<small>Size 1 of 2 = 66.7%</small>
	</div>
	<div class="grid--column">
		<small>Size 1 of 2 = 33.3%</small>
	</div>
</div>
```
**Fourths (75% and 25%)**
```HTML
<div class="grid--container column--fourths">
	<div class="grid--column">
		<small>Size 1 of 2 = 75%</small>
	</div>
	<div class="grid--column">
		<small>Size 1 of 2 = 25%</small>
	</div>
</div>
```

### Grid options

To use any of these options, just add onto the .grid--container class and it should work. Multiple class should also work if required.


**Gutters (.with--gutter class)**

All grids have no gutters by default, however if gutters can be added with the .with--gutter class.
```HTML
<div class="grid--container with--gutter">
	<div class="grid--column">
		<small>Size 1 of 1 = 100%</small>
	</div>
</div>
```


**Maintain grids in mobile (.retain--column class)**

Columns will automatically turn into a single column in mobile, but by adding .retain--column, the size of each column will maintain in mobile widths.
```HTML
<div class="grid--container column--halves retain--column">
	<div class="grid--column">
		<small>Size 1 of 2 = 50%</small>
	</div>
	<div class="grid--column">
		<small>Size 1 of 2 = 50%</small>
	</div>
</div>
```


**Sidebar column appears first (.sidebar--first class)**

By default, all grids will have the content column first, then the sidebar, however if it needs to be reversed, just add the .sidebar--first class.
```HTML
<div class="grid--container column--thirds sidebar--first">
	<div class="grid--column">
		<small>Size 1 of 2 = 33.3%</small>
	</div>
	<div class="grid--column">
		<small>second Size 1 of 2 = 66.7%</small>
	</div>
</div>
```


**Right column appears first in mobile only (.right--columnfirst class)**

Although this will not be often, in the instance where the sidebar appears on the right in desktop but in mobile appears first as a full column, then use .right--columnfirst.
```HTML
<div class="grid--container column--halves right--columnfirst">
	<div class="grid--column">
		<small>Size 1 of 2 = 50%</small>
	</div>
	<div class="grid--column">
		<small>second Size 1 of 2 = 50%</small>
	</div>
</div>
```