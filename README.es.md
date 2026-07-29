# Portafolio de Luismel De León Eryartir

[English](README.md)

Portafolio bilingüe enfocado en mi trayectoria como Senior Data Engineer, acompañado por proyectos seleccionados de desarrollo de software que demuestran pensamiento de producto y entrega end-to-end.

## Posicionamiento

El contenido presenta tres puntos verificables de mi experiencia:

- Más de 3 años construyendo y operando flujos de datos en producción.
- Promoción a Senior Data Engineer en IQVIA.
- Mejora aproximada del 25% en el tiempo de ejecución de un pipeline productivo.

El background de desarrollo complementa la narrativa principal de Data Engineering mediante dos productos desplegados: VegaClean y ORIS79E Services.

## Arquitectura

```text
.
├── en/                         # Documento y metadatos en inglés
├── es/                         # Documento y metadatos en español
├── src/
│   ├── components/             # Layout y secciones del portafolio
│   ├── content/                # Contenido bilingüe tipado
│   ├── hooks/                  # Interacciones y revelado compartidos
│   ├── styles/                 # Tokens y sistema responsive
│   ├── App.tsx
│   └── main.tsx
├── imagenes/                   # Recursos locales incluidos en producción
├── scripts/                    # Empaquetado del build
├── tests/                      # Pruebas básicas de hosting
├── worker/                     # Fallback para el sitio estático
└── vite.config.ts              # Build multipágina con Vite
```

Las rutas en inglés y español son entradas HTML independientes. Los hechos, componentes y recursos compartidos se reutilizan, mientras cada idioma mantiene su propio módulo de contenido.

## Tecnologías

- React 19
- TypeScript
- Vite
- Space Grotesk e IBM Plex Mono servidas localmente con Fontsource
- React Icons con la familia Phosphor

## Desarrollo local

```bash
npm install
npm run dev
```

La entrada principal redirige a `/en/` o `/es/` según el idioma del navegador. También es posible abrir cada ruta directamente.

## Verificaciones

```bash
npm run typecheck
npm run build
npm run test:sites
```

La implementación incluye estructura semántica, foco visible por teclado, enlace para saltar al contenido, navegación responsive, un sistema de movimiento basado en IntersectionObserver, soporte para movimiento reducido, carga optimizada de imágenes, metadatos localizados y URLs reales por idioma.

## Actualizar contenido

- Inglés: `src/content/en.ts`
- Español: `src/content/es.ts`
- Tipos compartidos: `src/content/types.ts`
- Imágenes: `imagenes/`

Las fechas, métricas, posiciones y afirmaciones técnicas deben mantenerse alineadas con experiencia profesional verificable.

## Autor

**Luismel De León Eryartir**
Senior Data Engineer · Santo Domingo, República Dominicana

- [LinkedIn](https://www.linkedin.com/in/luismeldeleon/)
- [GitHub](https://github.com/Luismel06)
