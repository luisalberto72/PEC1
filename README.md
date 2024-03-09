- lmesamart

- Luis Alberto Mesa Martos

- En la PEC1_Ej2_1 se ha desarrollado un Validador de formularios.Para ello he construido un formulario HTML con varios campos a completar (Username, Email, Password, Confirm Password).Posteriormente he mejorado este formulario añadiendo un nuevo campo para edad, donde se debe comprobar que la edad es mayor o igual a cero e inferior a 1000.Finalmente he añadido más validaciones sobre el Password:
• Que use 8 caracteres como mínimo.
• Que contenga mayúsculas, signos, minúsculas, cifras y los siguiente signos permitidos: ` ~ ! @ # $ % ^ & * ( ) _ + - = { } | [ ] \ : " ; ' < > ? , . 
Para controlar estas validaciones he hecho uso del método test que devuelve true si la expresión regular permitida encuentra una coincidencia en la cadena de texto introducida, y false si no encuentra ninguna coincidencia.

- En la PEC1_Ej2_2 he desarrollado una calculadora de tipos de cambio de moneda.Para ello hice uso de código JavaScript para llamar a una API de terceros.La API usada se llama versión 4 de api.exchangerate-api.com y es una API que proporciona tasas de cambio de divisas actualizadas.Esta Api nos ha servido para que facilitándole una moneda base, nos devuelva el cambio al que cotiza esa moneda base respecto a otras muchas.

He realizado peticiones asíncronas con fecth llamando a la API de la siguiente forma:
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`): Donde hace una solicitud fetch para obtener los datos de las tasas de cambio desde la API y ${currency_one} es una variable que contiene el código de la moneda base.

Aparte he desarrollado las siguiente mejoras:

-Cuando se realiza la consulta al API, indicar estado de espera mediante logo o mensaje por pantalla. En este caso muestro el mensaje por pantalla siguiente: Please wait...
Este mensaje lo obtengo a través de const waitMessage = document.querySelector('.wait-message'); y lo muestro a través de la función showWaitMessage o lo oculto mediante  waitMessage.style.display = 'none'; una vez se actualicen los datos.

-Si se produce un error al hacer la consulta al API mostrar un mensaje con el error. En el codigo se controlan dos errores:
1- .then(res => { ... }): Maneja la respuesta de la solicitud fetch. Si la respuesta no es satisfactoria (por ejemplo, si hay un error de red), lanza un error.
2- .catch(error => { ... }): Captura cualquier error que ocurra durante el proceso de solicitud y muestra un mensaje de error al usuario.

-No permitir números negativos. Para ello uso campos input type="number" con un valor mínimo de 0.

- En la PEC1_Ej2_3 he desarrollado una pequeña aplicación para la reserva de asientos de películas, donde he usado  almacenamiento local del navegador.Para ello he usado localStorage que es una API de almacenamiento web que permite almacenar datos de manera persistente en el navegador web. Esta API proporciona una forma sencilla de almacenar datos clave-valor en el navegador, similar a las cookies, pero con una mayor capacidad de almacenamiento y sin enviar los datos al servidor con cada solicitud HTTP.

Además he integrado esta aplicación con la Calculadora de tipos de cambio de moneda de forma quela aplicación realizada para reserva de asientos de cine permita seleccionar la moneda en la que trabajara la aplicación y se ofrezcan tanto los precios de las películas, como los precios finales en la moneda seleccionada.Para ello he usado un desplegable que me permita seleccionar la moneda y he usado una función fetchExchangeRate que utiliza el enfoque de programación asíncrona de JavaScript, utilizando async/await, para obtener la tasa de cambio desde USD a una moneda seleccionada.