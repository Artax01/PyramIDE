<template>
    <MainHeader/>
    <header class="py-5 center">
        <div class="container-xxl hd-gutter">
            <div class="row gap-4">
                <p class="hd-desc">Quickly get an IDE for online development projects that's also open source.</p>
                <div class="d-grid col-8 mx-auto">
                    <RouterLink to="login" class="btn btn-lg btn-primary fw-semibold gap-2">
                        <svg class="hd-icon-1 bi bi-lightning-charge-fill" style="background: transparent;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                        </svg>
                        Try PyramIDE
                    </RouterLink>
                </div>
            </div>
        </div>
    </header>
    <RouterView/>
</template>

<script setup>
import MainHeader from '../components/MainHeader.vue';
import { RouterView } from "vue-router";
</script>

<style scoped>
* {
    text-align: center;
}
/* h1 {
    background: linear-gradient(365deg, #FF1A7A 1.04%, #FFB800 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
} */

.hd-gutter {
    --bs-gutter-x: 3rem !important;
}

.hd-title {
    font-size: calc(1.425rem + 2.1vw);
}

.hd-desc {
    font-size: calc(1.275rem + .3vw);
    font-weight: 300;
}

.hd-icon-1 {
    height: 1em;
    width: 1em;
}
</style>