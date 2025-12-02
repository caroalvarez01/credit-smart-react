# CrediSmart – Simulador y solicitud de crédito

Aplicación web desarrollada con React que permite a los usuarios conocer diferentes opciones de crédito, simularlos según filtros básicos y enviar una solicitud con sus datos.

## Características principales

- **Página de inicio**
  - Encabezado con logo y navegación.
  - Sección hero con mensaje principal.
  - Catálogo de productos de crédito con tarjetas (imagen, título, descripción y botón).

- **Página “Simula tu Crédito”**
  - Búsqueda por nombre de producto.
  - Filtros por monto mínimo y máximo.
  - Opción para ordenar por tasa de interés (de menor a mayor).
  - Listado de resultados usando tarjetas de crédito definidas en `creditsData.js`.

- **Página “Solicita tu Crédito”**
  - Formulario controlado con campos:
    - Nombre completo.
    - Correo electrónico.
    - Monto solicitado.
    - Plazo en meses.
    - Tipo de crédito.
  - Validaciones básicas de campos obligatorios y formatos.
  - Cálculo de una cuota mensual estimada.
  - Resumen previo de la solicitud antes de confirmar.
  - Historial de solicitudes almacenadas en memoria durante la sesión.

## Tecnologías usadas

- React con Vite.
- JavaScript.
- HTML5 y CSS3 (estilos personalizados).
- React Router para la navegación entre páginas.


