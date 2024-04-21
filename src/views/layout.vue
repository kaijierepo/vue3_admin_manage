<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="flex flex-row justify-between items-center p-2">
          <span>管理后台</span>

          <div class="flex flow-row align-middle items-center gap-4">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <el-dropdown>
              <span class="el-dropdown-link">
                <span>jacklove</span>
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside style="width: 250px"
          ><el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">用户列表</el-menu-item>
                  <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
              <RouterLink to="/user">
                <el-menu-item index="4">
                  <el-icon><setting color="black" /></el-icon>
                  <span>用户管理</span>
                </el-menu-item>
              </RouterLink>
            </el-menu>
          </el-col></el-aside
        >
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
const handleOpen = () => {};
const handleClose = () => {};

</script>

<style></style>
