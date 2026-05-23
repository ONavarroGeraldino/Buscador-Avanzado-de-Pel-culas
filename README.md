# Buscador Avanzado de Películas 🎬

Buscador de películas con conexión a la **API de TMDB (The Movie Database)**. Construido con **React 19**, **Vite 8**, **Tailwind CSS 4** y **TanStack React Query**.

## ✨ Características

- **Búsqueda en tiempo real** — Resultados mientras escribes con debounce de 300ms.
- **API de TMDB** — Consulta la base de datos de más de 500,000 películas en español.
- **Paginación inteligente** — Navegación entre páginas con hasta 500 resultados.
- **TanStack React Query** — Caché, stale-time y refetch automático con retry.
- **Debounce** — Evita llamadas excesivas a la API mientras el usuario escribe.
- **Estados completos** — Pantallas de carga (skeleton), vacío, error con reintento y estado inicial.
- **Tailwind CSS 4** — Diseño moderno, responsive y modo oscuro.
- **Posters dinámicos** — Imágenes desde el CDN de TMDB con placeholder cuando no hay poster.
- **Valoración** — Rating ★ mostrado en cada tarjeta de película.
- **Responsive grid** — De 2 a 6 columnas según el tamaño de pantalla.
- **React Query Devtools** — Herramientas de depuración disponibles en desarrollo.

## 🛠️ Tecnologías y Herramientas

| Herramienta          | Versión | Propósito                              |
|----------------------|---------|----------------------------------------|
| React                | 19      | UI y lógica de componentes             |
| Vite                 | 8       | Bundler y dev server rápido            |
| Tailwind CSS         | 4       | Estilos utilitarios (modo oscuro)      |
| TanStack React Query | 5       | Caché, fetching y estado asíncrono     |
| TMDB API             | 3       | Fuente de datos de películas           |
| ESLint               | 10      | Linter de código                       |
| @vitejs/plugin-react | 6       | Integración de React con Vite          |

## 🔑 Configuración

Crea un archivo `.env` en la raíz con tu clave de la API de TMDB:

```env
VITE_TMDB_API_KEY=tu_api_key_aqui
```

Puedes obtener una clave gratuita en [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).

## 🚀 Scripts

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Compila para producción
npm run preview  # Previsualiza la build
npm run lint     # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── SearchBar.jsx       # Campo de búsqueda con icono
│   ├── MovieCard.jsx       # Tarjeta de película (poster, título, año, rating)
│   ├── Pagination.jsx      # Paginación con páginas inteligentes
│   ├── LoadingSkeleton.jsx # Esqueleto animado de carga
│   ├── EmptyState.jsx      # Estado vacío (inicial y sin resultados)
│   └── ErrorState.jsx      # Estado de error con botón de reintento
├── hooks/
│   ├── useMovieSearch.js   # Hook de consulta a TMDB con React Query
│   └── useDebounce.js      # Hook de debounce genérico
├── App.jsx                 # Componente principal con lógica de búsqueda
├── main.jsx                # Renderizado con QueryClientProvider
└── index.css               # Estilos base Tailwind
```
