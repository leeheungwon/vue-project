<template>
<div>
  <label><input type="radio" v-bind:value="radiovalue1" v-model="picked">서울 </label>
  <label><input type="radio" v-bind:value="radiovalue2" v-model="picked">부산 </label>
  <label><input type="radio" v-bind:value="radiovalue3" v-model="picked">광주 </label>
  <br>
  <span>선택한지역 {{picked}}</span>
</div>
</template>

<script>
export default {
  name: "DataBindingRadio",
  data() {
    return {
      picked: '',
      radiovalue1: '서울',
      radiovalue2: '부산',
      radiovalue3: '광주',
    }
  }
}
</script>

<style scoped>

</style>