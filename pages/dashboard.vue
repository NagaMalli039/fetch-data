<template>
    <div>

        Dashboard
        <div style="display:flex;margin-left:auto;flex-direction: right;"> 
            <NuxtLink v-if="!loggedInUserName" to="/logout" class="text-white link-unstyled q-pa-md">Logout</NuxtLink>
          </div>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>