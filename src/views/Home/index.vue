<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 面板部分 -->
  <HomePanel mainTitle="新鲜好物"
             subTitle="好物好物好物">
    <div>
      这里是新鲜好物
    </div>
  </HomePanel>
  <HomePanel mainTitle="人气推荐"
             subTitle="推荐推荐推荐">
    <div>
      这里是推荐
    </div>
  </HomePanel>
</template>