<template>
    <main class="class">
        <p v-in-view>1</p>
        <p v-in-view>2</p>
        <p v-in-view>3</p>
        <p v-in-view>4</p>
        <p v-in-view>5</p>
        <p v-in-view>6</p>
        <p v-in-view>7</p>
        <p v-in-view>8</p>
        <p v-in-view>9</p>
        <p v-in-view>10</p>
    </main>
</template>

<script>
import inView from '../src'

export default {
    directives: {
        inView
    }
}
</script>

<style>
p {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: tomato;
    border-radius: 15px;
    color: white;
    font-family: Helvetica, sans-serif;
    padding: 20px;
    margin: 40px auto;
}
</style>
