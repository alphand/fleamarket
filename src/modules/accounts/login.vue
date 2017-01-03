<template>
  <BaseLayout>
    <div class="login-wrapper">
      <div class="animate form login-form">
        <section class="login-content">
          <form action="">
            <h1>Login</h1>
            <div>
              <p>Login with your Social Media</p>
              <p>
                <ul class="list-unstyled login-social" >
                  <li>
                    <a :href="igLink" class="btn btn-outline-secondary">
                      <FaIcon icon="instagram" class="login-icon"/>
                    </a>
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <input type="text" class="form-control" placeholder="Username" required />
            </div>
            <div>
              <input type="password" class="form-control" placeholder="Password" required />
            </div>
            <div>
              <FlButton type="button" class="btn-outline-primary btn-sm" value="Login"></FlButton>
              <a class="reset_pass" href="#">Lost your password?</a>
            </div>

            <div class="clearfix"></div>

            <div class="separator">
              <p class="change-link">
                New to Site?
                <router-link to="/register" class="to-register">Create Account</router-link>
              </p>
              <p>
                Or do you have social media?
              </p>

              <div class="clearfix"></div>

              <div>
                <h1><i class="fa fa-paw"></i> Fleamarket!</h1>
                <p>©2016 All Rights Reserved. Fleamarket! Automate your shop. Privacy and Terms</p>
              </div>

            </div>
          </form>
        </section>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import config from '../../config';
import BaseLayout from '../../layouts/baseLayout';
import FlButton from '../../components/FlButton';
import FaIcon from '../../components/FaIcon';

export default {
  components: {
    BaseLayout,
    FlButton,
    FaIcon,
  },
  data() {
    return {
      igLink: `https://api.instagram.com/oauth/authorize/?client_id=${config.Instagram.clientId}&redirect_uri=http://localhost:8080/login/instagram&response_type=token`,
    };
  },
};
</script>

<style scoped lang="scss">
@import "bourbon";

.login-wrapper {
  right: 0px;
  margin: 0px auto;
  margin-top: 5%;
  max-width: 350px;
  position: relative;
}

.login-social {
  .login-icon {
    font-size: rem(30);
  }
}

.login-content {
  margin: 0 auto;
  padding: 25px 0 0;
  position: relative;
  text-align: center;
  text-shadow: 0 1px 0 #fff;
  min-width: 280px;
  font-size: em(12);
}

.login-content h1 {
  font: normal 25px Helvetica, Arial, sans-serif;
  letter-spacing: -0.05em;
  line-height: 20px;
  margin: 10px 0 30px;
}

.login-content h1:before, .login-content h1:after {
  content: "";
  height: 1px;
  position: absolute;
  top: 45px;
  width: 20%;
}

.login-content h1:after {
  background: rgb(126, 126, 126);
  background: linear-gradient(to right, rgba(126, 126, 126, 1) 0%, rgba(255, 255, 255, 1) 100%);
  right: 0;
}

.login-content h1:before {
  background: rgb(126, 126, 126);
  background: linear-gradient(to left, rgba(126, 126, 126, 1) 0%, rgba(255, 255, 255, 1) 100%);
  left: 0;
}

.login-content form {
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    border-radius: 3px;
    box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0, 0, 0, 0.08) inset;
    border: 1px solid #c8c8c8;
    color: #777;
    margin: 0 0 20px;
    width: 100%;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus {
    border-radius: 3px;
    box-shadow: 0 0 2px #A97AAD inset;
    background-color: #fff;
    border: 1px solid #A878AF;
    outline: none;
  }

}
</style>
