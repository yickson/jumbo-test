# User Profile from Jumbo Market

Script para obtener el perfil del usuario desde Jumbo.cl

### Instrucciones:

Se debe crear un archivo .env tomando en cuenta el .env.example lo puedes realizar
manualmente como puedes hacerlo con el siguiente comando:
 ```
 pnpm run copy-env
 ```
Luego de este paso se debe proceder con llenar las variables de entorno para el
usuario y el password:
```
EMAIL=tucorreo@gmail.com
PASS=123456
```
Una vez llenado estos datos:
```
pnpm install
```
(Se recomienda usar Node 18 o posterior) debe estar ubicado en la terminal
en la raíz del proyecto para que funcione.
```
pnpm run userJumbo
```
O simplemente
```
node index.js
```

**Si usas otro manejador de Node como NPM o Yarn es solo reemplazar la palabra pnpm**

![skywalker](./assets/jedi.jpeg "Jedi")
