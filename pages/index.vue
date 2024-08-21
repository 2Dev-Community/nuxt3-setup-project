<template>
  <div class="flex h-screen w-full flex-col items-center justify-center gap-4">
    <span>Supported languages</span>
    <div class="flex gap-4">
      <ul v-for="(item, index) in locales" :key="index">
        <li>
          <button
            @click="handleChangeLanguage(item.code)"
            class="h-8 rounded-xl border px-4 hover:bg-gray-100"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
    </div>
    <p class="font-bold text-red-500 underline">
      {{ locale }}: {{ $t(hello) }}
    </p>
    <div class="flex py-4">
      <NuxtLink
        to="https://github.com/2Dev-Comunity/nuxt3-setup-project.git"
        target="_blank"
        class="flex items-center gap-2 rounded-xl border bg-black px-4 py-1 text-sm text-white transition-all hover:scale-105 hover:shadow-xl"
      >
        <icon name="mdi:github" size="20" />
        <span>Get this project on GitHub</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locales, setLocale, locale, t } = useI18n();
const { hello } = useHelloWorld();

const handleChangeLanguage = (lang: string) => {
  setLocale(lang);
};

onMounted(() => {
  // see this change on console in browser
  console.log(t(hello.value));
});
</script>
