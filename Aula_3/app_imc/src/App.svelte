<script>
	let peso = 0;
	let altura = 0;
	let imc = 0;
	let mostrarPesoIdeal = false;
	let pesoMax = 0;
	let pesoMin = 0;

	function calcularIMC(){
		if(peso>0 && altura>0){
			imc = (peso / Math.pow(altura, 2)).toFixed(2);
			pesoMin = (18.51 * Math.pow(altura, 2)).toFixed(2);
			pesoMax = (24.99 * Math.pow(altura, 2)).toFixed(2);
		} else {
			imc = 0;
		}
	}

	function controlaPesoIdeal(){
		mostrarPesoIdeal = !mostrarPesoIdeal
	}

</script>

<main>
	<h1>Calculadora de IMC</h1>
	<label>
		Peso(kg): <input type="number" bind:value={peso} on:input={calcularIMC}/>
	</label>
	<label>
		Altura(m): <input type="number" bind:value={altura} on:input={calcularIMC}/>
	</label>
	<button class="danger lg" on:click={controlaPesoIdeal}>
		{#if mostrarPesoIdeal}
			Ocultar peso ideal
		{:else}
			Mostrar peso ideal
		{/if}
	</button>
	{#if imc>0}
		<p>Seu IMC é {imc}</p>
		{#if imc<=18.5}
			<p>Você está abaixo do peso</p>
		{:else if imc<25}
			<p>Parabens você está com no seu peso ideal</p>
		{:else if imc<30}
			<p>Você está levemente acima do peso</p>
		{:else if imc<35}
			<p>Você está com obesidade grau 1</p>
		{:else if imc<40}
			<p>Você está com obesidade grau 2(severa)</p>
		{:else}
			<p>Você está com obesidade grau 3(morbida)</p>
		{/if}
		{#if mostrarPesoIdeal}
			<p>Seu peso ideal é de {pesoMin} a {pesoMax}</p>
		{/if}
	{/if}
	
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
		padding: 2rem;
	}

	h1 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	input{
		padding: 0.25rem;
	}

</style>