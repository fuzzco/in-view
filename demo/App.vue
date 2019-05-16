<template>
    <main class="class">
        <h2>In-View</h2>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>I fade in every time</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>

        <div class="grid">
            <p>We</p>
            <p>fade</p>
            <p>in</p>
            <p>once</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
        </div>
    </main>
</template>

<script>
import inView from '../src'

export default {
    mixins: [inView],
    mounted() {
        // we have to get specific so we don't get both 7th-sibling <p> tags
        this.inView('.class > p:nth-of-type(7)')

        // can also pass an object of opts
        this.inView({
            selector: '.grid p',
            once: true,
            delay: 100
        })
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
    transition: opacity 0.8s, transform 0.8s;
}
p[data-wiv-id]:not(.in-view) {
    transition: none;
    transform: translateY(40px);
    opacity: 0;
}
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>
