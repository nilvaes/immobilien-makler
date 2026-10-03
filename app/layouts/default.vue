<template>
  <div>
    <a
      href="#inhalt"
      class="sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      Zum Inhalt springen
    </a>
    <SiteHeader />
    <main id="inhalt">
      <slot />
    </main>
  </div>
</template>
