PUM! Proyecto de pujas en línea

Descripción
Este proyecto consiste en un sitio web de pujas en línea, donde los usuarios pueden explorar productos, marcas y realizar pujas en tiempo real. Utiliza una arquitectura de componentes basada en Angular, junto con servicios y interfaces para la gestión de datos.

Componentes
El proyecto consta de los siguientes componentes:

Header: Encabezado del sitio web, siempre presente en la parte superior de la página.
Footer: Pie de página del sitio web, siempre presente en la parte inferior de la página.
Section: Componente para mostrar secciones específicas del contenido, como productos, marcas, etc.
Nav: Componente de navegación para explorar diferentes secciones del sitio.
Main: Componente principal que muestra el contenido principal del sitio web.
Login: Componente para iniciar sesión de los usuarios.
Lista: Componente para mostrar listas de elementos, como productos o marcas.
Interfases: Archivo que define las interfaces de datos utilizadas en el proyecto.
Categories: Componente para mostrar y explorar categorías de productos o marcas.
Interfaces
El proyecto utiliza las siguientes interfaces para definir la estructura de los datos:

Users: Interfaz que describe la estructura de los usuarios registrados en el sitio.
Marcas: Interfaz que define la estructura de las marcas de productos.
Items: Interfaz que especifica la estructura de los productos disponibles para la subasta.
Servicio
El servicio proporciona métodos para interactuar con la base de datos y obtener datos necesarios para mostrar en el sitio web. Algunas funciones destacadas del servicio son:

getItems: Retorna la lista de productos disponibles para la subasta.
getMarcas: Obtiene la lista de marcas disponibles en el sitio.
getUsers: Recupera la lista de usuarios registrados en la plataforma.
Funcionamiento
Cuando se accede al sitio web, se muestra inicialmente el header y el footer en todas las páginas. La ruta por defecto dirige al componente Main, que a su vez muestra varias secciones con productos, marcas y otros contenidos almacenados en la base de datos.

Para iniciar sesión, los usuarios deben hacer clic en el icono de usuario en el header, lo que despliega un formulario de inicio de sesión. También se proporciona la opción de registro para nuevos usuarios.

Este README proporciona una visión general del proyecto y sus componentes principales. Para más detalles sobre la implementación y funcionamiento de cada componente, consulte la documentación y el código fuente del proyecto.
