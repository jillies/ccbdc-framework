# CCBDC-framework

This framework is intended to be used for the new Maxis and Hotlink websites - all generic templates and components will be built and reusable in any way.

Here's a guide on how to use a template or component:

##Templates
###Header

Navigations are interchangable when required - the ability to use the normal standard navigations, expand panel and dropdowns. You can use these all permutations of these or not at all.

Colours and backgrounds are managed by using a .brand--name div that wraps around the entire HTML

```HTML
<div class="brand--maxis">
	Your content here
</div>
```

The sample of all headers below:
[Full Navigation with an expand (Maxis)](navigation-full.php);
[Navigation with dropdown (Maxis)](navigation-dropdown.php);
[Navigation with an expand (Hotlink)](navigation-hotlink.php);

##Components

###Badges
Badges can be used independently into any container - all you'll need to do is to use a span to contain it and it will react as expected.

If you have a specific location to place it you will need to wrap it and manage it there instead of directly on the badge.

There are 4 different types of badges, and a default if no type is specified. Use this as a class to change the badge type and colours.
* default (no class required, used as a general badge)
* information (a blue badge used for general information)
* success (a green badge used for success-related badges)
* warning (a yellow badge used for warning-related badges)
* error (an orange badge used for error-related badges)

```HTML
<span class="badge information">
	New
</span>
```