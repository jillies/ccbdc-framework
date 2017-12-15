Feedback Messages
======

Feedback messages can be used independently into any container - all you'll need to do is to use a span to contain it and it will react as expected.

If you have a specific location to place it you will need to wrap it and manage it there instead of directly on the feedback messages.

A feedback message contains an icon (from [Material Design](https://material.io/icons/)), a title, and text to describe the message. 

There are 5 different types of messages, and a default if no type is specified. Use with a class to change the badge type and colours.
* default (no class required, used as a general feedback message)
* information (a blue message used for general feedback message)
* success (a green message used for success-related messages)
* warning (a yellow message used for warning-related messages)
* error (an orange message used for error-related messages)

```HTML
<div class="feedback--message">
	<div class="feedback--icon">
		<i class="material-icons">block</i>
	</div>
	<div class="feedback--text">
		<small><strong>Account status</strong></small>
		<small class="font--smaller">Something terrible happened. Let's see if this fixes it.</small>
	</div>
</div>
```

Feedback messages can also be dismissable - to use this option, just add a .with--close class to .feedback--message, and a close button:
```HTML
<div class="feedback--message with--close">
	<div class="feedback--icon">
		<i class="material-icons">error_outline</i>
	</div>
	<div class="feedback--text">
		<small><strong>Account status</strong></small>
		<small class="font--smaller">No type declaration defaults to an info style.</small>
	</div>
	<div class="feedback--close">
		<a href="javascript:void(0);"><i class="material-icons">close</i></a>
	</div>
</div>
```