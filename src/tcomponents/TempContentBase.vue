<template>
  <div class="home"> 
      <div class="container">
        <div class="card">
          <div class="card-body">
            <slot></slot>        <!--把调用的这个组件的子元素全部渲染出来，react用的就是this.props-->          
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default{
    name:"TempContentBase",

}
</script>

<style scoped>
.home {
  margin-top: 10px;
}
</style>