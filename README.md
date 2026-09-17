# 🌐Web del Juzgado de Paz Presidencia Roque Sáenz Peña

Esta es una página web informativa NO OFICIAL sobre los trámites disponibles en el Juzgado de Paz de la provincia del Chaco, Presidencia Roque Sáenz Peña.


## 🎯¿A quiénes está dirigida la página web?

A todo ciudadano de la ciudad de Presidencia Roque Sáenz Peña de la provincia del Chaco interesado en conocer los requisitos y/o formularios de un trámite judicial disponible en el Juzgado de Paz.


## 📦Contenido / Secciones

La página web consta de 10 páginas:
1. Home: página central con acceso a los 9 trámites disponibles.
2. Certificaciones de copias (trámite disponible N°1).
3. Certificaciones de firmas (trámite disponible N°2).
4. Información Sumaria (trámite disponible N°3).
5. Autorización Simple (trámite disponible N°4).
6. Autorización de viaje al interior (trámite disponible N°5).
7. Autorización de viaje al exterior (trámite disponible N°6).
8. Declaración Jurada (trámite disponible N°7).
9. Poderes Generales / Especiales (trámite disponible N°8).
10. Carta de pobreza (trámite disponible N°9)


## 💻Tecnologías 
Es un proyecto frontend básico, utiliza: HTML, CSS, Bootstrap y JavaScript.


## 🔧Mantenimiento
La página utiliza JavaScript para actualizar precios de los trámites dinámicamente y agregar/modificar/eliminar modelos de declaraciones juradas consumiendo un archivo JSON local.
Ambos requieren pequeñas modificaciones manuales periódicas para actualizarse.

1. "precios.js"
Pequeño script de Javascript que cargan todos los documentos ".html".
Se encarga de actualizar los precios en todas las páginas web cuando hay un cambio nacional del valor de 1 UT.
Requiere únicamente cambiar de manera manual 1 variable llamada "valor_ut_actual".

2. "declaraciones.js"
Script asociado únicamente a la pagina "declaraciones-juradas.html".
Se encarga de consumir dinámicamente un archivo JSON local llamado "dec_juradas.json" para armar una serie de elementos `<summary>` y `<details>`.
Permite agregar/modificar/eliminar modelos de "sugerencias de declaraciones juradas" fácilmente desde el archivo JSON.


## ❌Errores comunes

- Si los precios no se actualizan: verificar que "valor_ut_actual"
  esté correctamente definido en "precios.js".
- Si las declaraciones juradas no cargan: abrir el sitio con un 
  servidor local (no "file://") por restricciones de CORS.