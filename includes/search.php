<div class="search--container">
	<div class="search--close">
		<a href="javascript:void(0);"><i class="material-icons">close</i></a>
	</div>
	<div class="search--input">
		 <form action="" method="post">
		 	<p><input type="search" name="search" id="search" /></p>
		</form>
	</div>
	<div class="search--results">
		<small>52 results found</small>

		<div class="search--results-container">
			<?php include("includes/search/results-0.php"); ?>
		</div>

		<div class="search--results-status">
		  <div class="infinite-scroll-request">
		  	<div class="preloader--container">
		  		Loading...
		  	</div>
		  </div>
		  <div class="infinite-scroll-last">
		  	<small>All results loaded. <a href="javascript:void(0);">Search again?</a></small>
		  </div>
		  <div class="infinite-scroll-error">
		  	<p>Apologies, there seems to be an error!<br />Please try again later.</p>
		  </div>
		</div>


	</div>
</div>