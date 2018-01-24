<?php

$title = "Navigation (Hotlink) | CCBDC Framework";
include("includes/head.php");
?>
<div class="brand--hotlink">
<?php include("includes/navigation-hotlink.php"); ?>
<?php include("includes/search.php"); ?>

<div class="content--container">

	<?php include("includes/components/grid.php"); ?>
	<?php include("includes/components/feedback-message.php"); ?>
	<?php include("includes/components/button.php"); ?>
	<?php include("includes/components/input.php"); ?>

</div>
<?php include("includes/components/top-up.php"); ?>
<?php 
$brand = "hotlink";
include("includes/footer-thin.php") ; ?>
</div>
<?php include("includes/foot.php") ; ?>