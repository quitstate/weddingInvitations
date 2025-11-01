# Instrucciones de Uso - Sistema de Invitaciones

## Funcionalidad de Grupos

El sistema ahora permite mostrar invitaciones personalizadas basadas en el ID de grupo de cada familia o grupo de invitados.

## Cómo Usar

### 1. Acceder a una invitación específica

Para acceder a la invitación de un grupo específico, usa la URL con el formato:

```
http://localhost:3000/{idGroup}
```

**Ejemplos:**
- Grupo 1: `http://localhost:3000/1`
- Grupo 5: `http://localhost:3000/5`
- Grupo 30: `http://localhost:3000/30`

**Importante:** Cuando accedes con un ID de grupo (ejemplo: `/1`):
1. Primero se muestra la animación de la tarjeta de invitación (el sobre)
2. Al hacer clic en "Abrir Invitación", se despliega la invitación completa
3. En el Step8 (confirmación), se mostrarán SOLO los invitados del grupo especificado

### 2. Grupos Disponibles

Según tu archivo `guestList.json`, tienes grupos del 1 al 35. Cada grupo contiene diferentes invitados:

- **Grupo 1**: Maria Jackelin Paredes, Leobardo Abreu
- **Grupo 2**: Avilio Araujo, Betania Gonzalez, Arleth Araujo
- **Grupo 3**: Abuela Maria Peña, Abuelo Chejin
- ... y así sucesivamente hasta el grupo 35

### 3. Confirmación de Asistencia

Cuando los invitados accedan a su URL personalizada:

1. Verán su lista específica de invitados en el Step8
2. Podrán marcar quiénes asistirán
3. O marcar "No podremos asistir" si ninguno puede asistir
4. Al hacer clic en "Confirmar", se abrirá WhatsApp con un mensaje pre-llenado

### 4. Mensaje de WhatsApp

El mensaje que se enviará incluirá:
- El número de grupo
- Los nombres de las personas que asistirán
- O la confirmación de que no podrán asistir

**Ejemplo de mensaje:**
```
Hola, somos del Grupo 1. Confirmamos asistencia de: Maria Jackelin Paredes, Leobardo Abreu
```

## Compartir Invitaciones

Para compartir las invitaciones con tus invitados:

1. **Durante el desarrollo (localhost):**
   - Usa ngrok o similar para crear un túnel público
   - Ejemplo: `ngrok http 3000`
   - Comparte la URL de ngrok con el ID de grupo: `https://xxx.ngrok.io/1`

2. **En producción:**
   - Despliega tu aplicación (Netlify, Vercel, etc.)
   - Comparte URLs como: `https://tu-dominio.com/1`

## Estructura del guestList.json

Cada invitado debe tener este formato:
```json
{
  "name": "Nombre del Invitado",
  "idGroup": 1,
  "isConfirm": false
}
```

- `name`: Nombre completo del invitado
- `idGroup`: Número de grupo (todos los invitados del mismo grupo verán la misma lista)
- `isConfirm`: Campo para tracking (actualmente no usado en la UI)

## Notas Importantes

- Si accedes a `/` sin especificar un grupo, verás la animación de apertura del sobre
- Si accedes a `/{idGroup}` directamente, verás la invitación completa con los invitados de ese grupo
- Si el grupo no existe o no tiene invitados, se mostrará un mensaje indicándolo
- El número de WhatsApp está configurado como `584125471717` - puedes cambiarlo en `Step8.tsx`

## Desarrollo

Para iniciar el servidor de desarrollo:
```bash
npm start
```

La aplicación se abrirá en `http://localhost:3000`
