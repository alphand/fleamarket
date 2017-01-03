<template>
  <div class="topbar navbar navbar-full navbar-dark bg-fmp-ptrn1">
    <a href="#" class="navbar-brand">Fleamarket</a>

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
          <a href="#" v-on:click="register" class="nav-link text-fmp-ptrn3">Register</a>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <a href="#" v-on:click="login" class="nav-link text-fmp-ptrn3">Login</a>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <div class="dropdown">
            <div class="nav-link user-profile text-fmp-ptrn3 dropdown-toggle" data-toggle="dropdown">
              <img :src="userProfile.picture" :alt="userProfile.name" />
              {{ userProfile.name }}
            </div>
            <div class="dropdown-menu">
                <a v-on:click.prevent="userLogout" class="dropdown-item">Logout</a>
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
        this.setLoader(false);
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
    width: 29px;
    height: 29px;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>
