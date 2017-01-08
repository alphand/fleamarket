<template>
  <div class="topbar navbar navbar-full navbar-dark bg-inverse">
    <a href="#" class="navbar-brand">Commerzine</a>

    <ul class="nav navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Features</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">About Us</a>
      </li>
    </ul>

    <div class="float-xs-right">
      <ul class="nav navbar-nav" ref="dropdown">
        <li class="nav-item" v-if="!isAuthenticated">
          <a href="#" v-on:click.prevent="register" class="nav-link">Register</a>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <a href="#" v-on:click.prevent="login" class="nav-link">Login</a>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <div class="dropdown">
            <a href="#" v-on:click.prevent class="nav-link user-profile dropdown-toggle" data-toggle="dropdown">
              <img :src="userProfile.picture" :alt="userProfile.name" />
              {{ userProfile.name }}
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a href="#" class="dropdown-item">Settings</a>
                <div class="dropdown-divider"></div>
                <a href="#" v-on:click.prevent="userLogout" class="dropdown-item">Logout</a>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
/* global $ */

import Auth0Lock from 'auth0-lock';
import 'imports-loader?$=jquery!bootstrap';
import { mapGetters, mapActions } from 'vuex';

// import Monitor from '../utils/vue-monitor';
import config from '../config';
// import * as types from '../store/mutationTypes';

export default {
  data() {
    return {
      lock: new Auth0Lock(config.Auth0.cid, config.Auth0.domain),
    };
  },
  mounted() {
    const self = this;
    this.lock.on('authenticated', (authRes) => {
      this.setLoader(true);
      this.lock.getUserInfo(authRes.accessToken, (err, profile) => {
        if (err) return;
        profile.idToken = authRes.idToken; // eslint-disable-line
        self.userLogin(profile);
        self.setLoader(false);
        self.$router.push('dashboard');
      });
    });
  },
  updated() {
    const anyDrops = $(this.$refs.dropdown).find('.dropdown-toggle');
    anyDrops.dropdown();
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      userProfile: 'userProfile',
    }),
    test() {
      return 'hello';
    },
  },
  methods: {
    ...mapActions(['userLogin', 'userLogout', 'setLoader']),
    register() {
      return this.lock.show({ initialScreen: 'signUp' });
    },
    login() {
      return this.lock.show({ initialScreen: 'login' });
    },
  },
};
</script>

<style scoped lang="scss">
  .user-profile img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -45px;
  }
</style>
