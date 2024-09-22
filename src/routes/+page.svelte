<script>
import liz_1 from "$lib/assets/images/liz_1.gif";
import tai from "$lib/assets/images/tai.png";
import bmf from "$lib/assets/images/bmf.png";
import { enhance } from "$app/forms";

const url = "https://dyeb.thrivecart.com/template-jam";
</script>

<div class="bg-black">
  <!-- top of page -->
  <div class="w-3/4 mx-auto text-center py-12 md:py-32 space-y-10">
    <h1 class="text-xl font-black">Template Jam - from Do You Even Blog</h1>
    <h2
      class="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
    >
      Helpful tools & templates you can use TODAY.
    </h2>
  </div>
  <!-- features & embed -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-24">
    <!-- col 1 -->
    <div class="col-span-2 space-y-4">
      <h2 class="text-2xl md:text-4xl font-black">
        ALL PETE'S TEMPLATES - JUST $99!
      </h2>
      <p>
        Want to produce content WAY faster? Or deploy a lightning-fast website
        theme on Elementor (like, in 10 minutes?).
      </p>
      <p>
        Want my funnel templates? Notion dashboard? Sales & nurture
        sequences–completely with swipe file examples and tutorials for
        everything?
      </p>
      <p
        class="font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
      >
        Want $1,700+ worth of tools for only $99?
      </p>
      <h2 class="font-black text-2xl">Template Jam includes:</h2>
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
          ✅ 25+ Elementor templates (including this sales page & the
          doyouevenblog.com theme)
        </li>
        <li>😎 All other templates I add in the future.</li>
      </ul>
    </div>
    <!-- col 2 -->

    <div>
      <!-- waitlist form -->

      <p class="text-xl">
        Template Jam is currently closed. Join the waitlist below for unlimited
        happiness (ok not really).
      </p>
      <div class="my-2">
        <form
          action="https://doyouevenblog.com/sendy/subscribe"
          method="POST"
          accept-charset="utf-8"
          class="flex flex-col gap-4"
        >
          <label class="label" for="email">
            <span class="label-text text-xl">Email 👇</span>
          </label>
          <input
            class="input input-bordered w-full"
            type="email"
            name="email"
            id="email"
          /><br />
          <div style="display:none;">
            <label for="hp">HP</label><br />
            <input type="text" name="hp" id="hp" />
          </div>
          <input type="hidden" name="list" value="b7GN1RUsk8wQLrAyzfHuMg" />
          <input type="hidden" name="subform" value="yes" />
          <input
            class="btn btn-primary"
            type="submit"
            name="submit"
            id="submit"
          />
        </form>
      </div>
      <!-- BUY BUTTON to Thrivecart -->
      <div>
        <!-- <h2 class="text-2xl font-black text-center">
          Use the World's Largest Buy Button 👇
        </h2> -->

        <!-- live button -->
        <!-- <div class="text-center w-full my-12">
          <a href={url} class=""
            ><div
              class="bg-accent p-4 rounded-lg text-primary-content h-32 md:h-36 flex items-center justify-center shadow-2xl shadow-accent/50 hover:shadow-accent/75"
            >
              <span class="font-black text-2xl">Buy Template Jam</span>
            </div></a
          >
        </div> -->

        <!-- TEMP button -->

        <!-- <div class="text-center w-full my-12">
          <a href="/soon" class=""
            ><div
              class="bg-accent p-4 rounded-lg text-primary-content h-32 md:h-36 flex items-center justify-center shadow-2xl shadow-accent/50 hover:shadow-accent/75"
            >
              <span class="font-black text-2xl">Buy Template Jam</span>
            </div></a
          >
        </div> -->
      </div>
    </div>
  </div>

  <!-- tour video -->
  <div class="w-11/12 md:w-1/2 mx-auto text-center pt-24 md:pt-32">
    <p class="text-xl text-primary text-center mb-4 md:mb-12">
      👇 Watch a quick tour of what's inside Template Jam 👇
    </p>
    <div
      style="position: relative; padding-bottom: 64.98194945848375%; height: 0;"
    >
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
  <div class="w-11/12 md:w-1/2 mx-auto text-center pt-24 md:pt-32">
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
            You get complete access to the tool that has helped 2,500+ creators
            create content FASTER
          </p>
        </div>
        <div class="outline outline-2 outline-primary p-4 rounded-lg">
          <h3
            class="font-black mb-2 md:mb-4 text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text inline-block"
          >
            LIGHTNING WRITING<br /> ($37 value):
          </h3>
          <p>
            A mini-training where you'learn my 9-step system for creaune content
          </p>
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
          <p>
            Producing a podcast doesn't have to be hella hard or take hella
            time.
          </p>
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
            My full course on content PROMOTION & RE-PURPOSING. Get more
            eyeballs with less work!
          </p>
        </div>
      </div>
      <div class="space-y-12 mt-8 md:mt-24">
        <h2 class="font-black text-4xl text-center">
          And oh yeah, I'm including my $3,997 high-ticket course on funnels.
        </h2>
        <div class="w-11/12 md:w-1/2 mx-auto my-4">
          <img src={bmf} alt="bmf" />
        </div>
        <!-- paragraphs -->
        <div class="text-xl text-left space-y-8">
          <p>
            B.M.F. <span class="italic">(Blog Monetization Funnels)</span> hasn't
            been available to the public before (only to my membership students).
          </p>
          <p>
            And no, I didn't just slap a $3,997 price tag on it to be fancy.
          </p>
          <p>
            That's how much I sold it for, <span class="font-bold"
              >and every single person who went through the program made that
              investment back, AND THEN SOME.</span
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
            Truth be told, I'm an indie hacker who builds Saas companies these
            days, but I still have these timeless courses & templates which I
            just don't promote anymore.
          </p>
          <p>
            They're still hella valueable, and I'd like for you to have them
            (but also put food on mine and Liz's table).
          </p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <!-- <div class="w-11/12 md:w-3/4 mx-auto text-center py-12 md:py-24">
      <h2 class="text-4xl font-black">Whatcha waiting for?</h2>
      <p class="text-xl my-4">
        Use <span class="font-bold text-accent"
          >the world's largest buy button</span
        > below to get access to Template Jam, allllll the bonuses & courses, all
        within about 60 seconds.
      </p>
    </div> -->
  </div>

  <!-- live button -->
  <!-- <div class="text-center w-full my-12">
    <a href={url} class=""
      ><div
        class="bg-accent p-4 rounded-lg text-primary-content h-32 md:h-36 flex items-center justify-center shadow-2xl shadow-accent/50 hover:shadow-accent/75"
      >
        <span class="font-black text-2xl">Buy Template Jam</span>
      </div></a
    >
  </div> -->
  <!-- TEMP button -->

  <!-- <div class="w-11/12 mx-auto text-center mb-12 md:mb-24">
    <a href="/soon"
      ><div
        class="bg-accent p-4 rounded-lg text-primary-content h-32 md:h-48 flex items-center justify-center shadow-2xl shadow-accent/50 hover:shadow-accent/75"
      >
        <span class="font-black text-2xl">Buy Template Jam</span>
      </div></a
    >
  </div> -->
  <div class="h-24"></div>
</div>
