<template>
    <Header />
    <section class="bg-ct-blue-600 min-h-screen pt-20">
        <div class="max-w-4xl mx-auto bg-white rounded-md h-[20rem] flex justify-center items-center">
            <div v-if="user">
                <div class="text-center">
                    <p class="text-2xl font-semibold">Bienvenido, {{ user.displayName }}</p>
                    <img :src="user.photoURL" alt="Foto de perfil" class="mx-auto mt-4 rounded-full" width="96"
                        height="96" />
                </div>
            </div>
            <div v-else>
                <div class="text-center">
                    <p class="text-2xl font-semibold">Bienvenido invitado.</p>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import Header from '~~/layouts/Header.vue';
import { useUserStore } from '~~/stores/user';
const userStore = useUserStore()
const user = userStore.user;

useHead({
    title: "Welcome",
});
</script>