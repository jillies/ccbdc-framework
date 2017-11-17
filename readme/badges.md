###Badges

===

Badges can be used independently into any container - all you'll need to do is to use a span to contain it and it will react as expected.

If you have a specific location to place it you will need to wrap it and manage it there instead of directly on the badge.

There are 4 different types of badges, and a default if no type is specified. Use this as a class to change the badge type and colours.
* default (no class required, used as a general badge)
* information (a blue badge used for general information)
* success (a green badge used for success-related badges)
* warning (a yellow badge used for warning-related badges)
* error (an orange badge used for error-related badges)

```HTML
<span class="badge information">New</span>
```