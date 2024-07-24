<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-gray-100 space-y-4">
    <button
      @click="handleSignUp"
      class="w-64 px-6 py-3 text-white bg-blue-500 rounded-lg text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Sign Up
    </button>
    <button
      @click="handleSignIn"
      class="w-64 px-6 py-3 text-white bg-green-500 rounded-lg text-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      Sign In
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

  const route =useRouter()
  const handleSignUp=()=>{
    route.push({name:'signup'})
  }
  
  const handleSignIn=()=>{
    route.push({name:'signin'})
  }

</script>

<style scoped>
/* Add any additional styling here */
</style>
