1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end
moderno. (0.75 puntos)

• ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al
menos 3 de estas ventajas.

Ventajas del uso de etiquetas semánticas:

Mejora la accesibilidad: Los lectores de pantalla para usuarios con debilidad visual organizan la lectura del contenido de acuerdo con la estructura del código. Así que un código con buenas prácticas y semánticas ayuda a que el sitio sea apto para público con diferentes necesidades.

Los buscadores y tecnologías de asistencia (como lectores de pantalla para usuarios con discapacidad visual) también pueden entender mejor el contexto y contenido de tu sitio web, lo que significa una mejor experiencia para tus usuarios.

Mejora el SEO (Optimización de Motores de Búsqueda): Los motores de búsqueda analizan el código de los sitios web para determinar cuál es el contenido que muestran y también saber cómo mostrarlo. La semántica dentro del HTML hace que estos motores entiendan mejor el sitio web que estés construyendo.

Facilita el mantenimiento del código: Cuando se trabaja con código semántico es más fácil de entender y, por lo tanto, de mantener.Por otro lado facilita la reusabilidad ya que al separar el contenido de la presentación permite que una página se pueda rediseñar con cambiar solamente el CSS.


• Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

-API de almacenamiento web (Web Storage): La API de almacenamiento web proporciona una forma de almacenar datos en el navegador del usuario sin depender de cookies o bases de datos del lado del servidor. Puede usar esta API para guardar las preferencias del usuario, la configuración u otros datos que deben persistir en todas las sesiones o páginas. La API de almacenamiento web ofrece dos tipos de almacenamiento: almacenamiento local y almacenamiento de sesión. Los datos de almacenamiento local permanecen hasta que el usuario o la aplicación los eliminan, mientras que los datos de almacenamiento de sesión se borran cuando se cierra el navegador.

Hay 2 tipos de “memorias” web storage:

    LocalStorage: Guarda información con tiempo sin tiempo definido.
    SessionStorage: Guarda información, unicamente durante una sesión. (mientras la pestaña actual este abierta, despues se borra todo).

-Geolocation:  La API de geolocalización le permite acceder a la información de ubicación del usuario, como latitud, longitud, altitud y precisión. Puede usar esta API para proporcionar servicios basados en la ubicación, como mapas, direcciones, clima y contenido local. La API de geolocalización requiere el permiso del usuario y funciona con varias fuentes, como GPS, Wi-Fi y dirección IP.

Esta API define tres métodos:

    getCurrentPosition(): Recupera la posición actual y se ejecuta una sola vez.
    watchPosition(): Recupera y actualiza la posición actual a medida que cambia de posición.
    clearWatch(): Detiene la actualización de una vista (Watch) de posición.

-API de arrastrar y soltar. La API de arrastrar y colocar permite crear interfaces de usuario que permiten al usuario arrastrar y colocar elementos en la página web. Puede usar esta API para implementar características, como carga de archivos, listas reordenables o diseños personalizables. La API de arrastrar y colocar utiliza eventos y atributos para controlar la interacción entre los elementos de origen y destino. 

• Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos
CSS sobre el mismo elemento en su visualización en diferentes dispositivos
(diferentes tamaños de pantalla).

Un media query consiste en un tipo de medio y al menos una consulta que limita las hojas de estilo utilizando características del medio como ancho, alto y color. Se entiende como un módulo CSS3 que permite adaptar la representación del contenido a características del dispositivo.

Añadidos en CSS3, los media queries dejan que la presentación del contenido se adapte a un rango específico de dispositivos de salida sin tener que cambiar el contenido en sí. Es lo que se llama en inglés un diseño responsive, o sea, que se adapta a cada dispositivo (computadoras de escritorio, tabletas y teléfonos móviles) según el tamaño de la pantalla .

• Cita al menos 4 de las características principales de TypeScript (importante
superset de JavaScript que trataremos en el siguiente capítulo).

1.Tipado estático:TypeScript tiene un sólido sistema de tipado que permite especificar los tipos de variables y parámetros de funciones en tiempo de compilación. Esto permite la detección temprana de errores relacionados con el tipo, haciendo que el código sea más fiable y menos propenso a los bugs.

En JavaScript, en cambio, las variables están tipadas dinámicamente, lo que significa que su tipo puede cambiar en tiempo de ejecución.

2.Soporte para ECMAScript 6 y superiores: TypeScript es compatible con las funciones modernas de JavaScript, incluidas las introducidas en ECMAScript 6 (ES6) y versiones posteriores.

Esto permite a los desarrolladores escribir código más limpio y expresivo utilizando características como funciones de flecha, desestructuración, literales de plantilla, etc., con comprobación de tipos añadida.

3.Orientado a objetos: TypeScript es un lenguaje orientado a objetos que admite características como clases, herencia, interfaces y módulos, lo que facilita la creación y mantenimiento de código modular y reutilizable.

4.Compilación a JavaScript: TypeScript se compila a JavaScript estándar, lo que significa que puede ejecutarse en cualquier navegador o entorno que admita JavaScript, lo que facilita la integración con proyectos existentes y la interoperabilidad con bibliotecas y marcos de trabajo JavaScript.




2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para
evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes
ventajas (0.5 puntos)

• Cita al menos 2 de estos preprocesadores.

Los preprocesadores CSS son herramientas para los desarrolladores de sitios web, que permiten traducir un código de hojas de estilo no estándar, específico del preprocesador en cuestión, a un código CSS estándar, entendible por los navegadores.

Podemos distinguir entre los prepocesadores más usados los siguientes:

Sass (Syntactically Awesome Style Sheets): Sass es uno de los preprocesadores CSS más populares. Ofrece una sintaxis más poderosa y dinámica que CSS tradicional, incluyendo características como variables, anidación, mixins, funciones, entre otros.

Less: Less es otro preprocesador CSS que también proporciona una sintaxis extendida con características como variables, mixins, operaciones matemáticas, entre otros. Se destaca por ser más ligero que Sass, pero ofrece funcionalidades similares.


• Cita al menos 4 ventajas que ofrecen estos preprocesadores.

Variables: Permiten definir valores reutilizables, lo que facilita la mantenibilidad y la actualización de estilos.

Anidación: Permite estructurar el código de manera jerárquica, reflejando la estructura del HTML, lo que hace el código más legible y fácil de entender.

Mixins: Son fragmentos de código reutilizables que pueden contener propiedades y valores CSS, lo que permite escribir estilos más concisos y modulares.

Funciones: Los preprocesadores ofrecen funciones para manipular valores CSS, como operaciones matemáticas, manipulación de colores, entre otros, lo que permite una mayor flexibilidad en la escritura de estilos.

• Explica brevemente en qué consisten los sourcemaps.

Los sourcemaps, también conocidos como mapas de origen, son archivos que mapean el código generado por un preprocesador (como Sass o Less) al código original escrito por el desarrollador. Esto permite a los desarrolladores depurar el código CSS generado directamente en el navegador o en las herramientas de desarrollo, mostrando los estilos en su forma original, lo que facilita la identificación y corrección de errores. Estos archivos especiales actúan como un puente entre el código fuente original y el código generado, de modo que le permiten a los desarrolladores depurar y entender mejor sus aplicaciones en un entorno de producción.


• Explica qué es un transpilador.

Un transpilador es una herramienta que convierte código escrito en un lenguaje de programación a otro lenguaje de programación similar, pero con algunas diferencias o extensiones. En el contexto de los preprocesadores CSS, un transpilador toma el código escrito en un preprocesador como Sass o Less y lo convierte en código CSS válido que puede ser interpretado por los navegadores web. Esto permite a los desarrolladores utilizar las características avanzadas de los preprocesadores mientras aseguran la compatibilidad con los navegadores.


3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas
como controles de versiones y herramientas de gestión de módulos (0.75 puntos).
• Cita al menos dos sistemas de control de versiones y dos herramientas de
gestión de módulos.

Sistemas de control de versiones:

Git: Git es un sistema de control de versiones distribuido y ampliamente utilizado en el desarrollo de software. Permite a los equipos de desarrollo colaborar en proyectos, realizar un seguimiento de los cambios en el código y gestionar las diferentes versiones de los archivos.

SVN (Subversion): SVN es otro sistema de control de versiones ampliamente utilizado. A diferencia de Git, SVN sigue un modelo centralizado, donde todos los cambios se registran en un único repositorio central.

Herramientas de gestión de módulos:

npm (Node Package Manager): npm es el administrador de paquetes predeterminado para el ecosistema de Node.js. Permite a los desarrolladores instalar, compartir y gestionar dependencias de proyectos de Node.js y también se utiliza para la gestión de módulos en proyectos web en general.

Yarn: Yarn es otra herramienta de gestión de paquetes desarrollada por Facebook. Ofrece un rendimiento mejorado y otras características adicionales sobre npm, como la instalación en paralelo, la garantía de la integridad del paquete y la compatibilidad con la caché local para mejorar la velocidad de las instalaciones.


• Cita y explica al menos 3 comandos de Git.

git add [archivos]: Agrega cambios en el directorio de trabajo al área de preparación para el próximo commit. Por ejemplo, git add archivo.txt agrega el archivo archivo.txt al área de preparación.

git commit -m "mensaje": Registra los cambios en el repositorio. El parámetro -m se utiliza para especificar un mensaje que describe los cambios realizados en este commit. Por ejemplo, git commit -m "Agrega nuevas funcionalidades".

git push:
git push se utiliza para enviar los cambios locales al repositorio remoto. Después de realizar cambios y hacer un commit en el repositorio local, es importante hacer un git push para actualizar el repositorio remoto con los cambios realizados.

• Cita y explica brevemente las características más definitorias de WebPack.

Webpack es una herramienta de construcción de módulos para aplicaciones web modernas. Sus características más definitorias son:

Bundling (Empaquetado): Webpack permite empaquetar todos los recursos de una aplicación, como JavaScript, CSS, imágenes, y más, en módulos individuales que pueden ser consumidos por los navegadores web.

Carga de módulos: Webpack puede cargar diferentes tipos de archivos, como JavaScript, CSS, HTML, archivos de imagen, entre otros, utilizando loaders. Esto permite modularizar y gestionar eficientemente las dependencias de una aplicación web.

Optimización: Webpack ofrece diversas técnicas de optimización, como la eliminación de código muerto, la minificación de archivos y la generación de múltiples bundles para diferentes entornos, lo que mejora el rendimiento y la eficiencia de la aplicación.