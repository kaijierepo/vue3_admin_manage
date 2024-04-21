<template>
  <div class="flex">
    <div>
      <el-form ref="formEl" :model="form" :rules="rules" label-width="100px">
        <div class="flex w-[300px] flex-col justify-center">
          <el-form-item label="用户" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click="submit" type="primary" class="w-full">登录</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { login } from '@api'

const router = useRouter()

interface RuleForm {
  username: string
  password: string
}

const form = reactive({
  username: '',
  password: ''
})

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { max: 15, message: '用户名长度不能超过15位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 10, max: 5, message: '', trigger: 'blur' }
  ]
})

const submit = async () => {
  const response = await login(form)
  if (Reflect.has(response, 'code') && response.code === 10000) {
    window.localStorage.token = response.data
    router.push('/')
    
  }
  // login({})
}
</script>

<style scoped></style>
