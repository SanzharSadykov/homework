<template>
  <div id="app">
    <div class="nav flex justify-center items-center">
      <h1 class="active hover:underline my-3 mx-6 text-lg font-semibold" v-on:click="$router.push({name: 'Home'}), setActiveLink()">Перейти на главную</h1>
      <h1 class="hover:underline my-3 mx-6 text-lg font-semibold" v-on:click="$router.push({name: 'Test'}), setActiveLink()">Перейти на тест</h1>
    </div>    
    <router-view/>
  </div>
</template>