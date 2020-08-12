<template>
  <div class="home">
    <el-header height="80">header</el-header>
    <el-container>
      <el-aside width="200">aside</el-aside>
      <el-main>main</el-main>
    </el-container>
    <el-footer>footer</el-footer>
    <span class="el-icon-eleme"></span>
    <el-button type="danger" icon="el-icon-delete"></el-button>
    <el-link type="danger">1212</el-link>
    <el-button>{{info}}</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      info: 'messaage'
    }
  },
  mounted() {
    this.info = 12
  },
  components: {

  }
}
</script>
