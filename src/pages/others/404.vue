<template>
  <div>
    <div class="site-not-found">
      <div class="page-title">404 Not Found</div>
      <p>
        <router-link to="/"> 返回首页 </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.site-not-found {
    width: 400px;
    margin: auto;
  .page-title {
    padding: 5rem 0;
    font-size: 3rem;
    text-align: center;
    font-weight: bold;
    color: #999;
  }
}
</style>