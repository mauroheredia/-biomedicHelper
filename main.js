// Base de datos técnica para Biomedic Helper
// Incluye Tomógrafos, Desfibriladores/DEA, Monitores Multiparámetro, Electrocardiógrafos y Ecógrafos.
const biomedicData = {
    categorias: [
        {
            nombre: "Tomógrafos",
            marcas: [
                {
                    nombre: "Siemens Healthineers",
                    modelos: [
                        {
                            nombre: "SOMATOM Definition Edge",
                            fallas: [
                                {
                                    titulo: "Falla de comunicación entre Gantry y consola (Error 5003)",
                                    solucion: "Diagnóstico: Pérdida de paquetes en la red de fibra óptica o problema con el módulo de interfaz (IMC). Pasos de Reparación: 1. Verificar visualmente la limpieza y el estado de la conexión de fibra óptica principal. 2. Ejecutar la herramienta 'Network Status' para verificar la tasa de errores. 3. Reemplazar cable de fibra o módulo SFP. 4. Intentar un reinicio en frío del Gantry."
                                },
                                {
                                    titulo: "Mensaje de baja presión de aceite en tubo (Alarma 4301)",
                                    solucion: "Diagnóstico: Problema crítico en el circuito de enfriamiento del tubo. Puede ser una fuga, un fallo de la bomba de aceite o un sensor de presión engañoso. Pasos de Reparación: 1. Inspeccionar el intercambiador de calor y las mangueras. 2. Medir la resistencia del sensor de presión de aceite. 3. Si el nivel de aceite es bajo, rellenar con aceite dieléctrico específico y purgar el aire del sistema."
                                }
                            ],
                            manuales: [
            
                                { titulo: "Referencia Técnica - Instalación Gantry (Scribd)", url: "https://www.scribd.com/document/624930698/c2-028-812-02-14-02" }
                            ],
                            comentarios: "«El problema recurrente con el sistema de adquisición de datos (DAS) en estos modelos es generalmente solucionable mediante la recalibración bianual de los detectores. El comando de recalibración se encuentra en el submenú 'Servicio/Calibración Avanzada'.» (Comentario traducido automáticamente al español)"
                        },
                        {
                            nombre: "SOMATOM Perspective",
                            fallas: [
                                { titulo: "Ruido excesivo en las imágenes", solucion: "Causa Principal: Desviación de la calibración del detector o falta de calentamiento del tubo. Solución: 1. Ejecutar el protocolo de calentamiento del tubo. 2. Realizar la calibración diaria de aire/agua. 3. Si el ruido persiste, verificar la desviación en el voltaje de polarización del detector (Bias Voltage)." },
                            ],
                            manuales: [],
                            comentarios: "«La fuente de alimentación de alta tensión es sensible a las fluctuaciones de energía. Recomiendo un UPS industrial dedicado (con doble conversión) para prevenir fallos prematuros.» (Comentario traducido automáticamente al español)"
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Desfibriladores / DEA",
            marcas: [
                {
                    nombre: "Philips",
                    modelos: [
                        {
                            nombre: "HeartStart FRx (DEA)",
                            fallas: [
                                {
                                    titulo: "Luz de estado parpadeando en rojo (Falló la autocomprobación)",
                                    solucion: "Diagnóstico: El 90% de las veces es batería o pads caducados. Pasos de Reparación: 1. Verificar la fecha de caducidad de los electrodos (pads) y el estado de la batería. Reemplazar ambos. 2. Si el fallo persiste, el problema es interno de la placa principal o la placa de carga de alto voltaje. 3. Retirar la batería por 5 segundos y reinstalarla para forzar una autocomprobación completa."
                                },
                                {
                                    titulo: "El equipo no emite descarga aunque la indica (Error de Alto Voltaje)",
                                    solucion: "Causa Crítica: Falla del relé de descarga o del capacitor de almacenamiento de energía. Es una falla grave de seguridad. Pasos de Reparación: 1. Desconectar la unidad de la batería y descargar manualmente el capacitor de HV (SOLO personal capacitado). 2. Medir la capacitancia del capacitor principal. 3. Si es necesario reemplazar el conjunto de HV, se debe calibrar el nivel de energía de salida con un analizador de desfibriladores."
                                }
                            ],
                            manuales: [
                                { titulo: "Manual de Referencia Técnica FRx", url: "https://cpr-savers.com/assets/images/PDF/861304-Technical-Reference-English.pdf" },
                                { titulo: "Manual del Usuario FRx (Español)", url: "https://www.manual.bo/philips/heartstart-frx-861304/manual" }
                            ],
                            comentarios: "«El fallo más común es que los usuarios olvidan reemplazar la batería de larga duración, lo que anula la autocomprobación diaria.» (Comentario traducido automáticamente al español)"
                        }
                    ]
                },
                {
                    nombre: "Zoll",
                    modelos: [
                        {
                            nombre: "AED Plus",
                            fallas: [{ titulo: "El equipo no detecta los electrodos conectados", solucion: "Revisar la conexión del cable de electrodos (CPR-D Padz) al puerto 'Padz' del DEA. Verificar la continuidad del cable y medir la impedancia entre los electrodos. Limpiar el puerto de conexión del equipo con aire comprimido." }],
                            manuales: [ { titulo: "Manual de Referencia Técnica FRx", url: "https://www.uma.es/media/files/ZOLL_AED_Plus-Manual.pdf" }

                            ],
                            comentarios: "«Asegúrese de que la versión del firmware sea la más reciente para evitar falsos positivos en el análisis de ritmo.» (Comentario traducido automáticamente al español)"
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Monitores Multiparámetro",
            marcas: [
                {
                    nombre: "Mindray",
                    modelos: [
                        {
                            nombre: "BeneVision N Series",
                            fallas: [
                                { titulo: "Lectura errónea o ausente de SpO2", solucion: "Diagnóstico: Falla en la cadena de medición (sensor → cable → módulo → placa principal). Pasos: 1. Probar el sensor y el cable en un monitor que funcione. 2. Verificar la alimentación (tensión) en el módulo de SpO2 (típicamente 5V o 3.3V). 3. Si la falla persiste, reemplazar la placa de procesamiento de señales del módulo." },
                                { titulo: "Pantalla táctil no responde o se 'congela'", solucion: "Causa: Error de software o fallo del digitalizador. Pasos: 1. Acceder al menú de calibración (requiere contraseña de servicio) y recalibrar los puntos. 2. Si la calibración falla, ejecutar la prueba de hardware. Si la prueba falla, reemplazar el digitalizador." }
                            ],
                            manuales: [
                                { titulo: "Manual de Servicio BeneVision N Series", url: "https://es.scribd.com/document/728758305/BeneVision-N17N15N12N12C-Service-Manual-V6-0-ES" }
                            ],
                            comentarios: "«La integración con el HIS (Hospital Information System) es muy sensible a la configuración de red. Verificar el puerto y la velocidad de comunicación. La placa de red suele fallar por sobretensiones.» (Comentario traducido automáticamente al español)"
                        }
                    ]
                },
                {
                    nombre: "Dräger",
                    modelos: [
                        {
                            nombre: "Infinity Delta XL",
                            fallas: [{ titulo: "Problemas con el módulo de CO2 - 'Check Water Trap'", solucion: "Diagnóstico: Flujo de muestreo obstruido o trampa de agua saturada. Pasos: 1. Reemplazar la trampa de agua inmediatamente. 2. Realizar una prueba de fugas y calibración de gas. Si el valor de flujo está fuera de rango, se necesita reemplazar la bomba de muestreo o el sensor de flujo masivo." }],
                            manuales: [
                                { titulo: "Guía del Usuario Vista XL (Referencia)", url: "http://www.ingenieriabahia.com.ar/manuales/vistaxl.pdf" }
                            ],
                            comentarios: "«Siempre probar el módulo sospechoso en otra unidad base para aislar si el fallo es del módulo o del puerto de comunicación de la base.» (Comentario traducido automáticamente al español)"
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Electrocardiógrafos",
            marcas: [
                {
                    nombre: "GE Healthcare",
                    modelos: [
                        {
                            nombre: "MAC 2000",
                            fallas: [
                                {
                                    titulo: "Artefactos en todas las derivaciones (Ruido de línea de 50/60 Hz)",
                                    solucion: "Diagnóstico: Mala conexión a tierra o interferencia electromagnética (EMI). Pasos de Reparación: 1. Verificar la continuidad del cable de tierra del enchufe de alimentación. 2. Asegurarse de que el paciente esté bien conectado a tierra y que no haya otros equipos grandes cerca. 3. Ejecutar el test de 'Calibración de Ruido' desde el menú de servicio. Si el ruido persiste, el módulo de adquisición (AEM) podría necesitar ser reemplazado."
                                },
                                {
                                    titulo: "Falla de impresión (Papel atascado o impresión en blanco)",
                                    solucion: "Causa Principal: Falla del motor de la impresora térmica o cabezal sucio. Pasos de Reparación: 1. Limpiar el cabezal térmico con alcohol isopropílico. 2. Revisar la tensión y la conexión del motor de avance de papel. 3. Si el motor no gira, verificar el driver del motor en la placa principal."
                                }
                            ],
                            manuales: [
                                { titulo: "Guía de Mantenimiento MAC 2000 (PDF)", url: "https://www.gehealthcare.es/-/jssmedia/gehc/spain/diagnostic-cardiology-solutions/new-dec-2023/mac-2000-ecg-analysis-system-op-mnl-es_um_2053535-031_r.pdf?rev=-1&hash=1506826A7948AB0FF2EB68E8D2D6DA17" }
                            ],
                            comentarios: "«La interfaz RS232 para exportar datos es propensa a fallos si se usa con adaptadores USB/Serial genéricos. Recomiendo usar el adaptador original de GE o la interfaz LAN.» (Comentario traducido automáticamente al español)"
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Ecógrafos",
            marcas: [
                {
                    nombre: "Philips",
                    modelos: [
                        {
                            nombre: "Affiniti 50",
                            fallas: [
                                { titulo: "Imagen en B-Mode con bandas oscuras intermitentes", solucion: "Diagnóstico: Problema en el transductor (cristales dañados) o en el hardware de procesamiento del haz (Beamformer). Pasos: 1. Probar con un transductor diferente. 2. Si la falla desaparece, el transductor está defectuoso. 3. Si el problema persiste con varios transductores, el problema es el 'Beamformer' y requiere un reemplazo de la placa de procesamiento." },
                                { titulo: "El equipo se reinicia durante la exploración (Falla de PSU)", solucion: "Causa Principal: Falla en la fuente de alimentación (PSU) o sobrecalentamiento. Pasos: 1. Limpiar todos los filtros de aire del sistema. 2. Monitorear los voltajes de salida de la PSU bajo carga. 3. Si los voltajes caen o son inestables, reemplazar la PSU." }
                            ],
                            manuales: [
                                { titulo: "Manual de Servicio Affiniti 50 (Referencia)", url: "https://es.scribd.com/document/806937563/12-Manual-de-servicio-Espanol" }
                            ],
                            comentarios: "«El disco duro o SSD suele fallar debido al intenso uso de guardar imágenes. Se recomienda hacer copias de seguridad de forma rutinaria y verificar el estado del disco en el menú de diagnóstico.» (Comentario traducido automáticamente al español)"
                        }
                    ]
                }
            ]
        }
    ],
    // Objeto temporal para almacenar los datos que se están visualizando
    currentView: {
        categoria: null,
        marca: null,
        modelo: null,
        // Añadimos una pila simple para rastrear el historial de navegación
        history: ['home'] 
    }
};

// Referencias a los elementos del DOM
const appContainer = document.getElementById('app');
const mainTitle = document.getElementById('main-title');
// Eliminamos la referencia a headerBack

// --- Funciones de Utilidad ---

/**
 * Genera el HTML del botón de retroceso que se añade al final de las vistas.
 */
function createBackButtonHTML() {
    // Solo se renderiza si no estamos en 'home'
    if (biomedicData.currentView.history.length > 1) {
        return `
            <button class="back-button-footer" onclick="goBack()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver
            </button>
        `;
    }
    return '';
}

/**
 * Función auxiliar para encontrar un modelo específico en la base de datos.
 * @param {string} modelName - Nombre del modelo a buscar.
 * @returns {object|null} El objeto modelo si se encuentra.
 */
function findModel(modelName) {
    const { categoria, marca } = biomedicData.currentView;
    if (!categoria || !marca) return null;

    const categoriaData = biomedicData.categorias.find(c => c.nombre === categoria.nombre);
    const marcaData = categoriaData ? categoriaData.marcas.find(m => m.nombre === marca.nombre) : null;
    const modeloData = marcaData ? marcaData.modelos.find(m => m.nombre === modelName) : null;
    
    return modeloData;
}


/**
 * Función central de navegación/renderizado.
 * @param {string} viewKey - La clave de la vista a renderizar ('home', 'categorias', 'marcas', 'modelos', 'ficha').
 * @param {object} data - Datos necesarios para la vista. Puede contener 'categoria', 'marca', o 'modelo'.
 * @param {boolean} isBackNavigation - Indica si esta llamada proviene de la función goBack.
 */
function navigate(viewKey, data = {}, isBackNavigation = false) {
    // 1. Limpiar el contenido anterior
    appContainer.innerHTML = '';
    
    // 2. Controlar la pila de historial (a menos que sea una navegación "hacia atrás")
    if (!isBackNavigation) {
        // Si no es home, agregamos la nueva vista a la pila
        if (viewKey !== 'home') {
            biomedicData.currentView.history.push(viewKey);
        } else {
            // Si es 'home', resetear el historial
            biomedicData.currentView.history = ['home'];
        }
    } else {
        // Si es navegación hacia atrás, ya se hizo pop en goBack(), solo actualizamos el título si volvimos al inicio
        if (viewKey === 'home') {
             biomedicData.currentView.history = ['home']; // Asegurar que solo quede 'home'
        }
    }
    
    // 3. Actualizar el estado de la vista actual y el título
    switch (viewKey) {
        case 'categorias':
            biomedicData.currentView = { ...biomedicData.currentView, categoria: null, marca: null, modelo: null };
            mainTitle.textContent = 'Seleccionar Categoría';
            renderCategorias();
            break;
        case 'marcas':
            const categoriaData = biomedicData.categorias.find(c => c.nombre === data.categoria);
            biomedicData.currentView = { ...biomedicData.currentView, categoria: categoriaData, marca: null, modelo: null };
            mainTitle.textContent = `Marcas de ${data.categoria}`;
            renderMarcas(categoriaData);
            break;
        case 'modelos':
            const catForModel = biomedicData.categorias.find(c => c.nombre === data.categoria);
            const marcaData = catForModel ? catForModel.marcas.find(m => m.nombre === data.marca) : null;
            biomedicData.currentView = { ...biomedicData.currentView, categoria: catForModel, marca: marcaData, modelo: null };
            mainTitle.textContent = `Modelos de ${data.marca}`;
            renderModelos(marcaData);
            break;
        case 'ficha':
            biomedicData.currentView = { ...biomedicData.currentView, modelo: data.modelo };
            mainTitle.textContent = data.modelo.nombre;
            renderFichaEquipo(data.modelo); 
            break;
        case 'home':
        default:
            biomedicData.currentView = { categoria: null, marca: null, modelo: null, history: ['home'] };
            mainTitle.textContent = 'Biomedic Helper';
            renderHome();
            viewKey = 'home';
            break;
    }

    // 4. Agregar la clave de la vista como un atributo de datos al contenedor principal
    appContainer.dataset.currentScreen = viewKey;
}

/**
 * Lógica para la navegación hacia atrás (llamada por el nuevo botón del footer).
 */
function goBack() {
    const history = biomedicData.currentView.history;
    
    // Si solo queda 'home' o la pila está vacía, no hacemos nada
    if (history.length <= 1) {
        navigate('home', {}, true);
        return;
    }

    // Sacamos la vista actual de la pila (ej: 'ficha' sale)
    history.pop(); 
    
    // La vista anterior es la que queda en el tope de la pila (ej: 'modelos')
    const previousViewKey = history[history.length - 1]; 
    const currentView = biomedicData.currentView;

    // Lógica de navegación inversa basada en la vista anterior
    if (previousViewKey === 'modelos') {
        // Necesita cat y marca para volver a renderizar
        navigate('modelos', {
            marca: currentView.marca.nombre,
            categoria: currentView.categoria.nombre
        }, true); // El true es importante para no añadir de nuevo la vista a la pila
    } else if (previousViewKey === 'marcas') {
        // Necesita cat para volver a renderizar
        navigate('marcas', {
            categoria: currentView.categoria.nombre
        }, true);
    } else if (previousViewKey === 'categorias') {
        // Simplemente llama a categorías
        navigate('categorias', {}, true);
    } else {
        // Fallback: Home
        navigate('home', {}, true);
    }
}


// --- Funciones de Renderizado ---

function renderHome() {
    appContainer.innerHTML = `
        <div class="card card-action" onclick="navigate('categorias')">
            <h2 class="card-title">Explorar Equipos</h2>
            <p class="card-description">Accede a fallas y soluciones por categoría y marca.</p>
        </div>
    `;
    // No hay botón "Atrás" en Home
}

function renderCategorias() {
    const categoriasHtml = biomedicData.categorias.map(cat => `
        <div class="card card-action" onclick="navigate('marcas', {categoria: '${cat.nombre}'})">
            <h2 class="card-title">${cat.nombre}</h2>
        </div>
    `).join('');

    appContainer.innerHTML = `
        <div class="content-grid">${categoriasHtml}</div>
        ${createBackButtonHTML()}
    `;
}

function renderMarcas(categoriaData) {
    if (!categoriaData) {
        appContainer.innerHTML = '<p class="error-message">Error: Categoría no encontrada.</p>';
        return;
    }

    const marcasHtml = categoriaData.marcas.map(marca => `
        <div class="card card-action" onclick="navigate('modelos', {marca: '${marca.nombre}', categoria: '${categoriaData.nombre}'})">
            <h2 class="card-title">${marca.nombre}</h2>
        </div>
    `).join('');

    appContainer.innerHTML = `
        <div class="content-grid">${marcasHtml}</div>
        ${createBackButtonHTML()}
    `;
}

/**
 * Función que se llama desde el onclick de un modelo.
 * Busca el objeto completo del modelo y llama a navigate.
 * @param {string} modelName - Nombre del modelo clickeado.
 */
function handleModelClick(modelName) {
    const modelo = findModel(modelName);
    if (modelo) {
        navigate('ficha', { modelo: modelo });
    } else {
        console.error('Modelo no encontrado:', modelName);
        appContainer.innerHTML = '<p class="error-message">Error: Modelo no encontrado para la navegación.</p>';
    }
}

function renderModelos(marcaData) {
    if (!marcaData) {
        appContainer.innerHTML = '<p class="error-message">Error: Marca o Categoría no encontrada.</p>';
        return;
    }

    const modelosHtml = marcaData.modelos.map((modelo) => {
        return `
            <div class="card card-action" onclick="handleModelClick('${modelo.nombre}')">
                <h2 class="card-title">${modelo.nombre}</h2>
            </div>
        `;
    }).join('');

    appContainer.innerHTML = `
        <div class="content-grid">${modelosHtml}</div>
        ${createBackButtonHTML()}
    `;
}

/**
 * Renderiza la ficha técnica completa de un equipo específico (SOLO RENDERIZA).
 * @param {object} modelo - El objeto del modelo de equipo.
 */
function renderFichaEquipo(modelo) {
    
    // 2. Renderizar contenido específico (Acordeones, Manuales, Comentarios)
    const fallasHtml = modelo.fallas.map((falla, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion('content-falla-${index}')">
                ${falla.titulo}
                <span class="accordion-icon">+</span>
            </button>
            <div id="content-falla-${index}" class="accordion-content hidden">
                <p><strong>Diagnóstico/Solución:</strong></p>
                <p>${falla.solucion}</p>
            </div>
        </div>
    `).join('');

    const manualesHtml = modelo.manuales && modelo.manuales.length > 0 ?
        modelo.manuales.map((manual, index) => `
            <a href="${manual.url}" target="_blank" class="manual-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                    <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375C3.75 2.439 4.59 1.5 5.625 1.5zM3.75 11.25v2.25H4.5v-2.25H3.75zM7.5 11.25v2.25H9v-2.25H7.5zM11.25 11.25v2.25H12v-2.25h-0.75zM15 11.25v2.25H15.75v-2.25H15zM18.75 11.25v2.25H19.5v-2.25H18.75zM22.5 11.25v2.25H23.25v-2.25H22.5zM3.75 15v2.25H4.5v-2.25H3.75zM7.5 15v2.25H9v-2.25H7.5zM11.25 15v2.25H12v-2.25h-0.75zM15 15v2.25H15.75v-2.25H15zM18.75 15v2.25H19.5v-2.25H18.75zM22.5 15v2.25H23.25v-2.25H22.5zM3.75 18.75V21H23.25v-2.25H3.75zM1.5 3.375v4.5A3.75 3.75 0 005.25 11.25h17.25v-9.75H5.25A3.75 3.75 0 001.5 3.375z" clip-rule="evenodd" />
                </svg>
                ${manual.titulo}
            </a>
        `).join('') : '<p class="no-data-message">No hay manuales de referencia disponibles.</p>';

    const comentariosHtml = modelo.comentarios ? `
        <div class="card mt-6">
            <h3 class="card-subtitle">Comentarios de Foros / Notas Técnicas</h3>
            <p class="comment-text">${modelo.comentarios}</p>
        </div>
    ` : '<div class="card mt-6"><p class="no-data-message">No hay comentarios de la comunidad disponibles.</p></div>';


    appContainer.innerHTML = `
        <div class="screen" id="screen-ficha">
            <!-- Sección de Fallas y Soluciones -->
            <div class="accordion-container">
                <h3 class="card-subtitle">Fallas Comunes y Soluciones Rápidas</h3>
                ${fallasHtml}
            </div>

            <!-- Sección de Manuales y Documentación -->
            <div class="card mt-6">
                <h3 class="card-subtitle">Manuales y Enlaces Útiles</h3>
                <div class="manual-list">
                    ${manualesHtml}
                </div>
            </div>

            <!-- Sección de Comentarios de Foros -->
            ${comentariosHtml}
        </div>
        ${createBackButtonHTML()}
    `;
}

/**
 * Lógica para el acordeón.
 * @param {string} contentId - El ID del contenido a mostrar/ocultar.
 */
function toggleAccordion(contentId) {
    const content = document.getElementById(contentId);
    const button = content.previousElementSibling; // El botón es el elemento anterior
    const icon = button.querySelector('.accordion-icon');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        button.classList.add('active');
        icon.textContent = '–'; // Guion largo
    } else {
        content.classList.add('hidden');
        button.classList.remove('active');
        icon.textContent = '+';
    }
}

// Inicialización: Inicia la aplicación al cargar el script
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar la aplicación en la vista 'home'
    navigate('home');
});