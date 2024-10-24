<template>
    <div class="d-flex justify-content-center h-100 align-items-center">
        <form action="" class="col-9">
            <h1>Login</h1>
            <div class="mt-4">
                <input type="email" class="form-control" placeholder="Email" disabled>
                <input type="password" class="form-control" placeholder="Password" disabled>
            </div>
            <br>
            <div class="d-flex flex-column mt-2">
                <button id="login_" type="submit" class="btn btn-primary col-4 ms-auto me-auto" style="font-size: 1.05em;" disabled>Login</button>
                <a class="small mt-3" style="cursor: pointer;" disabled>Forgot password ?</a>
            </div>
            <hr>
            <RouterLink to="code">
                <button id="invite_" type="submit" class="my-2 d-flex ms-auto me-auto" style="background: #00dc82; color: black; font-size: 1.1em">Invite mode</button>
            </RouterLink>
        </form>
    </div>
</template>

<style scoped>
div[class~=d-flex] {
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
    transition: .3s;
}

h1, a {
    text-align: center;
}

input, hr {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    background: transparent
}

#login_:hover {
    transition: .3s;
    filter: drop-shadow(0 0 2em #646cffaa);
}

#invite_:hover {
    transition: .3s;
    filter: drop-shadow(0 0 2em #42b883aa);
}

/* bootstrap breakpoints */

@media only screen and (max-width: 1200px) {
    div[class~=d-flex] {
        max-width: 75%;
    }
}

@media only screen and (max-width: 992px) {
    input, hr {
        width: 100%;
    }
}

@media only screen and (max-width: 768px) {
    div[class~=d-flex] {
        max-width: 100%;
    }
}
</style>