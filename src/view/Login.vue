<template>
    <MainHeader/>
    <div class="container_">
        <LoginForm/>
    </div>
</template>

<script setup>
import MainHeader from '../components/MainHeader.vue';
import LoginForm from '../components/LoginForm.vue';
</script>

<style scoped>
.container_ {
    height: 75vh !important;
}
</style>