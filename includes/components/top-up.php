<section class="topup--container">

	<div class="topup--button">
		<a href="javascript:void(0);"><i class="material-icons">add</i></a>
	</div>

	<div class="topup--content">

		<div class="topup--background"></div>

		<div class="topup--form">
			<h3>Top up credits</h3>
			<form action="" method="post">

				<div class="feedback--message warning">
					<div class="feedback--icon">
						<i class="material-icons">block</i>
					</div>
					<div class="feedback--text">
						<small><strong>Account status</strong></small>
						<small class="font--smaller">Something terrible happened. Let's see if this fixes it.</small>
					</div>
				</div>

			 	<p class="no--margin">Select an amount to top up:</p>

			 	<ul>
			 		<li>
			 			<input type="radio" id="RM10" name="topup-amount" />
			 			<label for="RM10">RM10</label>
			 		</li>
			 		<li>
			 			<input type="radio" id="RM30" name="topup-amount" checked="checked" />
			 			<label for="RM30">RM30</label>
			 		</li>
			 		<li>
			 			<input type="radio" id="RM60" name="topup-amount" />
			 			<label for="RM60">RM60</label>
			 		</li>
			 		<li>
			 			<input type="radio" id="RM100" name="topup-amount" />
			 			<label for="RM100">RM100</label>
			 		</li>
			 	</ul>

			 	<p><label for="mobile-number">Enter the mobile number to top up:</label>
			 		<input type="tel" name="mobile-number" />
			 		<span class="form--error">Please fill in a mobile number to top up.</span>
			 	</p>

			 	<p><input type="submit" class="button--regular secondary outline" value="Top up" /></p>

			</form>
		</div>
	</div>

</section>