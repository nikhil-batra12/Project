 <div class="tab-pane fade in row Login_form_body">
		<div class="container">
			<div class="row">
				<div class="col-xs-offset-1 col-xs-10  login_content">
					<h1 class="login-heading">Login</h1>
					
					<form class="form-horizontal" id="loginForm" novalidate>
						
						<div class="form-group">
							<div class="col-xs-offset-3 col-xs-6 col-sm-offset-4 col-sm-4">
								<input type="text" class="form-control" name="username" required placeholder="Username"/>
							</div>
						</div>
						
						<div class="form-group">
								<div class="col-xs-offset-3 col-xs-6 col-sm-offset-4 col-sm-4">
									<input type="password" class="form-control" required name="password" placeholder="Password"/>
								</div>
						</div>
					
						<div class="col-xs-offset-3 col-sm-offset-4 col-sm-4 col-xs-8 control-label submit_button_container" >
								<input type="button" ng-click="login()" class="submit_button btn pull-left" value="Sign-in"/>
							<!-- <button ng-click="login()" class="clear_button btn btn-default pull-left">Clear</button> -->
						</div>
						<div id="loginErrorMsg" class="col-xs-offset-3 col-sm-offset-4 col-sm-4 col-xs-8">
						
						</div>
					</form>
				</div>
			</div>
		</div>
</div>
	