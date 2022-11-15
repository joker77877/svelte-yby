<script lang="ts">
	const list = [
		{ className: 'left', key: 0, tags: ['sssj-1.png', 'sssj-2.png'] },
		{ className: 'right', key: 1, tags: ['zhcr-1.png', 'zhcr-2.png', 'zhcr-3.png', 'zhcr-4.png'] }
	];
	const src = './assets/ssjj-click.png';
	let activeKey = 1;
	const onMouseenter = (key: number) => {
		activeKey = key;
	};
	const getAssetsFile = (url: string) => {
		return new URL(`./assets/${url}`, import.meta.url).href;
	};
</script>

<div class="flex h-full w-full justify-center">
	{#each list as e}
		<div
			class={activeKey === e.key ? `${e.className} active` : e.className}
			on:mouseenter={() => onMouseenter(e.key)}
		>
			<div class="tag flex w-1/2 ml-[33%] mt-[45%]">
				{#each e.tags as tag}
					<img src={getAssetsFile(tag)} alt="" />
				{/each}
			</div>
			<div class="bg" />
		</div>
	{/each}
</div>

<style global lang="postcss">
	.left,
	.right {
		width: 104.214559vh;
		@apply h-full shrink-0 cursor-pointer bg-contain bg-no-repeat;
		.tag {
			opacity: 0;
			> img {
				width: 20%;
				+ img {
					margin-left: 7%;
				}
			}
		}
	}
	.left {
		background-image: url('assets/ssjj-click.png');
		transform: translateX(11.85%);
		
		> .bg {
			@apply absolute top-0 h-full w-full bg-contain bg-no-repeat;
			background-image: url('assets/ssjj-bg.png');
		}

		&.active {
			.tag {
				opacity: 1;
			}
			> .bg {
				background-image: url('assets/sssj-active.png');
			}
		}
		&:hover {
			> .tag {
				opacity: 1;
			}
			> .bg {
				transition: 0.25s;
				background-image: url('assets/sssj-active.png');
			}
		}
	}
	.right {
		transform: translateX(-11.85%);
		background-image: url('assets/zhcr-default.png');
		> .bg {
			@apply absolute top-0 h-full w-full bg-contain bg-no-repeat;
			background-image: url('assets/zhcr-bg.png');
		}
		&.active {
			background-image: url('assets/zhcr-click.png');
			.tag {
				opacity: 1;
			}
			> .bg {
				background-image: url('assets/zhcr-active.png');
			}
		}
		&:hover {
			background-image: url('assets/zhcr-click.png');
			transition: 0.25s;
			> .bg {
				transition: 0.25s;
				@apply h-full bg-contain bg-no-repeat;
				background-image: url('assets/zhcr-active.png');
			}
		}
	}
</style>
