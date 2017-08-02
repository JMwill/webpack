<template>
    <div id="app">
        <app-header></app-header>
        <img src="./assets/logo.png">
        {{#router}}
        <router-view transition transition-mode="out-in"></router-view>
        {{else}}
        <hello></hello>
        {{/router}}
    </div>
</template>

<script>
import AppHeader from './Header';
{{#unless router}}
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/unless}}

export default {
    name: 'app',
    components: {
        AppHeader{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
        Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
