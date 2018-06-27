<template>
<div id="body">
    <h1 id="hofsa-title">Hofsa Knust</h1>
    <div>
        <div class="account-container">
            <div class="content clearfix">

                <form @submit.prevent="attemptLogin()">
                    <div class="login-fields">
                        <p>Please provide your log in details</p>

                        <div class="field">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" v-model="username" placeholder="Username" class="login username-field" />
                        </div> <!-- /field -->

                        <div class="field">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" v-model="password" placeholder="Password" class="login password-field"/>
                        </div> <!-- /password -->

                    </div> <!-- /login-fields -->

                    <div class="login-actions">
                        <span class="login-checkbox">
                            <input id="Field" name="Field" type="checkbox" class="field login-checkbox" v-model="keep_logged_in" tabindex="4" />
                            <label class="choice" for="Field">Keep me logged in</label>
                        </span>

                        <button class="button btn btn-large">Log In</button>
                    </div> <!-- .actions -->

                </form>
            </div> <!-- /content -->
        </div> <!-- /account-container -->

        <div class="login-extra">
            <router-link to="/reset_password" tag="li"><a>Reset Password</a></router-link>
            <router-link to="/register" tag="li"><a>Don't have an account</a></router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
	name: 'Login',

    data() {
        return {
            username: '',
            password: '',
            keep_logged_in: false
        };
    },

	methods: {
		attemptLogin() {
            console.log('this is the object ', { username: this.username, password: this.password, keep_logged_in: this.keep_logged_in });
			this.$router.push({ name: 'Timeline' });
		}
	}
}
</script>

<style scoped>
/** Base Body Styles **/
#body{
    background: rgba(0,150,136,1);
    color:#838383;
    font: 13px/1.7em 'Open Sans';
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1#hofsa-title {
    color: #FFF;
}

.account-container {
	width: 380px;
	margin: auto;

	background: #f9f9f9;

	border: 1px solid #d5d5d5;

	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;

	box-shadow:  0px 0px 2px #dadada, inset 0px -3px 0px #e6e6e6;
}

.content {
	padding: 16px 28px 23px;
}

.login-fields {

}

.login-fields .field {
	margin-bottom: 1.25em;
}

.login-fields label {
	display: none;
}

.login-fields input {
	font-family: 'Open Sans';
	font-size: 13px;
	color: #8e8d8d;
	padding: 11px 15px 10px 50px;
	background-color: #fdfdfd;
	width: 255px;
	display: block;
	margin: 0;
	box-shadow: inset 2px 2px 4px #f1f1f1;
}

.username-field { background: url(/static/img/signin/user.png) no-repeat; }

.password-field { background: url(/static/img/signin/password.png) no-repeat; }


.login-actions {
	float: left;

	width: 100%;

	margin-top: -1em;
	margin-bottom: 1.25em;
}

.login-social {
	float: left;

	padding: 10px 0 15px;

	border: 1px dotted #CCC;
	border-right: none;
	border-left: none;
}

span.login-checkbox {
	float: left;
	margin-top: 31px;
}

span.login-checkbox > input[type='checkbox'] {
    opacity: 0;
    float: left;
    width: 15px;
}

span.login-checkbox > input[type='checkbox'] + label {
    clear: none;

	height: 15px;
	display: block;
    padding: 0 0 0 22px;
    margin: 0;

    font-size: 12px;
    line-height: 1.2em;

    background: url(/static/img/signin/check.png) no-repeat 0 0;

    cursor: pointer;
}

span.login-checkbox > input[type='checkbox']:checked + label {
	background-position: 0 -15px;
}

/** Text Under Box**/
.login-extra {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
	width: 300px;
	margin: 1.5em auto;
    line-height: 19px;
    color: #FFF;
	text-shadow: 1px 1px 0px #000;
}

.login-extra li {
    list-style-type: none;
}

.login-extra a {
    color: #FFF;
    font-size: 14px;
    text-decoration: none;
}

.account-container h1 {
	margin-bottom: .4em;
	color: #525252;
}

/** Buttons **/
.twitter, .fb {
	position: relative;

	height: 32px;
	width: 157px;
	display: block;

	background: url(/static/img/signin/twitter_btn.png) no-repeat;

}

.fb {
	width: 162px;

	background: url(/static/img/signin/fb_btn.png) no-repeat;
}

.twitter:active, .fb:active {
	top: 1px;
}

.twitter:hover, .fb:hover {
	background-position: 0 -32px;
}

.twitter a, .fb a {
	padding: 5px 0 0 35px;
	text-shadow: -1px -1px 0px rgba(0,0,0,.3);
	color:#fff;
	font-weight: bold;
	font-size: 11px;
	height: 32px;
	display: block;
}

.fb a {
	padding: 5px 0 0 31px;

}

.twitter, .fb {
	display: inline-block;
}

.twitter a:hover, .fb a:hover {
	color: #FFF;
	text-decoration: none;
}

.button {-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; display: inline-block; float: right; margin-top: 18px;}


.register .login-social {
	margin-bottom: 1em;
}

.register .login-actions {
	margin-bottom: 0;
}

.register .login-fields input {
	width: 299px;
	padding-left: 6px;
}

.register h1 {
	color: #444;
}

.register span.login-checkbox {
	position: relative;
	top: -6px;
	width: 200px;
}

.register span.login-checkbox > input[type="checkbox"] + label {
	position: relative;
	line-height: 1.3em;
}



@media (max-width: 480px) {
	.account-container {
		width: 280px;
		margin-top: 35px;
	}

	.login-fields input {
		width: 160px;
	}

	.login-social {
		width: 100%;
	}

	.twitter {
		display: block;
		margin-bottom: 1em;
	}

	.register .login-fields input {
		width: 204px;
		padding-left: 6px;
	}
}
</style>
