import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Пустой",
    description: "описание не добавлено",
  },
  components: {
    backlinks: {
      title: "Обратные ссылки",
      noBacklinksFound: "Обратных ссылок не добавлено",
    },
    themeToggle: {
      lightMode: "Светлая тема",
      darkMode: "Тёмная тема",
    },
    explorer: {
      title: "Доступные заметки",
    },
    footer: {
      createdWith: "Создано с помощью",
    },
    graph: {
      title: "Графовое представление",
    },
    recentNotes: {
      title: "Недавние заметки",
      seeRemainingMore: ({ remaining }) => `смотри ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Ссылка на оригинал",
    },
    search: {
      title: "Поиск",
      searchBarPlaceholder: "Поищите что-то",
    },
    tableOfContents: {
      title: "Оглавление",
    },
  },
  pages: {
    rss: {
      recentNotes: "Recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "Not Found",
      notFound: "Either this page is private or doesn't exist.",
    },
    folderContent: {
      folder: "Папка",
      itemsUnderFolder: ({ count }) =>
      `Заметок в папке: ${count}`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Заметки с тегом",
      itemsUnderTag: ({ count }) =>
      `Заметок с тегом: ${count}`,
      showingFirst: ({ count }) => `Показано первых тегов: ${count}.`,
      totalTags: ({ count }) => `Всего тегов ${count}.`,
    },
  },
} as const satisfies Translation