---
title: Política de privacidad de Thorium Reader
description: ''
draft: 'false'
images:
  - logo.png
weight: 903
toc: 'false'
---

22 de noviembre de 2022

## Propietario de la aplicación

LaboraThorium  Europeo de Lectura Digital 14 rue Alexandre Parodi 75010 París Francia

## Tipos de datos recopilados

La aplicación no recopila datos personales de sus usuarios.

La aplicación envía dos tipos de datos no personales a los servidores:

1/ Datos de uso genéricos: cada vez que se inicia la aplicación se envía una notificación a un servidor de telemetría de EDRLab. Esta información es solo para fines analíticos y no es accesible para terceros. Se utiliza para obtener información sobre la evolución del número de instalaciones de la aplicación por sistema operativo, la evolución de las sesiones de uso y las principales configuraciones regionales en uso.

Los parámetros de dicha notificación son:

- una marca de tiempo,
- la versión de Thorium Reader,
- el sistema operativo del dispositivo y su versión,
- la configuración regional de la aplicación en el momento en que se inicia,
- Si este es el primer inicio de Thorium Reader después de una nueva instalación.

La dirección IP del dispositivo no se almacena junto con la información anterior.

No es posible optar por no recibir esta notificación.

2/ Información sobre DRM de Readium LCP: cada vez que se abre una publicación protegida se envía una notificación a un servidor LCP. Esto es un requisito de la especificación LCP para comprobar si se ha actualizado la licencia de uso de la publicación. No existe un servidor LCP centralizado, cada servidor es operado por el distribuidor de la publicación protegida adquirida por el usuario.

Los parámetros de dicha notificación son:

- un identificador de dispositivo, generado automáticamente al instalar la aplicación.
- un nombre de dispositivo, generado automáticamente al instalar la aplicación.

El código base de Thorium Reader es de código abierto y, por lo tanto, se puede inspeccionar por completo, con la excepción de una pequeña biblioteca de software utilizada como núcleo para Readium LCP DRM, que no almacena ni envía ningún dato.

## Actualizaciones

Es posible que modifiquemos la Política de privacidad de vez en cuando. Le notificaremos mediante la publicación de la Política de privacidad revisada en esta página y la fecha en la que se realizaron los últimos cambios se indicará en la parte superior de la página.
