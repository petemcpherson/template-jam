<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import liz_1 from '$lib/assets/images/liz_1.gif';
	import tai from '$lib/assets/images/tai.png';
	import bmf from '$lib/assets/images/bmf.png';
	import TMAI_logo_2_light from '$lib/assets/images/TMAI_logo_2_light.png';
	import aff_tracker_logo_dark from '$lib/assets/images/aff_tracker_logo_dark.png';
	import fabb_logo_dark from '$lib/assets/images/fabb_logo_dark.png';

	const url = 'https://dyeb.thrivecart.com/petes-private-vault-bf2024/';

	// Expiration check
	if (browser) {
		const expirationDate = new Date('2024-12-02T23:59:00-05:00'); // Test expiration at 10:05 PM ET
		const now = new Date();
		// console.log(
		// 	'Expiration date:',
		// 	expirationDate.toLocaleString('en-US', { timeZone: 'America/New_York' })
		// );
		// console.log('Current time:', now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
		// console.log('Time comparison result:', now >= expirationDate);

		if (now >= expirationDate) {
			goto('/turkey/byebye'); // Redirect to thanks page after expiration
		}
	}
</script>

<!-- <div
	class="md:h-24 p-8 md:p-36 flex items-center justify-center bg-primary text-primary-content text-center"
>
	<div class="md:mx-24">
		<p class="text-xl font-black mb-4">Howdy! Pete here 👋.</p>
		<p>
			Due to a few errors (both human errors from <i>yours truly</i>, as well as THRIVECART ERRORS
			ARGH...I'm leaving Template Jam open until Friday at 11:59pm EST. (9.27.24))
		</p>
	</div>
</div> -->

<div class="bg-black">
	<!-- top of page -->
	<div class="w-3/4 mx-auto text-center py-12 md:py-32 space-y-10">
		<h1 class="text-xl font-black">Pete's Private Vault - $39!</h1>
		<h2
			class="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
		>
			Literally everything I've made for creators & entrepreneurs.
		</h2>
	</div>
	<!-- features & embed -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-24">
		<!-- col 1 -->
		<div class="col-span-2 space-y-4">
			<h2 class="text-2xl md:text-4xl font-black">
				ALL PETE'S TEMPLATES, COURSES, SAAS TOOLS - JUST $39!
			</h2>
			<p>
				Want to produce content WAY faster? Or deploy a lightning-fast website theme on Elementor
				(like, in 10 minutes?).
			</p>
			<p>
				Want my funnel templates? Notion dashboard? Sales & nurture sequences–completely with swipe
				file examples and tutorials for everything?
			</p>
			<p
				class="font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
			>
				Want $4,700+ worth of tools for only $39?
			</p>
			<h2 class="font-black text-2xl">Pete's Private Vault includes:</h2>
			<ul>
				<li>✅ Notion Weekly Planner</li>
				<li>✅ Niche Site Launch Checklist</li>
				<li>✅ Niche Site WordPress Theme templates</li>
				<li>✅ Niche Site KW research template & tracker</li>
				<li>✅ "LINK PAGES" tool for easy & fast internal links.</li>
				<li>✅ 3 SEO blog post templates (info posts, reviews, round-up)</li>
				<li>✅ 5+ Notion templates</li>
				<li>✅ 5+ SEO templates & tools</li>
				<li>✅ 5+ Productivity templates</li>
				<li>✅ 10+ Nurture & sales emails</li>
				<li>✅ 5+ Podcast & YouTube templates</li>
				<li>✅ 8+ Sales & Copywriting templates</li>
				<li>✅ Sponsorship Agreement & Profit First Template</li>
				<li>
					✅ 25+ Elementor templates (including this sales page & the doyouevenblog.com theme)
				</li>
				<li>🎁 BONUS 1 below</li>
				<li>🎁 BONUS 2 below</li>
				<li>🎁 BONUS 3 below</li>
				<li>😎 All other templates I add in the future.</li>
			</ul>
		</div>
		<!-- col 2 -->

		<div>
			<!-- BUY BUTTON to Thrivecart -->
			<h2 class="text-2xl font-black text-center">Use the World's Largest Buy Button 👇</h2>

			<div class="text-center w-full my-12">
				<a href={url} class=""
					><div
						class="bg-accent p-4 rounded-lg text-primary-content h-32 md:h-36 flex items-center justify-center shadow-2xl shadow-accent/50 hover:shadow-accent/75"
					>
						<span class="font-black text-2xl">Buy Pete's Vault - $39</span>
					</div></a
				>
			</div>
		</div>
	</div>

	<!-- tour video -->
	<div class="w-11/12 md:w-1/2 mx-auto text-center pt-24 md:pt-32">
		<p class="text-xl text-primary text-center mb-4 md:mb-12">
			👇 Watch a quick tour of what's inside Template Jam 👇
		</p>
		<div style="position: relative; padding-bottom: 64.98194945848375%; height: 0;">
			<iframe
				src="https://www.loom.com/embed/f1381d389730483bb2046bf2770ecbbf?sid=bd1b368b-790b-4f7b-aa5a-496bef5d93b3"
				frameborder="0"
				title="Template Jam Tour"
				webkitallowfullscreen
				mozallowfullscreen
				allowfullscreen
				style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
				loading="lazy"
			></iframe>
		</div>
	</div>

	<!-- but wait there's more -->
	<div class="w-11/12 md:w-1/2 mx-auto text-center pt-24 md:pt-44">
		<h2
			class="text-2xl md:text-7xl font-black bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
		>
			BUT WAIT.
		</h2>
		<h2 class="font-black text-xl md:text-4xl mt-4 md:my-12">
			We got enough bonuses to make Tai Lopez blush.
		</h2>

		<div class="flex justify-center my-4">
			<img src={tai} alt="tai lopez" />
		</div>

		<div class="my-12">
			<!-- features -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-24">
				<div class="outline outline-2 outline-primary p-4 rounded-lg">
					<h3
						class="font-black mb-2 md:mb-4 text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
					>
						1HR<br /> BLOGPOST <br /> ($27 value):
					</h3>
					<p>
						You get complete access to the tool that has helped 2,500+ creators create content
						FASTER
					</p>
				</div>
				<div class="outline outline-2 outline-primary p-4 rounded-lg">
					<h3
						class="font-black mb-2 md:mb-4 text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
					>
						LIGHTNING WRITING<br /> ($37 value):
					</h3>
					<p>A mini-training where you'learn my 9-step system for creaune content</p>
				</div>
				<div class="outline outline-2 outline-primary p-4 rounded-lg">
					<h3
						class="font-black mb-2 md:mb-4 text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
					>
						AI FOR<br /> BLOGGERS<br /> ($149 value):
					</h3>
					<p>Get my AI blogging workflow and PUMP UP THE CONTENT.</p>
				</div>
			</div>
			<!-- features 2 -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8">
				<div class="outline outline-2 outline-primary p-4 rounded-lg">
					<h3
						class="font-black mb-2 md:mb-4 text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
					>
						1HR<br /> PODCAST <br /> ($27 value):
					</h3>
					<p>Producing a podcast doesn't have to be hella hard or take hella time.</p>
				</div>
				<div class="outline outline-2 outline-primary p-4 rounded-lg">
					<h3
						class="font-black mb-2 md:mb-4 text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
					>
						10-MIN<br /> OUTLINE <br /> ($19 value):
					</h3>
					<p>Outline content in a few mins. Great for SEO!</p>
				</div>
				<div class="outline outline-2 outline-primary p-4 rounded-lg">
					<h3
						class="font-black mb-2 md:mb-4 text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
					>
						CONTENT EVERYWHERE<br /> ($197 value):
					</h3>
					<p>
						My full course on content PROMOTION & RE-PURPOSING. Get more eyeballs with less work!
					</p>
				</div>
			</div>

			<!-- 2nd block -->
			<div class="space-y-12 mt-8 md:mt-52">
				<h2
					class="text-2xl md:text-7xl font-black bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block my-4 md:my-8"
				>
					BUT WAIT. <br /><br />AGAIN.
				</h2>
				<h2 class="font-black text-4xl text-center">
					I'm including my $3,997 high-ticket course on funnels.
				</h2>
				<div class="w-11/12 md:w-1/2 mx-auto my-4">
					<img src={bmf} alt="bmf" />
				</div>
				<!-- paragraphs -->
				<div class="text-xl text-left space-y-8">
					<p>
						B.M.F. <span class="italic">(Blog Monetization Funnels)</span> hasn't been available to the
						public before (only to my membership students).
					</p>
					<p>And no, I didn't just slap a $3,997 price tag on it to be fancy.</p>
					<p>
						That's how much I sold it for, <span class="font-bold"
							>and every single person who went through the program made that investment back, AND
							THEN SOME.</span
						>
					</p>
				</div>
				<div class="flex justify-center">
					<img src={liz_1} alt="liz he's nuts" />
				</div>
				<!-- paragraphs -->
				<div class="text-xl text-left space-y-8">
					<p>Nah I'm really nooooooooaaahhh ok maybe a little.</p>
					<p>
						Truth be told, I'm an indie hacker who builds Saas companies these days, but I still
						have these timeless courses & templates which I just don't promote anymore.
					</p>
					<p>
						They're still hella valueable, and I'd like for you to have them (but also put food on
						mine and Liz's table).
					</p>
				</div>
			</div>
			<!-- 3rd block -->
			<div class="space-y-12 mt-8 md:mt-52">
				<h2
					class="text-2xl md:text-7xl font-black bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block my-4 md:my-8"
				>
					BUT WAIT. <br /><br />YES, AGAIN.<br /><br /> MIGHT AS WELL HAVE A SEAT, ACTUALLY.
				</h2>
				<h2 class="font-black text-4xl text-center">
					I'm including FREE access to my 3 Saas products.
				</h2>

				<!-- Saas features -->
				<div class="outline outline-2 outline-primary p-4 rounded-lg">
					<div class="mx-auto w-full flex items-center justify-center my-4 md:my-8">
						<img src={TMAI_logo_2_light} alt="TMAI" />
					</div>
					<h3 class="italic text-xl mb-4 md:mb-8">
						<a
							href="https://topicalmap.ai"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary underline">TopicalMap.ai</a
						>
						- Two (2) Months Free(!)
					</h3>

					<p class="mb-4 md:mb-8 text-lg">
						1,000+ Target Keywords In Just ONE click! SEO maps, social-first maps, product maps,
						news maps!
					</p>
				</div>
				<!-- aff tracker -->
				<div class="outline outline-2 outline-primary p-4 rounded-lg">
					<div class="mx-auto w-3/4 flex items-center justify-center my-4 md:my-8">
						<img src={aff_tracker_logo_dark} alt="afftracker" />
					</div>
					<h3 class="italic text-xl mb-4 md:mb-8">
						<a
							href="https://afftracker.co"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary underline">AffTracker.co</a
						>
						- Two (2) Months Free(!)
					</h3>

					<p class="mb-4 md:mb-8 text-lg">
						All your affiliate links in one place. 👍 Lightning fast access to links, affiliate
						portals, and more.
					</p>
				</div>
				<!-- fabb.ai -->
				<div class="outline outline-2 outline-primary p-4 rounded-lg">
					<div class="mx-auto w-full flex items-center justify-center my-4 md:my-8">
						<img src={fabb_logo_dark} alt="fabb.ai" />
					</div>
					<h3 class="italic text-xl mb-4 md:mb-8">
						<a
							href="https://fabb.ai"
							target="_blank"
							rel="noopener noreferrer"
							class="text-primary underline">FABB.ai</a
						>
						- Two (2) Months Free(!)
					</h3>

					<p class="mb-4 md:mb-8 text-lg">
						From keyword to outline to blog post to editing--automated. 💡 (SEO & social-first
						articles!)
					</p>
				</div>
				<!-- paragraphs -->
				<div class="text-xl text-left space-y-8">
					<p>Alllll included in this little bundle here. 🎉</p>
					<p>woohoooooo 👍</p>
				</div>
			</div>
		</div>
	</div>
	<!-- CTA -->
	<div class="w-11/12 mx-auto text-center py-12 md:py-24">
		<!-- CTA block -->
		<div class="space-y-12 mt-8 md:mt-52">
			<h2
				class="text-2xl md:text-7xl font-black bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block my-4 md:my-8"
			>
				OK THAT'S ENOUGH WAITING!
			</h2>
		</div>
		<h2 class="text-4xl font-black">
			Time to take action & grab Pete's Private Vault for only <span class="text-primary font-black"
				>$39</span
			>!!
		</h2>
		<div class="my-8 md:my-24">
			<p class="text-xl mb-4 md:mb-8">
				Use <span class="font-bold text-accent">the world's largest buy button</span> below to get access
				to Template Jam, allllll the bonuses & courses, all within about 60 seconds.
			</p>
			<!-- live button -->
			<a href={url} class=""
				><div
					class="bg-accent p-4 rounded-lg text-primary-content h-32 md:h-36 flex items-center justify-center shadow-2xl shadow-accent/50 hover:shadow-accent/75"
				>
					<span class="font-black text-2xl">Buy Pete's Private Vault</span>
				</div></a
			>
		</div>
	</div>

	<div class="h-24"></div>
</div>
