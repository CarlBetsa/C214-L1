<script>
	import Swal from "sweetalert2";
	import Jogador from "./Jogador.svelte";
	
	let gols = 0;

	function marcaGol(){
		gols++;
		Swal.fire({
			title: "GOOOOOOOOL",
			text: `Jogador marcou ${gols} gols`,
			confirmButtonText: "Fechar"
	  	});
	}

</script>

<main>
	<h1> Exibe a informação quando marca gol </h1>
	<Jogador acao = {marcaGol} />
	
</main>

<style>

	h1 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	main {
		font-family: serif;
		text-align: center;
		padding: 3rem;
	}
  
</style>
