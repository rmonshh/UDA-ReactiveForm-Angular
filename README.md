# Landing de grado universitario (Angular)

Proyecto de práctica que recrea una landing page de un grado universitario con Angular. El objetivo es aprender sobre Formularios Reactivos y a dividir una página en componentes reutilizables y a comunicarlos entre sí.

## Componentes

- `header`: logo y botón de solicitud de información.
- `landing-grado`: página principal, que reúne el hero y las secciones.
- `hero-info`: título, subtítulo y lista de ventajas del grado.
- `formulario-info`: formulario de contacto con formularios reactivos y validaciones.
- `tarjeta-ventaja`: tarjeta reutilizable con icono, título y texto, que se repite con `@for`.
- `seccion-ia`: sección informativa sobre IA generativa.

## Organización de los Componentes

app
├── app-header
└── app-landing-grado
    ├── sección hero
    │   ├── app-hero-info
    │   └── app-formulario-informacion
    └── sección "Per què estudiar"
        └── app-tarjeta-ventaja (x4)

## Qué practico

- Componentes standalone y comunicación padre-hijo con `@Input()`.
- Bucles en plantillas con `@for` e interfaces de TypeScript.
- Formularios reactivos (`FormBuilder`, `FormGroup`) con validaciones.
- Maquetación con CSS Grid y Flexbox.
- Diseño responsive con `@media`.
- Variables CSS para colores y tipografías.

## Cómo ejecutarlo

    npm install
    ng serve

Abre http://localhost:4200.

## Créditos

Proyecto con fines educativos. El diseño se basa en una página de la UOC y no está afiliado a la universidad. Foto del hero: Philipp Katzenberger, en Unsplash.



