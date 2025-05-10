<script>
  import Child from "./Child.svelte"

	let count = $state(3);

  function add() {
		count += 1;
	}

	function subtract() {
		count -= 1;
	}
</script>

<div>
  <p>Hello world!</p>
  <p>count: {count}</p>
  <button onclick={add}>Up!</button>
  <hr/>
  <button onclick={subtract}>-</button>
	<pre>{count}</pre>
	<button onclick={add}>+</button>
  <Child />
</div>

<style>
  p {
    color: burlywood;
  }
</style>