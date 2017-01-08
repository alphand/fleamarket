<template>
  <BaseLayout>
    <div slot="header">
      <FLHeader>
        <ContactBar />
        <TopNavBar />
      </FLHeader>
      <HeaderTitle />

    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Product title</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          product image
        </div>
        <div class="col-md-6">
          product descipriton
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '../../layouts/baseLayout';
import ContactBar from '../util/components/contactBar';
import TopNavBar from '../util/components/topNavBar';
import FLHeader from '../util/components/flHeader';
import HeaderTitle from '../util/components/headerTitle';

export default {
  components: {
    BaseLayout,
    ContactBar,
    TopNavBar,
    FLHeader,
    HeaderTitle,
  },
};
</script>
