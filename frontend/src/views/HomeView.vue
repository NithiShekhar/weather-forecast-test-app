<template>
  <div class="home">
    <SearchCity @setSelectedCity="setSelectedCity"/>
    <WeatherForecast :selectedCity="selectedCity"/>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
