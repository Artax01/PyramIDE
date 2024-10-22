<template>
    <h1>Login</h1>
    <br>
    <br>
    <form action="">
        <input type="email" placeholder="Enter email...">
        <br>
        <input type="password" placeholder="Enter password...">
        <br>
        <br>
        <br>
        <button type="submit" class="btn btn-primary">Connexion...</button>
        <br>
        <RouterLink to="code">
            <button type="submit" style="background: #00dc82;">Guest mode...</button>
        </RouterLink>
    </form>
</template>
<style scoped>
* {
    text-align: center
}
</style>