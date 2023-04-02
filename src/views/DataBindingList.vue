<template>
<div>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{product.product_name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.category}}</td>
        <td>{{product.delivery_price}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "DataBindingList",
  data() {
    return {
      productList: []
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.productList = await this.$api('https://80a5bff3-1623-4089-8ff7-ebbc37aec025.mock.pstmn.io/list', 'get')
    }
  }
}
</script>

<style scoped>

</style>