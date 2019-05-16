<template>
    <main class="class">
        <h2>In-View</h2>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
    </main>
</template>

<script>
import inView from '../src'

export default {
    mixins: [inView],
    mounted() {
        this.inView(['h2', 'p'])
    }
}
</script>

<style>
main {
    text-align: center;
    font-family: Helvetica, sans-serif;
}
p {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: tomato;
    border-radius: 15px;
    color: white;
    padding: 20px;
    margin: 40px auto;
}
</style>
