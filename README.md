# Solución al Desafío "Four Cards Layout"

Esta es una solución para el desafío [Four Card Feature Section de Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de desarrollo web mediante proyectos realistas.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
  - [Captura de Pantalla](#captura-de-pantalla)
  - [Enlaces](#enlaces)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Aprendizajes](#aprendizajes)
- [Desarrollo Futuro](#desarrollo-futuro)
- [Autor](#autor)
- [Agradecimientos](#agradecimientos)

---

## Descripción General

### Captura de Pantalla
![Captura del diseño Four Cards](./design/desktop-preview.jpg)

### Enlaces
- **URL del Sitio en Vivo**: [Ver sitio aquí](https://02-four-cards-challenge.netlify.app)

---

## Tecnologías Utilizadas
- HTML5 semántico
- CSS con propiedades personalizadas
- Flexbox y CSS Grid
- [React](https://reactjs.org/) - Biblioteca para interfaces de usuario
- Flujo de trabajo basado en **Mobile First**

---

## Características
- Diseño completamente responsive para dispositivos móviles y escritorio.
- Componentes React modulares (Header, Footer, CardContainer, Card, etc.).
- Estructura CSS limpia y reutilizable utilizando la metodología BEM.
- Mejores prácticas en diseño web responsive.

---

## Aprendizajes
En este proyecto, reforcé los siguientes conceptos:
- **Componentización en React**: Dividir la interfaz en componentes pequeños y reutilizables (por ejemplo, Header, Footer, Cards).
- **CSS Grid y Flexbox**: Combinar ambas técnicas para lograr un diseño adaptable.
- **Convención de Nombres BEM**: Mantener una estructura de clases CSS clara y consistente.
- **Flujo de trabajo con Git**: Gestionar ramas (por ejemplo, `dev` y `main`) y realizar commits estructurados.

### Ejemplo de Código
Aquí tienes un ejemplo de cómo modularicé un componente en React:

```jsx
export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Entrega confiable y eficiente</h1>
      <h2 className="header-subtitle">Impulsada por la tecnología</h2>
      <p className="header-text">
        Nuestras herramientas impulsadas por Inteligencia Artificial usan millones de datos para garantizar el éxito de tu proyecto.
      </p>
    </header>
  );
}
```

# Autor
- **Perfil en Frontend Mentor**: [Lenta, Maximiliano Carlos](https://www.frontendmentor.io/profile/Lenta-Maximiliano)
- **Perfil en GitHub**: [Lenta-Maximiliano](https://github.com/Lenta-Maximiliano)
- **LinkedIn**: [Lenta, Maximiliano Carlos](https://linkedin.com/in/Lenta-Maximiliano)

## ¿Cómo Ejecutar Localmente?

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/Lenta-Maximiliano/02-Four-Cards-Challenge.git

2. **Navega a la carpeta del proyecto:**
    ```bash
    cd 02-Four-Cards-Challenge

3. **Instala las dependencias:**
    ```bash
    npm install

4. **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev