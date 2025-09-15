# APLICACIÓN WEB DE ALGORITMOS DE MACHINE LEARNING

## DEPENDENCIAS NECESARIAS PARA REACT

### Instalar Node.js

- Si no cuentas con NodeJS puedes descargarlo e instalarlo desde: https://nodejs.org
- Versión requerida: 14 o superior

### Instalar dependencias de la aplicación
```bash
npm install
```

### Ejecutar la aplicación
```bash
npm start
```
La aplicación se abrirá en http://localhost:3000

## QUÉ HACE CADA ALGORITMO (EXPLICACIÓN SIMPLE)

### 1. REGRESIÓN LINEAL
**Qué hace:** Predice números usando una línea recta
**Ejemplo cotidiano:** Predecir cuánto gastarás en comida según tu salario
**Funciona cuando:** Hay una relación directa entre dos cosas (más salario = más gasto en comida)

### 2. REGRESIÓN LOGÍSTICA  
**Qué hace:** Predice SI o NO usando una curva
**Ejemplo cotidiano:** Predecir si lloverá según la humedad del aire
**Funciona cuando:** Quieres saber la probabilidad de que algo pase o no pase

### 3. NAÏVE BAYES
**Qué hace:** Clasifica cosas calculando probabilidades
**Ejemplo cotidiano:** Detectar mensajes spam en WhatsApp
**Funciona cuando:** Tienes características que ayudan a identificar categorías

### 4. MÁQUINAS DE VECTORES DE SOPORTE (SVM)
**Qué hace:** Separa cosas diferentes con una "línea invisible"
**Ejemplo cotidiano:** Instagram identificando si una foto tiene un perro o un gato
**Funciona cuando:** Quieres separar claramente dos grupos diferentes

### 5. ÁRBOL DE DECISIÓN
**Qué hace:** Toma decisiones paso a paso como un cuestionario
**Ejemplo cotidiano:** Decidir qué película ver en Netflix
**Funciona cuando:** Puedes hacer preguntas simples de sí/no para llegar a una decisión

### 6. K VECINOS MÁS CERCANOS (K-NN)
**Qué hace:** Recomienda cosas basándose en personas similares a ti
**Ejemplo cotidiano:** Spotify recomendándote música que les gusta a usuarios parecidos
**Funciona cuando:** "Dime con quién andas y te diré qué te gusta"

### 7. BOSQUE ALEATORIO
**Qué hace:** Combina muchas opiniones para dar una respuesta más precisa
**Ejemplo cotidiano:** Predecir si aprobarás un examen consultando múltiples factores
**Funciona cuando:** Una sola opinión no es suficiente, necesitas varias perspectivas

### 8. POTENCIACIÓN DEL GRADIENTE
**Qué hace:** Mejora predicciones corrigiendo errores paso a paso
**Ejemplo cotidiano:** Estimar el precio de un auto usado ajustando por año, kilometraje, estado, etc.
**Funciona cuando:** Quieres la máxima precisión posible

### 9. K-MEANS
**Qué hace:** Agrupa cosas similares automáticamente
**Ejemplo cotidiano:** Organizar tus contactos de WhatsApp en "Familia", "Trabajo", "Amigos"
**Funciona cuando:** Tienes muchos datos y quieres encontrar grupos naturales

## TIPOS DE APRENDIZAJE

### SUPERVISADO (8 algoritmos)
- Aprende con ejemplos que ya tienen respuesta
- Es como estudiar con un profesor que te dice si está bien o mal

### NO SUPERVISADO (1 algoritmo)  
- Encuentra patrones sin que nadie le diga qué buscar
- Es como explorar y descubrir cosas por tu cuenta

## ESTRUCTURA DE ARCHIVOS

```
ml-algorithms-app/
├── src/
│   ├── App.js          (código principal de la aplicación)
│   ├── App.css         (estilos de la aplicación)
│   └── index.js        (punto de entrada)
├── public/
├── package.json        (dependencias del proyecto)
└── README.txt          (este archivo)
```

## CARACTERÍSTICAS DE LA APLICACIÓN

- **9 algoritmos** con visualizaciones interactivas
- **Explicaciones simples** de cada algoritmo  
- **Ejemplos cotidianos** fáciles de entender
- **Gráficos dinámicos** que muestran cómo funcionan
- **Interfaz amigable** para navegar entre algoritmos
- **Diseño responsive** que funciona en celular y computadora

## COMANDOS ÚTILES

```bash
npm start          # Ejecutar en modo desarrollo
npm run build      # Crear versión para producción
npm test           # Ejecutar pruebas
npm install        # Instalar dependencias
```

## TECNOLOGÍAS UTILIZADAS

- **React**: Framework para crear la interfaz de usuario
- **Recharts**: Biblioteca para crear gráficos interactivos  
- **Lucide React**: Iconos modernos para la interfaz
- **CSS3**: Estilos y diseño responsive
- **JavaScript ES6+**: Lógica de la aplicación

## SOPORTE

Si la aplicación no funciona:
1. Verificar que Node.js esté instalado correctamente
2. Ejecutar `npm install` para instalar dependencias
3. Verificar que el puerto 3000 esté libre
4. Reiniciar la terminal y ejecutar `npm start` nuevamente