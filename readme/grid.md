Grid
======

Grids are used to lay out other components (one or many) within a set grid. Grids available are:

*Size 1 of 1 (100% full grid)*
```HTML
<div class="grid--container">
	<div class="grid--column">
		<small>Size 1 of 1 = 100%</small>
	</div>
</div>
```

*Size 1 of 2 (50% full grid)*
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

*Size 1 of 3 (33.3% full grid)*
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

*Size 1 of 4 (25% full grid)*
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

*Thirds (66.7% and 33.3%)*
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

*Fourths (75% and 25%)*
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

Options are also available for grids:

*Gutters (no gutters by default, .with--gutter class)*
```HTML
<div class="grid--container with--gutter">
	<div class="grid--column">
		<small>Size 1 of 1 = 100%</small>
	</div>
</div>
```

*Maintain grids in mobile (.retain--column class)*
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

*Sidebar column appears first (.sidebar--first class)*
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

*Right column appears first in mobile only (.right--columnfirst class)*
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