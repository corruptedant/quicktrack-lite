<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/accounts/1">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style>
    @import '@/assets/base.css';
</style>
