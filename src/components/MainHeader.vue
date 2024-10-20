<template>
    <nav class="navbar navbar-expand-lg px-3 sticky-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bg-menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="bg-menu">
                <a class="navbar-brand" style="margin-right: 0;" href="#">PyramIDE</a>
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <RouterLink to="/PyramIDE/" class="nav-link active">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Docs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Credits</a>
                    </li>
                </ul>          
            </div>
            <RouterLink to="/PyramIDE/code">
                <button id="get_started" type="button">
                    Get Started
                </button>
            </RouterLink>
        </div>
    </nav>
    <RouterView></RouterView>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: "Header",
  components: {},
};
</script>

<style scoped>
nav[class~=navbar] {
  box-shadow: 0 0 1em rgba(0,0,0,.3);
  background-color: #1a1a1a;
}

.navbar-toggler:focus {
  box-shadow: none;
}

div[class~=navbar-collapse] {
  gap: 1em;
}
  
a[class~=nav-link]:hover {
  text-decoration: underline;
}

#get_started {
  color: #0d6efd;
  text-decoration: none;
}

@media (prefers-color-scheme: light) {
  nav[class~=navbar] {
    background-color: #ffffff
  }
}

@media (prefers-color-scheme: dark) {
  #bg-menu {
    --bs-navbar-brand-hover-color: rgba(255, 255, 255, 0.87);
    --bs-navbar-brand-color: rgba(255, 255, 255, 0.87);
    --bs-navbar-active-color: rgba(255, 255, 255, 0.87);
  }

  button[class~=navbar-toggler] {
    filter: invert();
  }

  button[class~=navbar-toggler]:hover {
    border-color: #ffaf64;
  }

  #get_started {
    color: #efefef;
    background-color: #0d6efd;
  }
}
</style>