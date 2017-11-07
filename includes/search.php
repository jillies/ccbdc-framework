<div class="search--container">
	<div class="search--close">
		<a href="javascript:void(0);"><i class="material-icons">close</i></a>
	</div>
	<div class="search--input">
		 <form action="" method="post">
		 	<p><i class="material-icons">search</i>  <input type="search" name="search" id="search" /></p>
		</form>
	</div>
	<div class="search--results">
		<small>52 results found</small>

		<div class="search--results-container">
			<?php include("includes/search/results-1.php"); ?>
			<?php //include("includes/search/results-2.php"); ?>
			<?php //include("includes/search/results-3.php"); ?>
			<?php //include("includes/search/results-4.php"); ?>
		</div>

		<div class="page-load-status">
		  <div class="loader-ellips infinite-scroll-request">
		    loading
		  </div>
		  <p class="infinite-scroll-last">End of content</p>
		  <p class="infinite-scroll-error">No more pages to load</p>
		</div>


	</div>
</div>