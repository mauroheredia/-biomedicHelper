// Base de datos técnica para Biomedic Helper
const biomedicData = {
    categorias: [
        {
            nombre: "Tomógrafos",
            icono: "img/imgt.png", // RUTA LOCAL
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
            nombre: "Hemodiálisis",
            icono: "img/imgh.png", // RUTA LOCAL
            marcas: [
                {
                    nombre: "cordiaX",
                    modelos: [
                        {
                            nombre: "5008s",
                            fallas: [
                                {
                                    titulo: "Alarma: Power failure / Emergency operation (tono continuo)",
                                    solucion: "Solución rápida: verificar alimentación: toma, UPS, fusibles principales;comprobar cable de alimentación y conexión a la red. Reiniciar la máquina solo cuando la tensión sea estable. Si la alarma persiste, revisar fuente de alimentación interna y fuses (según manual de servicio)."
                                },
                                {
                                    titulo: "Alarmas y problemas de agua / flujo de entrada",
                                    solucion: "Qué pasa: caudal de agua insuficiente -> falla en pruebas T1, impossibilidad de alcanzar caudal de dializado o generación de alarmas de agua. Causas comunes: filtro obstruido, válvula reguladora mal ajustada (AO4), baja presión de red, tubería parcial obstruida.Solución: comprobar filtros de entrada y reemplazarlos; medir caudal de entrada (debe estar dentro del rango indicado por el manual: ~1300–1550 ml/min según servicio); ajustar la válvula reductora (AO4) para aumentar flujo; verificar electroválvulas y sensores de flujo. Si no llega a rango, avisar a servicio o cambiar pieza."
                                },
                                {
                                    titulo: "Detección de sangre / blood leak o falsas alarmas de blood leak",
                                    solucion: "Solución: inspeccionar y limpiar el detector de sangre; asegurarse de que no haya luz directa; revisar el paso de la sangría (tubing) y el dializador; reemplazar el sensor si está dañado. Antes de ponerla en marcha, hacer test de blood leak en modo servicio."
                                },
                                {
                                    titulo: "Aire en la hidráulica / Air in hydraulics / venous/arterial air alarm",
                                    solucion: "Causas: mala cebada, bomba de aspiración/degassing con presión incorrecta, conexiones flojas o bolsas vacías, burbujas por mal priming. Solución: detener tratamiento, purgar el sistema (rinse), comprobar calibración de degassing (valores típicos ~ -800 mbar) y sensores; eliminar burbujas en circuitos; si el equipo forza desinfección por aire en hidráulica, revisar válvula de degas y calibración."
                                },
                                {
                                    titulo: "Problemas de conductividad / temperatura del dializado",
                                    solucion: "Causas: sensores sucios/fallos, solución concentrada mal preparada, problemas de mezclador/concentrados, calentador defectuoso. Solución: verificar preparación de concentrados, limpiar/recalibrar sensores de conductividad y temperatura (hacer prueba de servicio), comprobar la correcta mezcla del dializado y funcionamiento del calentador. No usar la máquina si conductividad no se estabiliza.."
                                },
                                {
                                    titulo: "UF (ultrafiltration) se apaga / UF button turns red / UF profile lost",
                                    solucion: "Solución: salir del perfil y reingresar con parámetros correctos; si la función no vuelve, reiniciar equipo y verificar memoria de errores; revisar sensores de UF y calibración. En algunos casos la máquina debe reiniciarse entre tratamientos.."
                                },
                                {
                                    titulo: "Pantalla/Software se congela / mensajes de error no claros",
                                    solucion: "Solución: leer el mensaje con el botón Message para ver instrucciones; seguir pasos indicados por la ayuda en pantalla; reiniciar la unidad si procede; si vuelve a repetirse, chequeo de la versión SW y actualización/consulta con soporte Fresenius. Mantener registro de los códigos de error para diagnóstico.."
                                },
                                {
                                    titulo: "Problemas con bombas y presión arterial/bp “grayed out”",
                                    solucion: "Solución: realizar mediciones manuales indicadas, reiniciar máquina entre tratamientos para recuperar funciones; revisar y calibrar sensores de presión; verificar el manguito y su conexión.."
                                },
                                {
                                    titulo: "Formación excesiva de espuma en el venous bubble catcher",
                                    solucion: "Solución: enjuagar/diluir correctamente según protocolo de desinfección, revisar conexiones, ajustar nivel del venous bubble catcher (limites micrométricos), realizar test de degassing y rinses de seguridad.."
                                }
                            ],
                            manuales: [
            
                                { titulo: "manual de cordiax 5008s", url: "https://es.scribd.com/document/677892797/5008S-IFU-11A-2015-SW-04-58-ES-M55251#page=1" }
                            ],
                            comentarios: "«Las causas más comunes del Fresenius 5008S según foros de biomédicos suelen ser caudal de agua bajo por AO4 desajustada, filtros sucios o baja presión; falsas alarmas de blood leak por sensor sucio, luz externa o microburbujas; “air in hydraulics” repetido por vacío insuficiente, O-rings secos o electroválvula de degas pegada; lecturas malas de conductividad por sensor sucio, mezcla incorrecta o concentrado mal preparado; cuelgues de software por cambios continuos de UF o versión vieja del sistema; temperatura de dializado baja por calentador con sarro o relé flojo; power failure falso por UPS con microcortes o cable/fusible inestable; espuma en el venoso por mal enjuague de desinfectante o mal degassing; bomba arterial ruidosa por rodillos gastados; y sensores de presión inestables por humedad en conectores o sensores ya vencidos."
                        },
                        
                    ]
                },
                {
                    nombre: "oCm",
                    modelos: [
                        {
                            nombre: "4008s",
                            fallas: [
                                {
                                    titulo: "No enciende / falla de alimentación",
                                    solucion: "Causas probables: fallo en la alimentación de red; fusible o disyuntor disparado; fuente de alimentación interna dañada; batería auxiliar agotada.Diagnóstico rápido: comprobar voltaje de red en la entrada; verificar fusibles/disyuntores externos e internos; medir salidas de la PSU; revisar estado de batería. — Solución: restablecer/recambiar fusible o disyuntor; reemplazar batería; reparar o cambiar la PSU; seguir procedimiento de seguridad del manual antes de abrir el equipo ."
                                },
                               
                                {
                                    titulo: "Alarma de conductividad / conductividad fuera de rango",
                                    solucion: " Causas probables: agua de diálisis con conductividad fuera de especificación; sensores de conductividad sucios/dañados; líneas de electrolito conectadas incorrectamente; calibración desplazada. — Diagnóstico rápido: validar conductividad del líquido con medidor independiente; inspeccionar y limpiar electrodos; comprobar conexiones de líneas de sal y A/B; revisar historial de calibración. — Solución: corregir la calidad del agua o fuente; limpiar/reemplazar sensor de conductividad; recalibrar según procedimiento; reemplazar cartuchos/electrodos defectuosos."
                                },
                                {
                                    titulo: "Alarmas de presión (arterial/venosa / alta-baja)",
                                    solucion: "Causas probables: oclusión en líneas sanguíneas; mal posicionamiento de clamps o pinzas; sangrado o desconexión parcial; monitor de presión con fallo o sensor de presión obstruido. — Diagnóstico rápido: inspeccionar circuitos sanguíneos y líneas por kinks/obstrucciones; comprobar transductores y tubuladuras; verificar el correcto montaje del set. — Solución: corregir o reemplazar líneas o filtros obstruidos; limpiar o reemplazar transductor de presión; ajustar clamps y asegurar conexiones ."
                                },
                                {
                                    titulo: "Bombas (sanguínea o de DIA) no arranca / fallo de caudal",
                                    solucion: "Causas probables: motor de bomba atascado; encoder o sensor de posición defectuoso; obstrucción en el circuito; firmware que reporta error. — Diagnóstico rápido: intentar prueba de bomba en modo servicio; medir señales del motor/encoder; inspeccionar rotor y mecanismo por desgaste o suciedad. — Solución: limpieza/ lubricación según manual; reemplazo de componentes mecánicos o encoder; reinstalar/actualizar software de control si procede ."
                                },
                                {
                                    titulo: "Fuga de agua / alarma de fuga",
                                    solucion: "Causas probables: juntas, mangueras o racores deteriorados; accesorios del dializador mal instalados; bandeja de drenaje obstruida; ruptura de intercambio de flujo. — Diagnóstico rápido: localizar visualmente orígenes de humedad; probar circuitos con agua a baja presión; revisar sensores de fuga y bandejas. — Solución: reemplazar juntas/mangueras o racores defectuosos; limpiar drenajes; reparar carcasas dañadas y recalibrar sensores de fuga ."
                                },
                                {
                                    titulo: "Alarmas de recirculación de sangre / detector de sangre en el dializado (OD)",
                                    solucion: "Causas probables: ruptura o mal asiento del dializador; problemas en el sensor óptico; contaminación cruzada o burbujas que generan lectura errónea. — Diagnóstico rápido: inspección del dializador y sus conexiones; prueba del sensor OD con solución control; observar burbujas o sangrado en el circuito. — Solución: cambiar dializador si presenta fallo; limpiar/reemplazar sensor óptico; eliminar bolsas de aire y purgar circuito ."
                                },
                                {
                                    titulo: "Errores de software / pantalla bloqueada / mensajes incomprensibles",
                                    solucion: "Causas probables: corrupción de firmware; fallos temporales del controlador; batería RTC agotada. — Diagnóstico rápido: reiniciar controladamente y revisar registro de errores en modo servicio; comprobar versión de software; verificar reloj/fecha y batería. — Solución: reinicio controlado; actualizar o reinstalar firmware según manual de servicio; reemplazar batería de memoria si está agotada ."
                                },
                                {
                                    titulo: "Calentamiento excesivo / ventilación insuficiente",
                                    solucion: "Causas probables: filtro de ventilación obstruido; ventilador defectuoso; carga interna anómala en PSU. — Diagnóstico rápido: medir temperatura en compartimento PSU; comprobar flujo de aire y estado de filtros; escuchar funcionamiento de ventiladores. — Solución: limpiar o cambiar filtros; reemplazar ventilador; evaluar PSU y componentes térmicos según manual ."
                                }
                            ],
                            manuales: [
            
                                { titulo: "Referencia Técnica - manual", url: "https://es.scribd.com/document/455933907/Manual-4008S-V10-pdf" }
                            ],
                            comentarios: "«usuarios y técnicos en foros y notas técnicas comentan que el Fresenius 4008S suele presentar problemas recurrentes como alarmas de conductividad por sensores sucios o calibración desplazada, fallos de presión por oclusiones o transductores obstruidos, bombas con errores por encoders o desgaste mecánico, detección de fugas por juntas o racores dañados, y reinicios/errores de software atribuibles a corrupción de firmware o batería de respaldo agotada; las recomendaciones prácticas más citadas son verificar conductividad con medidor independiente, inspeccionar y reemplazar tubuladuras y transductores, probar bombas en modo servicio y revisar encoders, limpiar o cambiar sensores ópticos y filtros de ventilación, y seguir procedimientos y valores del manual técnico para calibraciones y reemplazos (servicio/firmware)"
                        },
                        
                    ]
                }
            
                
            ]
        },
        {
            nombre: "Desfibriladores / DEA",
            icono: "img/imgd.png", // RUTA LOCAL
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
            icono: "img/mpm.png", // RUTA LOCAL
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
                        },
                        {
                            nombre: "uMEC series",
                            fallas: [
                                { titulo: "No enciende / no pasa del logo al arranque", solucion: "Causas más probables: alimentación AC ausente o cable suelto; batería descargada o defectuosa; fusible o placa de alimentación dañados; botón de encendido o placa frontal con falla" },
                                { titulo: "Pantalla negra, sin imagen o con artefactos gráficos", solucion: "Causas más probables: fallo de la retroiluminación/LCD, conector LVDS/flat cable suelto o dañado, fallo de la placa gráfica o firmware corrupto. Confirmar que el equipo está encendido (LEDs, sonido de ventilador). Si sí hay actividad pero pantalla negra, comprobar contraste/retroiluminación mediante el procedimiento de diagnóstico del menú (si accesible)."},
                                { titulo: "SpO₂ errático o lectura ausente (valores inestables)", solucion: "sensor/pinza sucio o defectuoso; mala colocación en paciente; movimiento/vasoconstricción; cable de sensor dañados; configuración de filtro o alarma inadecuada. Confirmar modelo y compatibilidad del sensor con uMEC-12. Sustituir por sensor nuevo o conocido para descarte. Inspeccionar el conector del sensor (pines, corrosión), limpiar con alcohol isopropílico y volver a conectar; verificar continuidad del cable. Reposicionar sensor: evitar zonas con movimiento, asegurar buena perfusión (calentar al paciente si está frío); probar en otro dedo/oreja. Activar el test interno de SpO₂ (si el equipo lo soporta) o usar simulador de pulso para verificar respuesta del módulo. Si hay inconsistencias de calibración, actualizar firmware/algoritmo y, si es necesario, reemplazar módulo de sensor/placa de adquisición."},
                                { titulo: "Error o lectura incorrecta de NIBP / “NIBP fail” / presión no alcanza.", solucion: "Causas más probables: fuga en manguito o líneas; bomba de NIBP (motor/pump) con falla; válvula solenoide obstruida; calibración incorrecta; manguito mal posicionado o incompatibilidad de tamaño. Solución (pasos técnicos):Inspeccionar visualmente el manguito, conector y tubing: buscar microfisuras o perdidas. Repetir prueba con manguito y tubing conocidos. Escuchar la bomba al iniciar ciclo: ausencia de sonido indica posible falla del motor/pump; medir tensión al motor y continuidad.Verificar la válvula solenoide (abre/cierra) — confirmar con osciloscopio o multímetro la señal de activación y comprobar la presión en el canal antes/después de la válvula.Ejecutar auto-test / test de NIBP en el menú de servicio (manual describe procedimiento) y consultar códigos de error. Si la presión no alcanza especificación, reemplazar bomba o válvula revisar filtros y cámaras de absorción (en modelos con ellos Documentar calibración post-reparación"},
                                { titulo: "ECG sin señal o con artefactos (ondas distorsionadas / ruidos).", solucion: "Causas más probables: electrodos secos o mal pegados; cables/derivaciones dañados; mal contacto entre conector de cable y jack del monitor; interferencia eléctrica (mala toma tierra); configuración de ganancia o filtros inapropiados. Solución (pasos técnicos): Reemplazar electrodos y limpiar piel del paciente con alcohol; colocar electrodos en posiciones estándar.Probar cables/derivaciones con resistencia/continuid. Sustituir cable defectuoso. Revisar conexión del conector al equipo (pines, corrosión). Comprobar presencia de interferencia (220/110 V, fuentes de RF): aislar el equipo y desconectar otros dispositivos; verificar toma de tierra del sitio. Si persisten artefactos, activar test de ECG desde el servicio (simulador de señal) para verificar si la placa de adquisición está entregando señal limpia; reemplazar módulo de ECG si la placa falla."}
                            ],
                            manuales: [
                                { titulo: "Manual de Servicio uMEC10 en adelante", url: "https://www.medicaecuador.com/wp-content/uploads/2019/12/Manual-uMEC-series.pdf" }
                            ],
                            comentarios: "«En foros biomédicos se repite que el uMEC-12 suele dar fallas de SpO₂ inestable por sensores genéricos o cables fatigados, resolviéndose casi siempre con cambio de sensor original; también comentan problemas de NIBP “cuff leak” por microfisuras en la manguera o válvula solenoide lenta, recomendando reemplazo de tubing y limpieza de válvula; otra falla común es ECG ruidoso por cables dañados, tierra deficiente o electrodos viejos, solucionado con cable nuevo y reubicación de toma a tierra; varios técnicos reportan pantalla negra por conector LVDS flojo o LED driver fallado, corrigiéndose al reajustar el flex o cambiar el módulo; finalmente, se menciona batería que no carga por circuito de carga fatigado o baterías OEM de baja calidad, usualmente resuelto al cambiar batería original Mindray o revisar la placa de carga."
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
            icono: "img/ecg.png", // RUTA LOCAL
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
            nombre: "Respiradores",
            icono: "img/respi.png", // RUTA LOCAL
            marcas: [
                {
                    nombre: "Dräger",
                    modelos: [
                        {
                            nombre: "Dräger Evita",
                            fallas: [
                                {
                                    titulo: "Error de flujo / VT inconsistente",
                                    solucion: "Problema: El ventilador muestra variación del volumen tidal (VT), alarmas de Flow Sensor Fault o diferencias entre la lectura inspiratoria y espiratoria. Causas probables:Sensor de flujo (pneumotac) húmedo por condensación.Acumulación de secreciones o polvo en el sensor.Desalineación del sensor o instalación incorrecta.Deterioro de la membrana interna del sensor. Solución técnica:Retirar el sensor y secar completamente (al menos 20–30 min). Limpiar el sensor con técnica recomendada (sin agua directa, sin soplado de alta presión). Verificar que el sensor esté instalado con el sentido correcto (flecha del flujo). Recolocar y ejecutar Auto-Calibración del Flow Sensor. Si persiste la inestabilidad, reemplazar por sensor original Dräger, ya que los genéricos suelen generar drift en Evita.."
                                },
                                 {
                                    titulo: "Problema de alarma de Presión Alta / Low PEEP",
                                    solucion: "Diagnóstico: Las alarmas de presión alta suelen indicar una obstrucción (secreciones, kink en el tubo, broncoespasmo). La alarma de PEEP baja indica una fuga o desconexión. Solución: Aspirar secreciones, verificar la posición del paciente, revisar todo el circuito de paciente por obstrucciones o acodamientos. Para Low PEEP, revisar conexiones del tubo endotraqueal, humidificador, y las trampas de agua. Ejecutar una prueba de fugas del circuito en modo servicio."
                                },
                                {
                                    titulo: "Falla de Batería o no mantiene carga",
                                    solucion: "Causa: Batería vieja o módulo de carga defectuoso. Solución: Ejecutar la prueba de capacidad de la batería (Battery Capacity Test) en modo servicio. Si el resultado es menor al 80% de lo nominal, reemplazar la batería. Si la batería es nueva y falla, medir el voltaje de carga de la placa principal."
                                },
                                {
                                    titulo: "Mensaje de calibración de O2 fallida",
                                    solucion: "Causa: Sensor de O2 defectuoso o descalibrado, o suministro de gas inestable. Solución: Reemplazar el sensor de O2 si tiene más de 12 meses de uso. Ejecutar la calibración de O2 con ambos gases (100% O2 y 21% Aire) y asegurarse de que los rangos de presión de suministro sean estables (3 a 6 bar)."
                                }
                            ],
                            manuales: [
                                { titulo: "Manual de Mantenimiento Evita V500", url: "https://www.scribd.com/document/556942695/Drager-Evita-V500-Service-Manual" }
                            ],
                            comentarios: "«La válvula espiratoria y el sensor de flujo son los puntos más críticos y propensos a la contaminación por humedad. Es vital seguir el protocolo de limpieza y secado rigurosamente para prevenir fallas recurrentes de flujo e inconsistencias de VT.»"
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Ecógrafos",
            icono: "img/eco.png", // RUTA LOCAL
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
            // Solo agregar si la vista actual no es la que se va a renderizar (evita duplicados si se hace un navigate('marcas') a sí mismo)
            if (biomedicData.currentView.history[biomedicData.currentView.history.length - 1] !== viewKey) {
                biomedicData.currentView.history.push(viewKey);
            }
        } else {
            // Si es 'home', resetear el historial
            biomedicData.currentView.history = ['home'];
        }
    } else {
        // Si es navegación hacia atrás, aseguramos que la pila esté limpia si llegamos a home
        if (viewKey === 'home') {
             biomedicData.currentView.history = ['home']; 
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
    document.getElementById('app-container').dataset.currentScreen = viewKey;
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
    // El elemento que se hace pop() es la vista actual, y el nuevo tope es la vista anterior
    history.pop(); 
    
    const previousViewKey = history[history.length - 1]; 
    const currentView = biomedicData.currentView;

    // Lógica de navegación inversa basada en la vista anterior
    if (previousViewKey === 'ficha') {
        // Esto no debería suceder si la lógica es correcta, pero si ocurre, volvemos al modelo.
        navigate('modelos', {
            marca: currentView.marca.nombre,
            categoria: currentView.categoria.nombre
        }, true);
    }
    else if (previousViewKey === 'modelos') {
        // Necesita cat y marca para volver a renderizar
        navigate('modelos', {
            marca: currentView.marca.nombre,
            categoria: currentView.categoria.nombre
        }, true); 
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
    // Modificado para usar la propiedad 'icono' como URL en una etiqueta <img>
    const categoriasHtml = biomedicData.categorias.map(cat => {
        return `
            <div class="card card-action" onclick="navigate('marcas', {categoria: '${cat.nombre}'})">
                <img src="${cat.icono}" alt="Icono de ${cat.nombre}" class="card-icon"> 
                <h2 class="card-title">${cat.nombre}</h2>
            </div>
        `;
    }).join('');

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
            <div class="accordion-container">
                <h3 class="card-subtitle">Fallas Comunes y Soluciones Rápidas</h3>
                ${fallasHtml}
            </div>

            <div class="card mt-6">
                <h3 class="card-subtitle">Manuales y Enlaces Útiles</h3>
                <div class="manual-list">
                    ${manualesHtml}
                </div>
            </div>

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
