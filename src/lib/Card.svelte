<script lang="ts">
	export let info: Modalidade;
</script>

<h1>Nome: {info.name}</h1>
<h2>Slug: {info.slug}</h2>
<img src={info.img} alt={info.name} />
