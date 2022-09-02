<script>
export default {
  data() {
    return {
        secondaryMessage: 'Check Owen Wilson\'s "wow" exclamations in movies',
        welcomeMessage: 'Welcome to Owen Wilson Wows page',
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ welcomeMessage }}</h1>
    <p class="instructions">{{ secondaryMessage }}</p>
  </div>
</template>

<style>
	.instructions {
		line-height: 1.6;
		margin: 1rem 0;
		background: #4f39fa;
		padding: 1rem;
		border-radius: 0.4rem;
		color: hsl(10, 21%, 95%);
	}

	.instructions code {
		font-size: 0.875em;
		border: 0.1em solid var(--color-border);
		border-radius: 4px;
		padding: 0.15em 0.25em;
	}
</style>