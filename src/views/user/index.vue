<template>
  <el-table :data="tableData.value" style="width: 100%">
    <el-table-column prop="username" label="用户名" width="180" />
    <el-table-column prop="email" label="电子邮件" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script setup lang="ts">
import { getUserList } from '@api'

let tableData = reactive({value: []})

onMounted(() => {
 ;(async () => {
  console.log('******')
  const result = await getUserList();
  if(result.code === 1000) {
     tableData.value = result.data;
     console.log('--------tableData', result.data)
  }
  console.log('------------------', result)
 })()
})
</script>

<style scoped></style>
