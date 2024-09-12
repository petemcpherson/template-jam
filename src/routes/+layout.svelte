<script>
/** @type {import('./$types').LayoutData} */
import "../app.css";

// export let data;
</script>

<slot />

<!-- footer -->

<footer class="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>
      Copyright © {new Date().getFullYear()} - All right reserved by Do You Even
      Blog || <a href="/terms" class="link">Terms & Conditions</a>
    </p>
  </aside>
</footer>
