Buttons
======

There are multiple types of buttons that can be used on its own and in other components as part of the button.

All buttons are full width in mobile, but will resize to the length of the text tablet onwards. If the button length needs to be the length of the text in mobile, please refer to the documentation below.

The classes introduced for buttons can all be mixed and matched so feel free to combine them to make a button that you will need.

Buttons can only be used with ```<input>```, ```<a>``` or ```<button>```.

## Normal Button


### Button sizes


3 different button sizes - small (.button--small), regular (.button--regular) and large (.button--large). Manage it with different classes to tweak the sizes of the font.

These classes are the base for all buttons, so pick a size and one of these classes must be used.

```HTML
<input type="submit" class="button--small" value="Small" />

<a href="#" class="button--regular">Regular</a> 

<button type="submit" class="button--large">Large</button>
```


### Types of buttons

Outline (.outline) with a border instead of a background.
```HTML
<a href="#" class="button--regular outline">Outline</a>
```

Disabled buttons, only for ```<input>``` and ```<button>```
```HTML
<input type="submit" class="button--regular" value="Disabled" disabled /> 
```

Disabled outlined buttons, only for ```<input>``` and ```<button>```
```HTML
<button type="submit" class="button--regular outline"  disabled>Disabled Outline</button>
```


### Button colours

Default button colours will be grey, but adding a class will change the colour based on the brand.

Primary color (.primary)
```HTML
<input type="submit" class="button--regular primary" value="Primary" /> 
```

Primary outline color (.primary, .outline)
```HTML
<input type="submit" class="button--regular primary outline" value="Primary" /> 
```

Secondary color (.secondary)
```HTML
<input type="submit" class="button--regular secondary" value="Secondary" /> 
```

Secondary outline color (.secondary, .outline)
```HTML
<input type="submit" class="button--regular secondary outline" value="Secondary" /> 
```

Warning color (.warning)
```HTML
<input type="submit" class="button--regular warning" value="Warning" /> 
```

Warning outline color (.warning, .outline)
```HTML
<input type="submit" class="button--regular warning outline" value="Warning" /> 
```

Alert color (.alert)
```HTML
<input type="submit" class="button--regular alert" value="Alert" /> 
```

Alert outline color (.alert, .outline)
```HTML
<input type="submit" class="button--regular alert outline" value="Alert" /> 
```

### Maintain the size of button in mobile instead of 100% (.inline-width) 
```HTML
<a href="#" class="button--regular inline-width">Regular</a> 
```


## Button with description

This button is in capital and has small subtext underneath. Using all previous classes is possible - outline (.outline), disabled (.disabled), primary (.primary) and secondary (.secondary).
```HTML
<a href="#" class="button--description">Solid<br />
	<span>Subtext here</span></a> 
```

## Button with icon and text

This button has an icon, title, subtitle and an arrow. It can be aligned left (.left) or right and using all previous classes is possible - outline (.outline), primary (.primary) and secondary (.secondary).

### Button arrow pointing to the right
```HTML
<a href="#" class="button--icontext primary">
	<div class="button--icontext-wrap">
		<div class="button--icontext-icon">
			<i class="material-icons">layers</i>
		</div>
		<div class="button--icontext-text">
			<h6>Button text</h6>
			<small class="font--smaller">Button subtext</small>
		</div>
		<div class="button--icontext-arrow">
			<i class="material-icons">keyboard_arrow_right</i>
		</div>
	</div>
</a>
```

### Button arrow pointing to the left
```HTML
<a href="#" class="button--icontext secondary left">
	<div class="button--icontext-wrap">
		<div class="button--icontext-icon">
			<i class="material-icons">layers</i>
		</div>
		<div class="button--icontext-text">
			<h6>Button text</h6>
			<small class="font--smaller">Button subtext</small>
		</div>
		<div class="button--icontext-arrow">
			<i class="material-icons">keyboard_arrow_left</i>
		</div>
	</div>
</a>
```
