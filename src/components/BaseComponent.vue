<template>
    <div>
        <header>
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/tasks"> TASK </router-link> |
                <router-link to="/todo"> To do </router-link> |
            </div>
        </header>

        <div>
              <router-view/>
        </div>
    </div>
</template>