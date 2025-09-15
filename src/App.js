import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChevronLeft, BookOpen, BarChart3, Brain, TrendingUp } from 'lucide-react';
import './App.css';

const MLAlgorithmsApp = () => {
  const [currentView, setCurrentView] = useState('menu');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  // Datos de ejemplo para las visualizaciones
  const linearRegressionData = [
    { x: 1, y: 2.1, predicted: 2.0 },
    { x: 2, y: 3.9, predicted: 4.0 },
    { x: 3, y: 6.1, predicted: 6.0 },
    { x: 4, y: 7.8, predicted: 8.0 },
    { x: 5, y: 10.2, predicted: 10.0 },
    { x: 6, y: 11.8, predicted: 12.0 }
  ];

  const logisticRegressionData = [
    { x: -3, y: 0.05, predicted: 0.047 },
    { x: -2, y: 0.12, predicted: 0.119 },
    { x: -1, y: 0.27, predicted: 0.269 },
    { x: 0, y: 0.5, predicted: 0.5 },
    { x: 1, y: 0.73, predicted: 0.731 },
    { x: 2, y: 0.88, predicted: 0.881 },
    { x: 3, y: 0.95, predicted: 0.953 }
  ];

  const naiveBayesData = [
    { feature: 'Palabra "oferta"', spam: 0.8, normal: 0.2 },
    { feature: 'Palabra "gratis"', spam: 0.9, normal: 0.1 },
    { feature: 'Múltiples !!!', spam: 0.7, normal: 0.3 },
    { feature: 'Remitente conocido', spam: 0.1, normal: 0.9 },
    { feature: 'Links externos', spam: 0.6, normal: 0.4 }
  ];

  const svmData = [
    // Clase A (azul)
    { x: 2, y: 3, class: 'A', isSupportVector: false },
    { x: 3, y: 4, class: 'A', isSupportVector: true },
    { x: 2.5, y: 2.5, class: 'A', isSupportVector: false },
    { x: 1.5, y: 3.5, class: 'A', isSupportVector: false },
    { x: 3.5, y: 3.5, class: 'A', isSupportVector: true },
    // Clase B (rojo)
    { x: 6, y: 6, class: 'B', isSupportVector: false },
    { x: 7, y: 7, class: 'B', isSupportVector: false },
    { x: 5.5, y: 6.5, class: 'B', isSupportVector: true },
    { x: 6.5, y: 5.5, class: 'B', isSupportVector: true },
    { x: 7.5, y: 6.5, class: 'B', isSupportVector: false }
  ];

  const decisionTreeData = [
    { level: 'Raíz', feature: 'Ingresos > $50k?', yes: 70, no: 30 },
    { level: 'Nivel 1', feature: 'Edad > 30?', yes: 85, no: 55 },
    { level: 'Nivel 2', feature: 'Historial = Bueno?', yes: 95, no: 40 }
  ];

  const knnData = [
    { x: 3, y: 4, class: 'A', isNew: false },
    { x: 4, y: 3, class: 'A', isNew: false },
    { x: 2, y: 3, class: 'A', isNew: false },
    { x: 7, y: 8, class: 'B', isNew: false },
    { x: 8, y: 7, class: 'B', isNew: false },
    { x: 6, y: 8, class: 'B', isNew: false },
    { x: 5, y: 5.5, class: '?', isNew: true }
  ];

  const randomForestData = [
    { tree: 'Árbol 1', accuracy: 0.78 },
    { tree: 'Árbol 2', accuracy: 0.82 },
    { tree: 'Árbol 3', accuracy: 0.75 },
    { tree: 'Árbol 4', accuracy: 0.80 },
    { tree: 'Árbol 5', accuracy: 0.77 },
    { tree: 'Conjunto', accuracy: 0.85 }
  ];

  const gradientBoostingData = [
    { iteration: 1, error: 0.8, prediction: 0.2 },
    { iteration: 2, error: 0.6, prediction: 0.4 },
    { iteration: 3, error: 0.4, prediction: 0.6 },
    { iteration: 4, error: 0.3, prediction: 0.7 },
    { iteration: 5, error: 0.2, prediction: 0.8 },
    { iteration: 6, error: 0.15, prediction: 0.85 }
  ];

  const kmeansData = [
    // Cluster 1
    { x: 2, y: 3, cluster: 'Cluster 1', centroid: false },
    { x: 3, y: 4, cluster: 'Cluster 1', centroid: false },
    { x: 4, y: 3, cluster: 'Cluster 1', centroid: false },
    { x: 3, y: 3.3, cluster: 'Cluster 1', centroid: true },
    // Cluster 2
    { x: 8, y: 8, cluster: 'Cluster 2', centroid: false },
    { x: 9, y: 9, cluster: 'Cluster 2', centroid: false },
    { x: 7, y: 9, cluster: 'Cluster 2', centroid: false },
    { x: 8, y: 8.7, cluster: 'Cluster 2', centroid: true },
    // Cluster 3
    { x: 1, y: 8, cluster: 'Cluster 3', centroid: false },
    { x: 2, y: 9, cluster: 'Cluster 3', centroid: false },
    { x: 1, y: 7, cluster: 'Cluster 3', centroid: false },
    { x: 1.3, y: 8, cluster: 'Cluster 3', centroid: true }
  ];

  const algorithms = [
    {
      id: 'linear-regression',
      name: 'Regresión Lineal',
      category: 'Supervisado',
      description: 'Predice valores continuos mediante una línea recta',
      example: 'Predecir precio de casas según tamaño',
      icon: TrendingUp
    },
    {
      id: 'logistic-regression',
      name: 'Regresión Logística',
      category: 'Supervisado',
      description: 'Clasifica datos usando una curva en forma de S',
      example: 'Detectar spam en emails',
      icon: BarChart3
    },
    {
      id: 'naive-bayes',
      name: 'Naïve Bayes',
      category: 'Supervisado',
      description: 'Clasifica basado en probabilidades condicionales',
      example: 'Análisis de sentimientos en textos',
      icon: Brain
    },
    {
      id: 'svm',
      name: 'Máquinas de Vectores de Soporte',
      category: 'Supervisado',
      description: 'Separa clases con un hiperplano óptimo',
      example: 'Reconocimiento facial',
      icon: BookOpen
    },
    {
      id: 'decision-tree',
      name: 'Árbol de Decisión',
      category: 'Supervisado',
      description: 'Toma decisiones usando reglas if-then',
      example: 'Aprobación de créditos bancarios',
      icon: BookOpen
    },
    {
      id: 'knn',
      name: 'K Nearest Neighboors',
      category: 'Supervisado',
      description: 'Clasifica según los vecinos más similares',
      example: 'Sistema de recomendaciones',
      icon: BookOpen
    },
    {
      id: 'random-forest',
      name: 'Bosque Aleatorio',
      category: 'Supervisado',
      description: 'Combina múltiples árboles de decisión',
      example: 'Diagnóstico médico',
      icon: BookOpen
    },
    {
      id: 'gradient-boosting',
      name: 'Potenciación del Gradiente',
      category: 'Supervisado',
      description: 'Mejora modelos corrigiendo errores previos',
      example: 'Predicción de abandono de clientes',
      icon: BookOpen
    },
    {
      id: 'kmeans',
      name: 'K-Means',
      category: 'No Supervisado',
      description: 'Agrupa datos en clústeres similares',
      example: 'Segmentación de clientes',
      icon: BookOpen
    }
  ];

  const getAlgorithmDetails = (id) => {
    const details = {
      'linear-regression': {
        title: 'Regresión Lineal',
        theory: 'Los algoritmos de regresión lineal muestran o predicen la relación entre dos variables poniendo una línea recta continua a los datos. La línea se calcula con la función de coste del error cuadrático.',
        useCase: 'Perfecto para cuando gastas más dinero en comida dependiendo de cuánto ganas. Por ejemplo: si ganas $500 mil pesos gastas $150 mil en comida, si ganas $1 millón gastas $250 mil. Siempre hay una relación directa.',
        pros: ['Fácil de interpretar', 'Computacionalmente eficiente', 'No requiere muchos datos', 'Proporciona relaciones claras'],
        cons: ['Asume relación lineal', 'Sensible a outliers', 'Puede sobreajustar con muchas características'],
        formula: 'y = mx + b (donde m es la pendiente y b la intersección)',
        visualization: (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={linearRegressionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" label={{ value: 'Salario (millones)', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Gasto en comida (miles)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Scatter dataKey="y" fill="#3b82f6" name="Datos reales" />
              <Line type="linear" dataKey="predicted" stroke="#ef4444" strokeWidth={3} name="Línea de predicción" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        )
      },
      'logistic-regression': {
        title: 'Regresión Logística',
        theory: 'Utiliza una curva continua en forma de S (función sigmoide) para clasificar datos en categorías. Es ideal para problemas de clasificación binaria donde la salida es una probabilidad entre 0 y 1.',
        useCase: 'Como cuando miras el cielo y quieres saber si va a llover. Si la humedad está en 30% probablemente no llueva, pero si está en 80% es muy probable que llueva. No es una relación directa sino una curva.',
        pros: ['No asume distribución de datos', 'Menos sensible a outliers', 'Proporciona probabilidades', 'Eficiente computacionalmente'],
        cons: ['Requiere más datos', 'Asume relación lineal en espacio logit', 'Puede sobreajustar'],
        formula: 'p = 1 / (1 + e^(-z)) donde z = mx + b',
        visualization: (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={logisticRegressionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" label={{ value: 'Humedad (%)', position: 'insideBottom', offset: -5 }} />
              <YAxis domain={[0, 1]} label={{ value: 'Probabilidad de lluvia', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Scatter dataKey="y" fill="#3b82f6" name="Datos observados" />
              <Line type="monotone" dataKey="predicted" stroke="#ef4444" strokeWidth={3} name="Curva de probabilidad" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        )
      },
      'naive-bayes': {
        title: 'Naïve Bayes',
        theory: 'Calcula la probabilidad de que se produzca un evento basándose en probabilidades condicionales de características. Asume independencia entre características (asunción "naïve").',
        useCase: 'Como filtrar mensajes spam en WhatsApp. Si un mensaje tiene palabras como "GRATIS", "OFERTA", muchos signos de exclamación, y viene de un número desconocido, el algoritmo calcula la probabilidad de que sea spam.',
        pros: ['Rápido entrenamiento y predicción', 'Funciona bien con datasets pequeños', 'Maneja múltiples clases', 'Robusto a características irrelevantes'],
        cons: ['Asume independencia entre características', 'Puede ser superado por métodos más sofisticados', 'Sensible a sesgo en datos'],
        formula: 'P(spam|palabras) = P(palabras|spam) × P(spam) / P(palabras)',
        visualization: (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={naiveBayesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="feature" angle={-45} textAnchor="end" height={100} />
              <YAxis domain={[0, 1]} label={{ value: 'Probabilidad', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="spam" fill="#ef4444" name="P(característica|spam)" />
              <Bar dataKey="normal" fill="#3b82f6" name="P(característica|normal)" />
            </BarChart>
          </ResponsiveContainer>
        )
      },
      'svm': {
        title: 'Máquinas de Vectores de Soporte (SVM)',
        theory: 'Encuentra el hiperplano óptimo que maximiza el margen entre diferentes clases. Los vectores de soporte son los puntos más cercanos al hiperplano que definen la frontera de decisión.',
        useCase: 'Como cuando Instagram automáticamente identifica si en tu foto hay un perro o un gato. El algoritmo aprende las diferencias clave (orejas puntiagudas vs caídas, hocico vs nariz) y traza una "línea invisible" que separa ambos.',
        pros: ['Efectivo en alta dimensión', 'Memoria eficiente', 'Versátil con diferentes kernels', 'Funciona bien con datasets pequeños'],
        cons: ['Lento en datasets grandes', 'Sensible al escalamiento', 'No proporciona probabilidades directas'],
        formula: 'f(x) = sign(Σ αᵢyᵢK(xᵢ,x) + b) donde K es la función kernel',
        visualization: (
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={svmData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" label={{ value: 'Tamaño orejas', position: 'insideBottom', offset: -5 }} />
              <YAxis dataKey="y" label={{ value: 'Forma hocico', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Scatter 
                data={svmData.filter(d => d.class === 'A' && !d.isSupportVector)} 
                fill="#3b82f6" 
                name="Perros" 
              />
              <Scatter 
                data={svmData.filter(d => d.class === 'B' && !d.isSupportVector)} 
                fill="#ef4444" 
                name="Gatos" 
              />
              <Scatter 
                data={svmData.filter(d => d.isSupportVector)} 
                fill="#22c55e" 
                name="Casos límite"
                shape="diamond"
              />
            </ScatterChart>
          </ResponsiveContainer>
        )
      },
      'decision-tree': {
        title: 'Árbol de Decisión',
        theory: 'Divide los datos en conjuntos homogéneos usando reglas if-then. Cada nodo representa una decisión basada en una característica, creando un árbol de decisiones fácil de interpretar.',
        useCase: 'Como decidir qué película ver en Netflix: ¿Tienes tiempo? SI → ¿Te gustan las comedias? SI → ¿Ya viste esta? NO → ¡Mírala! Es como un cuestionario que te lleva paso a paso a la decisión correcta.',
        pros: ['Fácil de interpretar', 'No requiere preparación compleja', 'Maneja variables numéricas y categóricas', 'Captura interacciones no lineales'],
        cons: ['Propenso a sobreajuste', 'Inestable ante cambios', 'Sesgo hacia características con más niveles'],
        formula: 'Ganancia de información = Entropía(padre) - Σ(|hijo|/|padre|) × Entropía(hijo)',
        visualization: (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={decisionTreeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="level" />
              <YAxis label={{ value: '% Elección película', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="yes" fill="#22c55e" name="Respuesta: Sí" />
              <Bar dataKey="no" fill="#ef4444" name="Respuesta: No" />
            </BarChart>
          </ResponsiveContainer>
        )
      },
      'knn': {
        title: 'K Vecinos Más Cercanos (K-NN)',
        theory: 'Clasifica cada punto nuevo basándose en la mayoría de sus K vecinos más cercanos. No requiere entrenamiento explícito - almacena todos los datos y hace predicciones calculando distancias.',
        useCase: 'Como cuando Spotify te recomienda música. Encuentra usuarios con gustos similares a los tuyos (que escuchan lo mismo) y te sugiere canciones que a ellos les gustaron. "Si a 5 personas como tú les gusta esta canción, a ti también te podría gustar".',
        pros: ['Simple de implementar', 'No requiere entrenamiento', 'Funciona con datos no lineales', 'Adaptable a nuevos datos'],
        cons: ['Computacionalmente costoso', 'Sensible a alta dimensionalidad', 'Requiere selección de K', 'Sensible a datos desbalanceados'],
        formula: 'Predicción = mayoría de clase entre los K vecinos más cercanos según distancia euclidiana',
        visualization: (
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={knnData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" label={{ value: 'Gusto por rock', position: 'insideBottom', offset: -5 }} />
              <YAxis dataKey="y" label={{ value: 'Gusto por pop', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Scatter 
                data={knnData.filter(d => d.class === 'A')} 
                fill="#3b82f6" 
                name="Les gusta reggaeton" 
              />
              <Scatter 
                data={knnData.filter(d => d.class === 'B')} 
                fill="#ef4444" 
                name="Les gusta jazz" 
              />
              <Scatter 
                data={knnData.filter(d => d.isNew)} 
                fill="#22c55e" 
                name="Usuario nuevo"
                shape="star"
              />
            </ScatterChart>
          </ResponsiveContainer>
        )
      },
      'random-forest': {
        title: 'Bosque Aleatorio',
        theory: 'Combina múltiples árboles de decisión entrenados con subconjuntos aleatorios de datos y características. La predicción final se decide por votación mayoritaria de todos los árboles.',
        useCase: 'Como predecir si vas a aprobar un examen. Un "árbol" mira tus notas, otro tus horas de estudio, otro tu asistencia, etc. Al final todos "votan" y si la mayoría dice que aprobarás, el algoritmo predice que sí.',
        pros: ['Reduce sobreajuste', 'Maneja datasets grandes', 'Proporciona importancia de características', 'Robusto a outliers'],
        cons: ['Menos interpretable', 'Puede sobreajustar en datos ruidosos', 'Requiere más memoria'],
        formula: 'Predicción final = Votación mayoritaria de N árboles entrenados con bootstrap',
        visualization: (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={randomForestData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tree" />
              <YAxis domain={[0.7, 0.9]} label={{ value: 'Precisión predicción', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="accuracy" fill="#22c55e" name="Precisión del modelo" />
            </BarChart>
          </ResponsiveContainer>
        )
      },
      'gradient-boosting': {
        title: 'Potenciación del Gradiente',
        theory: 'Construye modelos secuencialmente, donde cada nuevo modelo corrige los errores del anterior. Combina modelos débiles para crear un modelo fuerte con alta precisión predictiva.',
        useCase: 'Como estimar el precio de un auto usado. Primero mira el año y da un precio aproximado, luego ve que se equivocó y ajusta por el kilometraje, después ajusta por el estado, y así sucesivamente hasta dar un precio muy preciso.',
        pros: ['Muy alta precisión', 'Maneja diferentes tipos de datos', 'No requiere mucho preprocesamiento', 'Funciona bien por defecto'],
        cons: ['Propenso a sobreajuste', 'Requiere ajuste de hiperparámetros', 'Computacionalmente intensivo', 'Menos interpretable'],
        formula: 'F(x) = F₀(x) + Σ γₘhₘ(x) donde hₘ corrige errores de F_{m-1}',
        visualization: (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={gradientBoostingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="iteration" label={{ value: 'Iteración de corrección', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Valor', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="error" stroke="#ef4444" strokeWidth={3} name="Error del modelo" />
              <Line type="monotone" dataKey="prediction" stroke="#22c55e" strokeWidth={3} name="Precisión del modelo" />
            </LineChart>
          </ResponsiveContainer>
        )
      },
      'kmeans': {
        title: 'K-Means',
        theory: 'Agrupa datos en K clústeres donde cada punto pertenece al clúster con centroide más cercano. Los puntos dentro de cada clúster son homogéneos y heterogéneos respecto a otros clústeres.',
        useCase: 'Como organizar tus contactos de WhatsApp automáticamente. El algoritmo podría agruparlos en "Familia", "Trabajo", "Amigos de universidad" basándose en la frecuencia de mensajes, horarios, tipo de conversaciones, etc.',
        pros: ['Simple de implementar', 'Computacionalmente eficiente', 'Funciona bien con clústeres esféricos', 'Escalable'],
        cons: ['Requiere especificar K', 'Sensible a inicialización', 'Asume clústeres esféricos', 'Sensible a outliers'],
        formula: 'Minimizar: Σᵢ Σⱼ ||xᵢ - μⱼ||² donde μⱼ es el centroide del clúster j',
        visualization: (
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={kmeansData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" label={{ value: 'Frecuencia mensajes', position: 'insideBottom', offset: -5 }} />
              <YAxis dataKey="y" label={{ value: 'Horario de actividad', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Scatter 
                data={kmeansData.filter(d => d.cluster === 'Cluster 1' && !d.centroid)} 
                fill="#3b82f6" 
                name="Familia" 
              />
              <Scatter 
                data={kmeansData.filter(d => d.cluster === 'Cluster 2' && !d.centroid)} 
                fill="#ef4444" 
                name="Trabajo" 
              />
              <Scatter 
                data={kmeansData.filter(d => d.cluster === 'Cluster 3' && !d.centroid)} 
                fill="#f59e0b" 
                name="Amigos" 
              />
              <Scatter 
                data={kmeansData.filter(d => d.centroid)} 
                fill="#000000" 
                name="Centro de grupos"
                shape="cross"
              />
            </ScatterChart>
          </ResponsiveContainer>
        )
      }
    };

    return details[id];
  };

  const MenuView = () => (
    <div className="app-container">
      <div className="main-content">
        <div className="header">
          <h1>Algoritmos de Aprendizaje Automático</h1>
          <p>Explora y aprende sobre los principales algoritmos de Machine Learning con visualizaciones interactivas y explicaciones detalladas.</p>
        </div>

        <div className="algorithms-grid">
          {algorithms.map((algorithm) => {
            const Icon = algorithm.icon;
            return (
              <div
                key={algorithm.id}
                onClick={() => {
                  setSelectedAlgorithm(algorithm.id);
                  setCurrentView('algorithm');
                }}
                className="algorithm-card"
              >
                <div className="card-header">
                  <Icon className="icon" />
                  <span className={`category-badge ${algorithm.category === 'Supervisado' ? 'supervised' : 'unsupervised'}`}>
                    {algorithm.category}
                  </span>
                </div>
                <h3>{algorithm.name}</h3>
                <p className="description">{algorithm.description}</p>
                <p className="example">Ejemplo: {algorithm.example}</p>
              </div>
            );
          })}
        </div>

        <div className="learning-types">
          <h2>Tipos de Aprendizaje</h2>
          <div className="types-grid">
            <div className="type-card">
              <div className="type-icon supervised">
                <BookOpen className="icon" />
              </div>
              <h3>Supervisado</h3>
              <p>Aprende de ejemplos etiquetados para hacer predicciones</p>
            </div>
            <div className="type-card">
              <div className="type-icon unsupervised">
                <Brain className="icon" />
              </div>
              <h3>No Supervisado</h3>
              <p>Encuentra patrones en datos sin etiquetas</p>
            </div>
            <div className="type-card">
              <div className="type-icon reinforcement">
                <BarChart3 className="icon" />
              </div>
              <h3>Por Refuerzo</h3>
              <p>Aprende mediante recompensas y castigos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AlgorithmView = () => {
    const details = getAlgorithmDetails(selectedAlgorithm);
    
    return (
      <div className="app-container">
        <div className="main-content">
          <button
            onClick={() => setCurrentView('menu')}
            className="back-button"
          >
            <ChevronLeft className="back-icon" />
            Volver al menú
          </button>

          <div className="algorithm-detail">
            <div className="algorithm-header">
              <h1>{details.title}</h1>
            </div>

            <div className="algorithm-content">
              <div className="content-grid">
                <div className="text-content">
                  <div className="section">
                    <h2>Teoría</h2>
                    <p>{details.theory}</p>
                  </div>

                  <div className="section">
                    <h2>Caso de Uso</h2>
                    <p>{details.useCase}</p>
                  </div>

                  <div className="section">
                    <h2>Fórmula Principal</h2>
                    <div className="formula">
                      {details.formula}
                    </div>
                  </div>
                </div>

                <div className="visualization-content">
                  <h2>Visualización Interactiva</h2>
                  <div className="chart-container">
                    {details.visualization}
                  </div>
                </div>
              </div>

              <div className="pros-cons-grid">
                <div className="pros-section">
                  <h3>✓ Ventajas</h3>
                  <ul>
                    {details.pros.map((pro, index) => (
                      <li key={index}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="cons-section">
                  <h3>✗ Desventajas</h3>
                  <ul>
                    {details.cons.map((con, index) => (
                      <li key={index}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return currentView === 'menu' ? <MenuView /> : <AlgorithmView />;
};

export default MLAlgorithmsApp;