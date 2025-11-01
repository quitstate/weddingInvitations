# Cómo Compartir en WhatsApp

## Cambios Realizados

Se han actualizado los metadatos de la página para que cuando se comparta por WhatsApp o redes sociales muestre:

- **Título:** Invitación Boda Avigail y Ronald
- **Descripción:** Invitaciones para la Boda de Avigail y Ronald Diciembre 27 2025
- **Imagen:** portada-flores.png

## Archivos Modificados

1. **public/index.html**
   - Título de la página
   - Meta description
   - Open Graph tags (para WhatsApp, Facebook)
   - Twitter Card tags

2. **public/manifest.json**
   - Nombre de la aplicación
   - Colores del tema (dorado y beige)

## Verificar los Cambios

### En Desarrollo (localhost)

Los cambios se verán reflejados inmediatamente al recargar la página:

```bash
npm start
```

Verás el título "Invitación Boda Avigail y Ronald" en la pestaña del navegador.

### Para Compartir en WhatsApp

**IMPORTANTE:** WhatsApp necesita que la página esté en producción (desplegada en internet) para mostrar la vista previa.

1. **Construir la versión de producción:**
   ```bash
   npm run build
   ```

2. **Desplegar en Vercel, Netlify o similar**

3. **Compartir el enlace en WhatsApp**

## Validar Meta Tags

Puedes verificar que los meta tags estén correctos usando estas herramientas:

### 1. Facebook Sharing Debugger
- URL: https://developers.facebook.com/tools/debug/
- Pega tu URL de producción
- Haz clic en "Depurar" (Debug)
- Verás cómo se ve tu enlace cuando se comparte

### 2. WhatsApp Preview
- Simplemente comparte el enlace en un chat de WhatsApp
- WhatsApp mostrará automáticamente:
  - La imagen de portada (portada-flores.png)
  - El título
  - La descripción

### 3. LinkedIn Post Inspector
- URL: https://www.linkedin.com/post-inspector/
- Útil para verificar antes de compartir

## Consejos para Mejores Resultados

### Imagen Open Graph

La imagen `portada-flores.png` se usará como vista previa. Para mejores resultados:

- **Tamaño recomendado:** 1200 x 630 píxeles
- **Formato:** PNG o JPG
- **Tamaño de archivo:** Menos de 8 MB

Si quieres cambiar la imagen, puedes:
1. Reemplazar `public/portada-flores.png`
2. O cambiar la referencia en `public/index.html`:
   ```html
   <meta property="og:image" content="%PUBLIC_URL%/tu-nueva-imagen.png" />
   ```

### Limpiar Caché de WhatsApp

Si ya compartiste el enlace antes y no ves los cambios:

1. Usa el Facebook Debugger (paso 1 arriba)
2. Haz clic en "Scrape Again" o "Volver a Depurar"
3. Esto limpiará la caché de WhatsApp

### URL Dinámica con Grupos

Cuando compartas URLs con grupos específicos (ejemplo: `/1`), WhatsApp mostrará la misma información de la página principal. Los meta tags dinámicos por grupo requerirían:

- Server-Side Rendering (SSR) con Next.js, o
- Generación de páginas estáticas con diferentes meta tags

Para este proyecto, todos los grupos compartirán la misma vista previa, que es apropiado ya que es la misma boda.

## Ejemplo de Cómo se Verá

Cuando compartas en WhatsApp:

```
┌─────────────────────────────┐
│  [Imagen: portada-flores]   │
├─────────────────────────────┤
│ Invitación Boda Avigail     │
│ y Ronald                    │
├─────────────────────────────┤
│ Invitaciones para la Boda   │
│ de Avigail y Ronald         │
│ Diciembre 27 2025           │
├─────────────────────────────┤
│ wedding-invitations-woad... │
└─────────────────────────────┘
```

## Despliegue Recomendado

### Vercel (Recomendado)

1. Crea una cuenta en https://vercel.com
2. Conecta tu repositorio de GitHub
3. Vercel automáticamente detectará que es un proyecto React
4. Desplegará automáticamente

### Netlify

1. Crea una cuenta en https://netlify.com
2. Arrastra la carpeta `build` después de ejecutar `npm run build`
3. O conecta tu repositorio de GitHub

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Agrega a `package.json`:
```json
"homepage": "https://tuusuario.github.io/wedding-invitations",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Luego ejecuta:
```bash
npm run deploy
```

## Probar Antes de Compartir

Antes de compartir masivamente:

1. Despliega la página
2. Comparte el enlace a ti mismo en WhatsApp
3. Verifica que se vea correctamente
4. Prueba los enlaces con diferentes IDs de grupo
5. Asegúrate de que el botón de confirmación funcione

¡Ahora tu invitación está lista para compartir! 💑💍
