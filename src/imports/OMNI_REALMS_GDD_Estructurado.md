# 🎮 DOCUMENTO DE DISEÑO DE JUEGO (GDD)
## **OMNI-REALMS: EL CÓDICE DEL CREPÚSCULO**
*Versión del Documento: 1.0.0*  
*Estado: En Desarrollo / Pre-Producción*  
*Género: Battle Royale / Hero Shooter / Fighting Táctico en 3ª Persona*  
*Público Objetivo: T (Teen) a M (Mature) | Jugadores de Fortnite, Apex Legends, Mortal Kombat, Halo*  

---

## 📄 1. RESUMEN EJECUTIVO (HIGH CONCEPT)

### 1.1. Frase de Presentación (Pitch)
**Omni-Realms** es un Battle Royale en tercera persona con estética de anime oscuro donde los guerreros más poderosos de dimensiones colapsadas se enfrentan usando habilidades místicas, tecnología sci-fi avanzada y remates cinemáticos (*Fatalities*), mientras descubren la narrativa profunda del colapso del multiverso.

### 1.2. Pilares de Diseño (Core Pillars)
1. **Identidad Visual Anime-Punk:** Estética cel-shading estilizada de alto contraste, mezclando elementos cibernéticos, fantásticos y de artes marciales.
2. **Lore Profundo y Oscuro:** Narrativa ambiental e historias interconectadas estilo *Halo* (facciones, lore místico-científico, artefactos ancestrales) y *Mortal Kombat* (rivalidades, imperios caídos, torneos de supervivencia).
3. **Combate Híbrido (Armas + Habilidades + Finishets):** Tiroteo preciso combinado con combos de movilidad, poderes elementales y ejecuciones cinemáticas en vivo.
4. **Evolución del Mapa y Eventos Narrativos:** La isla reacciona a los eventos de la historia de cada temporada con destrucción en tiempo real y anomalías temporales.

---

## 📜 2. HISTORIA Y MUNDO (NARRATIVA)

### 2.1. El Colapso de los Anillos del Firmamento
En el año 3042 del Calendario Convergente, la estructura del multiverso colapsó tras la sobrecarga del **Matriz Génesis** (construida por una civilización ancestral extinta conocida como los *Precursores*). Las realidades se fusionaron en un único planeta fracturado: **El Filo de la Convergencia**.

### 2.2. La Esencia Cero y la Guerra del Crepúsculo
Para prevenir el colapso total de la materia, la Esencia Cero (el núcleo energético del multiverso) creó un bucle temporal dentro del planeta. Las facciones sobrevivientes envían a sus mejores combatientes a la arena. El ganador de la Guerra de la Esencia obtiene la capacidad de reescribir el destino de su dimensión origen.

---

## 🗡️ 3. PERSONAJES / OPERADORES (ROSTER INICIAL)

### 3.1. Personaje 1: RYUUKEN "EL HERALDO DE SANGRE"
* **Rol / Clase:** Asesino Táctico / Melé de Alta Velocidad
* **Origen:** Dimensión Shinto-Punk (Clanes Shinobi modificados genéticamente)
* **Atributos:** Salud: 100 | Escudo: 100 | Velocidad: Alta
* **Kit de Habilidades:**
  * **Pasiva - Pasos Errantes:** No produce ruido al correr y puede saltar dos veces en paredes.
  * **Habilidad Táctica - Paso Sombra (Cooldown: 12s):** Se teletransporta 10 metros en la dirección de la mirada, dejando un señuelo holográfico durante 3 segundos.
  * **Habilidad Definitiva - Corte Nova (Cooldown: 90s):** Desenvaina su katana de nanomáquinas y realiza un barrido de 180° que emite una onda de choque capaz de atravesar estructuras y destruir escudos.
* **Finisher (Fatality): "Decapitación de Sombra"** - Corta las extremidades cinéticas del rival y canaliza la energía de su alma para recargar la estamina.

### 3.2. Personaje 2: CYBER-VALKYRIE KIRA
* **Rol / Clase:** Vanguardia Pesada / Control de Áreas
* **Origen:** Estación Orbital Escuadrón-09 (Cyberpunk Distópico)
* **Atributos:** Salud: 125 | Escudo: 100 | Velocidad: Media
* **Kit de Habilidades:**
  * **Pasiva - Blindaje Aegis:** Reduce el daño recibido por explosiones un 15%.
  * **Habilidad Táctica - Barrera de Plasma (Cooldown: 16s):** Despliega un escudo curvo de energía estática de 500 HP de durabilidad.
  * **Habilidad Definitiva - Lluvia Valkyrie (Cooldown: 110s):** Eleva su exoesqueleto 5 metros y dispara una ráfaga de 12 micro-misiles teledirigidos a los enemigos fijados.
* **Finisher (Fatality): "Incinera-Protocolo"** - Fija al enemigo al suelo con una estaca de energía y activa sus propulsores para quemar al objetivo por completo.

### 3.3. Personaje 3: SHINNOKI "EL ANCESTRAL OSCURO"
* **Rol / Clase:** Brujo / Invocador de Control
* **Origen:** El Abismo Nigromántico
* **Atributos:** Salud: 100 | Escudo: 75 | Velocidad: Lenta (Flota)
* **Kit de Habilidades:**
  * **Pasiva - Cosecha de Almas:** Eliminar enemigos restaura 25 HP directamente a la barra de vida.
  * **Habilidad Táctica - Drenaje de Alma (Cooldown: 14s):** Canaliza un rayo a corta distancia que roba 15 HP/segundo al enemigo durante 3 segundos.
  * **Habilidad Definitiva - Grieta del Inframundo (Cooldown: 120s):** Invoca un portal del que salen 3 espectros que persiguen a los enemigos cercanos e infligen daño continuo.
* **Finisher (Fatality): "Extracción Cósmica"** - Extrae el corazón del rival en forma de cristal de energía y lo aplasta con la mano.

---

## 🎮 4. MECÁNICAS DE JUEGO Y BUCLE PRINCIPAL (CORE LOOP)

```
[Despliegue Orbital] ➔ [Saqueo / Botín (Loot)] ➔ [Combate y Captura de Zonas] ➔ [Fatality / Eliminación] ➔ [Sobrevivir a la Tormenta]
```

### 4.1. Fases del Juego
1. **Despliegue:** 100 jugadores caen desde la nave nodriza *NEXUS-01* utilizando alas cibernéticas o deslizadores mágicos.
2. **Sistema de Botín (Loot Tier System):**
   * **Común (Gris):** Armas estándar de fuego rápido.
   * **Raro (Azul):** Armas mejoradas con módulos de energía.
   * **Épico (Morado):** Armas de plasma con habilidades secundarias.
   * **Mítico (Dorado):** Reliquias de personajes y armas con daño elemental único.
3. **Sistema de Remates en Vivo (Fatality Nova):**
   * Cuando un jugador derriba a un enemigo en modo Escuadra, puede presionar la tecla de ejecución [E/R3].
   * La cámara pasa a 3ª persona cinematográfica de 3 segundos.
   * Completar la ejecución recarga instantáneamente el escudo del atacante y otorga botín místico.

---

## 🌍 5. DISEÑO DE MAPA (WORLD DESIGN)

El mapa se llama **"La Isla de la Fractura"** y está dividido en 3 biomas combinados por anomalías geográficas:

| Sector | Bioma principal | Puntos de Interés (POIs) | Mecánica Ambiental |
| :--- | :--- | :--- | :--- |
| **Sector Alfa** | Volcánico / Místico | Cataratas de Obsidiana, Templo del Eclipse | Magma que inflige daño, altares que otorgan buffs temporales. |
| **Sector Beta** | Cyberpunk Industrial | Ciudad Neón, Complejo Tecnológico 09 | Tiendas de suministros automáticas, tirolesas magnéticas, edificios destructibles. |
| **Sector Gamma** | Ruinas Sci-Fi | Instalación Génesis, El Núcleo Cero | Zonas de gravedad reducida, portales de teletransporte instantáneo. |

---

## 🎨 6. ARTE, AUDIO Y DISEÑO AUDIOVISUAL

### 6.1. Estilo Visual
* **Motor Recomendado:** Unreal Engine 5 (uso de *Lumen* para iluminación cel-shading dinámica).
* **Shader:** Custom Anime Cel-Shader con bordes marcados en tinta negra y efectos de partículas estridentes en neón/fuego.

### 6.2. Diseño de Sonido (Audio Pipeline)
* **Banda Sonora:** Mezcla de Heavy Metal Industrial (al estilo *Mortal Kombat / DOOM*) mezclado con orquestación épica y sintetizadores Cyberpunk (al estilo *Halo / Synthwave*).
* **Feedback de Impacto:** Sonidos pesados y viscerales al romper escudos o ejecutar habilidades.

---

## 💰 7. MONETIZACIÓN Y MONETIZACIÓN LIVE SERVICE

### 7.1. Modelo Free-to-Play (Sin Pay-to-Win)
* **Pase de Batalla Creadores del Crepúsculo:** 100 niveles de contenido cosmético (Skins, Gestos, Animaciones de Despliegue, Fatalities personalizadas).
* **Tienda de Objetos (Rotación Diaria):**
  * Skins Crossover de Anime / Colaboraciones.
  * Evoluciones visuales de armas (Reactive Weapon Skins).
  * Saludos de Victoria y Músicas de Menú.

---

## 🚀 8. HOJA DE RUTA Y TEMPORADAS (ROADMAP)

* **Temporada 1: "El Despertar de los Ancestros"**
  * Lanzamiento de los 3 héroes principales + Mapa base "Isla de la Fractura".
  * Evento de mitad de temporada: *La Caída del Meteorito de Neón*.
* **Temporada 2: "Sombras del Abismo"**
  * Introducción de 2 nuevos héroes (Clase Curandero/Soporte y Francotirador Místico).
  * Expansión subterránea del mapa (Las Catacumbas del Caos).
