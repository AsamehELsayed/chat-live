
<template>
   
  <form class="container m-auto mt-48">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
         
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >First name</label
        >
        <input
          v-model="firstName"
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />
      
     
      </div>
      <div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Last name</label
        >
        <input
          v-model="lastName"
          type="text"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Doe"
          required
        />
  
      </div>
    </div>
    <div class="mb-6">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Email address</label
      >
      <input
        v-model="email"
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="john.doe@company.com"
        required
      />
   
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Password</label
      >
      <input
        v-model="password"
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="•••••••••"
        required
      />
    
    </div>

    <button
    type="button"
      @click.prevent="submitData"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
    <button class="text-blue-700 text-lg hover:text-blue-800 ml-3">
        already signin?
    </button>
  </form>
</template>
    <script setup>
    import { createUserWithEmailAndPassword } from 'firebase/auth';

import { ref } from "vue";
import { auth } from '../../utilities/firebaseConfig'; // Adjust path as necessary
import { db } from "../../utilities/firebaseConfig";
import { signupValidation } from "../../validation/signup";
import TheWelcome from "../components/TheWelcome.vue";
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const validationErrors = ref({});


const submitData = () => {
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };
  validationErrors.value = signupValidation(data);
  console.log(data)



  const saveData = async (data) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        await userCredential.user.
      } catch (error) {
        console.error('Error signing up:', error.message);
      }
  };
  saveData(data);
  return {
      validationErrors,
      submitData,
    };
};
</script>
    