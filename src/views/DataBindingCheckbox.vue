<template>
<div>
  <label><input type="checkbox" v-model="checked">{{checked}}</label>
  <br>
  <label><input type="checkbox" v-model="multichecked" value="서울">서울</label>
  <label><input type="checkbox" v-model="multichecked" value="부산">부산</label>
  <label><input type="checkbox" v-model="multichecked" value="광주">광주</label>
  <br><span>체크한 지역 : {{multichecked}}</span>
</div>
</template>

<script>
export default {
  name: "DataBindingCheckbox",
  data() {
    return {
      checked: true,
      multichecked: []
    }
  }
}
</script>

<style scoped>

</style>