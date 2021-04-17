<template>
  <div class="home">
    <Home @getAddress="showAddress"></Home>
    <p>Address： {{ address }}</p>
  </div>
</template>