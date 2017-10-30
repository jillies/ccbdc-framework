<?php

$title = "CCBDC Framework";
include("includes/head.php");
?>

<div class="content--container">
	<h4><strong>Headers</strong></h4>
	<p>Navigations are interchangable when required - the ability to use the normal standard navigations, Expand panel and dropdowns. You can use these all together or separated.</p>
	<p>Colours and backgrounds are managed by using the .brand--name div wrapping the entire HTML:
		<code>
			<div class="brand--maxis">
				<!-- Content //-->
			</div>
		</code>
	</p>
	<ul>
		<li><a href="navigation-full.php">Full Navigation with an expand (Maxis)</a></li>
		<li><a href="navigation-dropdown.php">Navigation with dropdown (Maxis)</a></li>
		<li><a href="navigation-hotlink.php">Full Navigation with an expand (Hotlink)</a></li>
	</ul>

</div>
<?php include("includes/foot.php") ; ?>