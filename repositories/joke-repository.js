const source = [
	['Como maldice un pollo a otro pollo? Caldito seas!'],

	['- Cariño, pronto sera nuestro aniversario. Que me vas a regalar?',
	'- Ves ese coche aparcado? Pues una liquadora del mismo color'],

	['La noche de bodas, el novio encuentra a la novia en la cama con un enano', 
	'- ¿Y ese quién es?',
	'- El aperitivo!'],

	['Un hombre llega a casa y se encuentra a su mujer en la cama con otro',
	'- ¿Y ese quién es?',
	'- Ése es quien paga el piso, la luz, la comida, el colegio de las niñas, ...',
	'- Tápalo, tápalo! Que no se resfrie!'],

	['- Oye, ¿tu mujer a que se dedica?',
	'- Mi mujer es jinete de aves de corral',
	'- Hostia, ¿Y eso que es?',
	'- Que cada dos por tres me monta un pollo'],

	['- ¿Tienes hijos?',
	'- Sí, una niña. Está en esa edad que se lo mete todo en la boca',
	'- ¿6 meses?',
	'- ¡Qué va! 16 años'],

	['- ¿Cómo se declara el acusado?',
	'- Con flores. Soy bastante tradicional'],

	['- ¡Paco quita el futbol y baja la basura!',
	'- ¡Cualquier día de estos cojo la puerta y...!',
	'- ¡¿Y!?',
	'- Y la lijo y la barnizo, que falta le hace...'],

	['Solo cuando se posa un mosquito en tus testículos te das cuenta que no todo se soluciona con violencia'],

	['- ¿Lobezno?',
	'- ¿Que zi veo el qué?',
	'- ¡CORTEN!... ¡Por decimotercera vez, deja de hacer la broma ya y cíñete al guión joder!'],

	['- Que fea es esa tía',
	'- Es mi madre',
	'- No, digo la de al lado',
	'- Esa es mi hermana',
	'- Pues pégame dos hostias q esto ya no hay quien lo arregle'],

	['- Nunca me escuchas',
	'- Y yo a ti'],

	['- Cari, di a mis padres lo que me dijiste anoche',
	'- Ehhh... ¿Que me pones la polla como el pescuezo de un cantaor?',
	'- No, lo de la boda, gilipollas'],

	['- En boca es plano, le falta pasión, textura, apenas notó el bacalao...',
	'- Manolo, cómeme el coño y deja de jugar a master chef'],

	['- ¿Y tu desde cuando llevas pendiente, Paco?',
	'- Desde que mi mujer se lo encontró en el coche y le dije que era mío...'],

	['- ¿Quieres que te mire a los ojos cuando me lo meta en la boca?',
	'- Señorita, compórtese y sople el alcoholímetro por favor'],

	['- Hija, deja de ligar con el panadero, podría ser tu padre',
	'- Me da igual que sea mayor que yo',
	'- Creo que no me has entendido'],

	['- Cariño, hoy que vamos con el tiempo justo, lo mejor va a ser una comida rápida',
	'- ¿Qué te apetece, Paco? ¿Pizza?',
	'- Creo que no me has entendido'],

	['- Estás más delgada, no?',
	'- Es que el negro me adelgaza...',
	'- Pero si vas de rojo!',
	'- Creo que no me has entendido'],

	['- A mi se me conquista con una buena comida',
	'- Te he hecho macarrones',
	'- Creo que no me has entendido'],

	['- He denunciado al dentista por ponerme el aparato en la boca',
	'- Si te lo ha puesto es porque lo necesitas',
	'- Creo que no me has entendido'],

	['- Tu mujer me pidió que le ayudara con una estantería y acabe montándola',
	'- Es que no se le da nada bien el bricolaje',
	'- Creo que no me has entendido'],

	['- Necesito tu ayuda me quieren matar en Sevilla por joderles a la virgen de la Rocío',
	'- Normal allí son muy religiosos',
	'- Creo que no me has entendido'],

	['- Siempre que quiero follar con mi mujer dice que le duele la cabeza',
	'- A mi nunca me lo dice',
	'- Pero tú no estás casado',
	'- Creo que no me has entendido'],

	['- Mi mujer se metió ayer una piña y hemos pasado la noche en urgencias',
	'- ¿Con el coche? ¿Pero está bien?',
	'- Creo que no me has entendido'],

	['- ¡O te quitas esa falda tan corta o no sales!',
	'- ¿Por qué, mamá?',
	'- Porque es muy corta',
	'- ¿Y quéeee?',
	'- ¡Que se te ven los huevos, José Miguel!'],

	['- Por el culo no, Pepe',
	'- Pues ya me dirás, Paco'],

	['- Cariño, está lloviendo y sigues siendo una puta',
	'- ¿Y qué?',
	'- Me dijiste que con el tiempo cambiarias'],

	['- Papá, ¿soy adoptado?',
	'- Te elegimos negro para no tener esta conversación'],

	['- Cariño, ¿me engañas con otra?',
	'- Vale'],

	['- Cariño, tengo un retraso',
	'- Tranquila, tontita, que te quiero igual'],

	['- Soy un noble caballero y sé cuando he de manchar con sangre mi espada',
	'- Manolo, déjate de gilipolleces, que con la regla no follo'],

	['Qué cabrón mi vecino. ¿Pues no se pone a llamar a mi puerta como un loco a las 4 de la mañana? Casi se me cae el taladro del susto'],

	['- ¿Te parece bonito?',
	'- Sí',
	'- Pues es rodaballo'],

	['- Entonces, doctor, ¿con este condón de lana se curará mi impotencia?',
	'- No, pero le sudará la polla'],

	['- Mamá, ¿cómo es que tú eres blanca, papá es negro y yo soy amarillo?',
	'- Hijo mío, si supieras la orgía que hubo aquel día... Agradece que no ladras'],

	['- Qué estrés',
	'- Dos más uno'],

	['- Se te dan fatal las rimas',
	'- ¡Una mierda como una olla!'],

	['- ¿Sabías que las cajas negras de los aviones en realidad son naranjas?',
	'- ¿¡No son cajas!?'],

	['- ¿Puedo fumar?',
	'- Claro',
	'- Vale. Uno maf uno, dof. Dof maf dof, cuatro. Tref maf tref, feif'],

	['- Mi marido es vidente',
	'- ¿Tiene dos dientes?',
	'- ¿Tú eres tonto? ¡Que echa las cartas!',
	'- Tú sí que eres tonta, ¡entonces será cartero!'],

	['- Jolín con los mosquitos',
	'- Ponte repelente',
	'- Madre mía, qué ingente cantidad de dípteros nematóceros'],

	['- Cariño... ¿y si tuviéramos un hijo?',
	'- No creo, cielo, me acordaría'],

	['- ¡Papá, papá, Jaimito la tiene com un cacahuete!',
	'- ¿De pequeña?',
	'- No, de salada'],

	['El humor negro es como las piernas; hay quién tiene y quién no'],

	['¿Qué es peor que encontrarse una cucaracha en el plato?',
	'Encontrarse media'],

	['- Cariño, ¿me pasas el bebé?',
	'- Ahora, cuando llore',
	'- ¿Cuando llore? ¿Porque?',
	'- Porque no me acuerdo de donde lo he dejado'],

	['- Siento decirle que mi gato ha matado a su perro',
	'- ¿Mi perro? ¡Pero si es un doberman!',
	'- Ya, y mi gato hidráulico'],

	['- Bienvenidos a su primera sesión matrimonial. Paco, empezemos por usted, ¿qué hace después de alcanzar el orgasmo?',
	'- Borrar el historial'],

	['Ojo a cómo puede cambiar una frase con poner la coma o no ponerla:',
	'- Quiero que me ayude, señorita',
	'- Quiero que me la coma, señorita'],

	['- Cuando voy a donar sangre, no me la extraigo yo. Lo hace una enfermera',
	'- Ya pero esto es un banco de sémen',
	'- ¿Y?',
	'- ¡No le vamos a hacer ninguna paja!'],

	['Le pedí que me hiciera guarradas en la cama...',
	'Se tiró un pedo y me tapo con la sábana'],

	['- Escoja una carta sin que yo la vea, caballero',
	'- Ya',
	'- Enséñesela al público',
	'- Voy',
	'- ¡LA CARTA, ENSEÑE LA CARTA!',
	'- A ver si somos más específicos'],

	['- Hija, ¿tú te drogas?',
	'- No, ¿por?',
	'- Porque estás picando la cebolla con la VISA'],

	['- ¿Cuál es su destino?',
	'- No esta escrito aún, lo voy forjando con ánimo y perseverancia',
	'- ¿Quiere un billete de tren o no?'],

	['- Cariño, ¿has visto a Gasol coger el rebote?',
	'- ¿Qué rebote?',
	'- El de mis huevos en tu cogote Jajajaja Hoy no follo, ¿verdad?',
	'- Ni mañana'],

	['- No eres tú, soy yo',
	'- Eso es que has activado la cámara frontal del móvil',
	'- Ah, pues sí'],

	['- Merche, te ha llamado Almodóvar',
	'- ¡No jodas! ¿Para qué?',
	'- Para comprar el guión de la película que te montaste ayer',
	'- ¡Imbécil!',
	'- ¡Puta loca!'],

	['- Chun Li, ¿verdad o prenda?',
	'- Verdad',
	'- ¿Dónde está el perro de María?',
	'- Prenda'],

	['Llega tarde a un bukake y se lo echan en cara'],

	['- Tenemos que dejar de vernos antes de que se entere mi mujer',
	'- Ponte las gafas, Paco',
	'- Hóstia qué movida...'],

	['- Manolo, ¿cuál es la postura que más has usado para practicar sexo?',
	'- De rodillas y pidiéndolo por favor'],

	['- Hola. Soy el vecino de arriba',
	'- Hola. ¿Qué querías?',
	'- Entiendo que estéis follando, pero ¿puedes decirle a tu mujer que no chille tanto?',
	'- Pero si yo estoy trabajando...',
	'- Ups'],

	['- Ya estan los ordenadores actualizados',
	'- ¿Los has revisado todos?',
	'- Sí, jefe',
	'- ¿Uno por uno?',
	'- Uno'],

	['Dicen que el chocolate es un sustituivo del sexo. He metido la polla en una taza de Paladin y estoy camino de urgencias...'],

	['- ¿Cómo dejáis que vuestra madre os siga vestiendo iguales? Que tenéis bigote y pelos en los huevos, joder! Que ya tenéis una edad!',
	'- Caballero, baje del coche y sople aquí por favor'],

	['- ¿Cómo te reconoceré?',
	'- Mirarás a uno y pensarás "Ay no, que no sea ése". Pues, ése'],

	['- Vengo del urólogo',
	'- ¿Y qué te ha dicho?',
	'- Que soy gilipollas. Que los hurones se llevan al veterinario'],

	['- Quiero despertar contigo el resto de mi vida',
	'- Me levanto a las 5 de la mañana',
	'- Pues va a ser que no'],

	['- ¿Tú crees que soy feo?',
	'- Hombre, fuiste al puticlub y a todas les dolía la cabeza. Raro es'],

	['- Alcánzame el eso que dejé allá adentro de aquello',
	'- ¿El qué?',
	'- Madre mía Paco, pareces tonto'],

	['- En una escala del 1 al 10, ¿cómo valoraria su capacidad de comprensión?',
	'- Muy buena'],

	['- No hay ni un pelo en tu camisa!',
	'- ¿Y...?',
	'- ¿Quien es esa puta calva?'],

	['- Mi coche hace un ruido espantoso',
	'- ¿Ha probado usted a quitar el CD de Pablo Alborán?'],

	['- ¿Tiene tarjetas de San Valentín que digan: "Para mi único y verdadero amor"?',
	'- Claro que tenemos!',
	'- Pués deme ocho por favor'],

	['- ¿A partir de cuántas cervezas se puede considerar que tienes un problema?',
	'- Cuando no queda ninguna más'],

	['Mi hijo es un sol; sale y se pone'],

	['- El problema de la sociedad de hoy es la falta de empatía, de respeto, de sentido del humor. La intolerancia',
	'- ¿A la lactosa?',
	'- A tu puta madre'],

	['Si fuera joyero,',
	'te regalaria una joya.',
	'Como soy pollero,',
	'no te cobro las patatas'],

	['Cada vez que mi madre viene a casa y pregunta "¿Esto para qué es?" desde otra habitación, me da un microinfarto'],

	['- Para continuar con la ceremonia, leed vuestros votos',
	'- Yo pensaba que era secreto',
	'- Es tu boda',
	'- Bueno... vale. Que bochorno. Voto no'],

	['- Hoy he dejado el trabajo. No podia seguir trabajando para ese hombre despues de lo que me dijo',
	'- ¿Que te dijo?',
	'- Estas despedido'],

	['- Yo una Cruzcampo',
	'- Yo una Heineken',
	'- Bueno, pues un agua para mí también'],

	['- Yo quiero un Bitter Kas',
	'- Yo una cerveza sin alcohol',
	'- ¿Y usted?',
	'- Amigos normales'],

	['- La morsa brama de placer mojándose en las gélidas aguas árticas',
	'- ¡Pepe, que le abras el agua caliente a mi madre!',
	'- Su cría se rebela'],

	['- Un pájaro enjaulado no es un pájaro feliz...',
	'- Que te lo guardes, Paco'],

	['Según un estudio, dejaremos de tener sexo en 2030. Yo he dejado de follar ya para que no me pille el toro'],

	['Otro día más sin utilizar el mínimo común múltiplo ni el máximo común divisor'],

	['La mejor viagra es cambiar de cabra'],

	['ÚLTIMA HORA: Pide una pizza familiar y la devuelve porque no la conoce de nada'],

	['- ¿Sabes el porcentaje de españoles que son bebedores empedernidos de cerveza?',
	'- No se, ¿un tercio?',
	'- Venga va, uno fresquito'],

	['El día menos pensado dices "pues yo prefiero salir a mediodía y tomar unos vinitos por el centro". PUM, eres más viejo que una montaña.'],

	['- El límite es el cielo',
	'- No, el límite es 0,25. Baje del coche por favor'],

	['- ¿Qué hacen esos condones rotos en el jardín?',
	'- ¡QUE DEJES DE LLAMAR ASÍ A LOS NIÑOS, JOSÉ!'],

	['He visto El Silencio de los Corderos y no se oye ni uno en toda la película. Buen trabajo'],

	['Estoy flipando. Han detenido al mecánico de mi barrio por tráfico de drogas. Soy cliente suyo de toda la vida y nunca me había dicho que fuera mecánico'],

	['Me he tirado un pedo en el autobús y se han girado 4 personas. Ha sido como participar en La Voz'],

	['- Papá',
	'- Dime, hijo',
	'- ¿Qué es dudar?',
	'- A ver, tú a quién quieres más ¿a papá o a mamá?',
	'- A mamá',
	'- Pues que te lo explique ella, gilipollas'],

	['- Pero ¿qué le ha hecho a su suegra?',
	'- Lo que me dijo, doctor',
	'- Le dije dar dos tranquilizantes, DAR-DOS, separado'],

	['- Llevo un mes sin sexo por tener la muñeca rota',
	'- ¿La izquierda o la derecha?',
	'- La hinchable'],

	['- Doctor, ¿qué me recomienda contra el dolor menstrual?',
	'- Sexo anal',
	'- Usted ha hablado con mi marido ¿verdad?',
	'- ¿Qué Paco ni que Paco?'],

	['- ¿Cuánto tiempo hace que no follas?',
	'- ¿Que hora es?',
	'- Las 11:46',
	'- Nueve años'],

	['- Señor, no queda viagra de 50mg. Le vamos a dar de 100mg para que la parta en dos',
	'- ¡¿A mi esposa?!',
	'- No, coño! La pastilla!'],

	['- Vengo a matricularme a Ciencias Políticas',
	'- Muy bien. Coja este sobre...',
	'- ¡Ostias! ¿Ya?',
	'- Es la matricula inútil'],

	['- Mi mujer siempre anda por casa como vino al mundo',
	'- ¿Desnuda?',
	'- No, gritando'],

	['Fui a poner una denuncia. Primero me dan un boli que no escribe y luego uno que si. Que cabrones. El viejo truco boli malo boli bueno'],

	['Cómo conquistar a un hombre en diez pasos:',
	'Desnúdate, da diez pasos hacia donde él esté y chúpasela como si no hubiera un mañana'],

	['- Y tú ¿a qué te dedicas?',
	'- Soy bromista',
	'- ¿Te dedicas al humor?',
	'- No, produzco bromo elemental a partir de bromuro potásico',
	'- Ah, perdón',
	'- Es broma'],

	['- ¿Te has cagado en el ascensor?',
	'- He escuchado "Planta uno" y me he liado'],

	['- Tranquilo Santi, solo es un pequeño corte con el bisturí, no estés nervioso',
	'- Oiga doctor, yo me llamo Jorge',
	'- Ya lo sé, Santi soy yo'],

	['- Paco, ¿te estás follando a la vecina del 5º?',
	'- Es la del 2º',
	'- ¿Que más da?',
	'- Pues que no te fijas en los detalles Puri, y esas cosas duelen'],

	['Lo que en realidad buscan todos los hombres es una felación estable'],

	['- Tengo que hacer una redacción de diez páginas sobre mi vida sexual',
	'- ¿Como lo llevas?',
	'- Mal... Voy a tener que meter mucha paja'],

	['- Soy super saludable',
	'- ¿Comes sano y haces ejercicio?',
	'- No, mucha gente me saluda'],

	['- ¿Cómo prepara el brocoli?',
	'- Lo tiro, y preparo un par de huevos fritos con chorizo',
	'- ¡Contratado!'],

	['- Eres un poco corto',
	'- ¿Un poco qué? Cambio'],

	['- ¡Ayer casi hago un trío! Se acercó una chica y me dijo: "Yo y mi amiga queremos follar contigo"',
	'- ¿Y tú que dijiste?',
	'- Será "Mi amiga y yo"'],

	['- ¿Qué haces para estar tan delgada?',
	'- Follar mucho',
	'- Pues tu marido está bien gordo',
	'- Dicen que va a llover'],

	['"Si después de besarla no tienes que acomodarte el rabo, no es la indicada"<br /><br />José de Espronceda'],

	['Mi mayor rebeldía es colocar la compra en la cinta de la caja de tal forma que cuando me preguntan hasta dónde pueda responder: "Hasta los huevos"'],

	['- Me encanta su reloj espía, señor Bond',
	'- En su pantalla puedo ver usted no lleva bragas',
	'- ¡No es cierto! Si que llevo',
	'- Es que va una hora adelantado'],

	['- Control de alcoholemia. Sople',
	'- Eso es una polla',
	'- Ya. Pero así no dará positivo',
	'- Pues también es verdad'],

	['He probado lo de usar el chocolate como sustitutivo del sexo, pero los Toblerones se me parten al metermelos por el culo'],

	['- Que metal mas raro',
	'- Es estaño',
	'- ¿A que si?'],

	['Explota una fábrica de pelucas en Murcia. La policia está peninando la zona'],

	['Muere un hombre al estrellarse con un espejo. Se veía venir'],

	['Una mujer cae al vacío mientras tendía la ropa. Se le fue la pinza'],

	['Encontrar a tu media naranja es lo de menos. Lo importante es encontrar quien te la pele'],

	['- Tu follas poco, ¿no?',
	'- Ojalá'],

	['Ayer me enganché con un libro bueno, pero bueno BUENO, de los que marcan. Absorto estuve hasta las 4 de la madrugada, ahí, coloreando'],

	['Yo a veces le devuelvo a mi madre tuppers de mi suegra, para que vea que tiene competencia y no se relaje'],

	['- Camarero, un risotto',
	'- JOJOJO',
	'- Muchas gracias'],

	['- Mañana tengo un examen de próstata y no he estudiado nada',
	'- Échale un ojo al índice aunque sea, es lo que suele entrar'],

	['Tengo menos ganas de currar que el que le puso el nombre a "Panrico"'],

	['- Te quiero mucho Soplaculo',
	'- Abuelaaaa! Me llamo Silvano!'],

	['Lo más jodido de trabajar en equipo es convencer al resto de que no tienen ni puta idea'],

	['- Mi novia ya no quiere hablar conmigo ni por teléfono',
	'- ¿Y te cuelga?',
	'- Hasta la rodilla, pero no es momento de presumir'],

	['- Gracias a la bascula en el baño puedo saber cuanto pesa lo que cago',
	'- Claro, te pesas antes y despues',
	'- Ah! De esa forma es mejor'],

	['- ¿Cómo se dice, fuera o fuese?',
	'- Da igual',
	'- Pues ponte bien el bañador que tienes un huevo fuese'],

	['- Le he implantado un diente postizo',
	'- ¿Me lo puedo cepillar, doctor?',
	'- Por supuesto. Salgo a las ocho'],

	['- Cago cada mañana a las 8, doctor',
	'- ¿Y cual es el problema?',
	'- Que me despierto a las 9'],

	['- Papa, papa, tengo paperas',
	'- Pues cuando tengas pa putas me avisas'],

	['¿Que son tres burros debajo del mar? Un triburrón'],

	['- ¡Ayúdeme! He perdido a mi hija',
	'- ¿Como se llama?',
	'- Esperanza',
	'- Eso es imposible! La esperanza es lo último que se pierde'],

	['- Soy rockero',
	'- ¿Y tienes una banda?',
	'- No, junto piedras y las vendo'],

	['- Que boca mas grande tienes abuelita',
	'- ¡Cinco pollas me caben!'],

	['- ¿Tu no eras alérgico a los frutos secos?',
	'- Si, ¿porque?',
	'- Porque la tia con la que te liaste anoche tenia nuez',
	'- ¡Ahora entiendo porque me pica el culo!'],

	['Una cereza se mira al espejo y se pregunta \'¿Seré esa?\''],

	['Me dice el otro dia un tipo por la calle \'¡Quiero un hijo tuyo!\' Le traje al mayor, que es el que come más'],

	['- ¿Sabe cómo se dice memoria en inglés?',
	'- Por supuesto. Memory',
	'- ¿Podria usarlo en una frase?',
	'- Claro! Ayer caí por la ventana y memory'],

	['- ¿Qué es un tomate vestido con capa y antifaz?',
	'- Ni idea',
	'- El capitán tomate. Ahora, ¿qué es un cocodrilo vestido con capa y antifaz?',
	'- El capitán cocodrilo',
	'- No, es un cocodrilo disfrazado de capitán tomate'],

	['- Cariño, cuéntale a mi madre lo que te hice ayer',
	'- ¿Lo de la espectacular mamada sin manos?',
	'- No! El arroz con leche, gilipollas'],

	['- Dice que sabe de historia del arte',
	'- Soy un experto',
	'- ¿Qué opina del Renacimiento?',
	'- Que es imposible. Si te mueres, te mueres'],

	['- Estas obsesionado con las especias',
	'- No digas tonerías, Romero',
	'- Ramiro',
	'- Eso'],

	['- No sé si es buena idea hacerlo en la cama de tus padres',
	'- ¿Por qué?',
	'- Porque los vamos a despertar'],

	['- Empezemos con la entrevista. ¿Tiene usted experiencia?',
	'- Por supuesto. Con esta ya van 20'],

	['- ¿Sabe cómo se dice fiesta en inglés?',
	'- Por supuesto. Party',
	'- ¿Podria usarlo en una frase?',
	'- Claro! Ayer me party los dientes con la bicicleta'],

	['- Mama, ¿porqué me llamo Claudio?',
	'- Por qué yo me llamo Claudia',
	'- Pues menos mal que no te llamas Ana'],

	['- ¿Tienes WiFi?',
	'- Si',
	'- Y ¿cuál es la clave?',
	'- Tener dinero y pagarlo'],

	['- Papá, ¿qué es depilar?',
	'- No sé, hace tiempo que no la veo'],

	['- Madre mía, como tienes las vacas en el establo, mezcladas de cualquier manera',
	'- Sí, están un poco desordeñadas'],

	['- Bienvenidos al curso de relajación',
	'- ¡Empezad ya, hostias!'],

	['- ¿Hay algún doctor en la sala?',
	'- Presente! Especializado en Matemáticas',
	'- ¡Rápido doctor, mi amigo se se muere!',
	'- Pues uno menos'],

	['- ¿Cómo se dice Un zapato en inglés?',
	'- A shoe',
	'- Salud Jajaja'],

	['- ¿Balias, guapo?',
	'- No',
	'- Perfecto. Sujétame el cubata que esto es un temazo'],

	['La rencarnación tiene que existir, porque ciertos niveles de retraso no se acumulan en una sola vida ni de coña'],

	['Mi mujer insiste en que use la escobilla del vater, pero voy a volver al papel, tengo el culo en carne vive'],

	['- Después del divorcio hemos dividio la casa en dos partes',
	'- ¿Y qué parte te ha tocado?',
	'- La de fuera'],

	['- Dice mamá que estas obsesionado con el móvil',
	'- Cállate Alfonsiete'],

	['- Cuando alguien me dice un cumplido, me apetece follarmelo. ¿Que cree que tengo, doctor?',
	'- Creo que tiene usted unos ojos preciosos'],

	['- Hijo, la cigüeña te va a traer un hermanito',
	'- ¿La cigüena? Joder papá, si es que te follas todo lo que pillas'],

	['- Cariño, te detienes mucho en los detalles y así pierdes la visión de conjunto',
	'- Pero es que el niño es negro<br/>' +
	'- Y dale...'],

	['Las mujeres que os quejáis de los dolores del parto deberíais probar lo que es ser hombre y tener 37 de fiebre'],

	['- Mi esposa se ha caido al río y la estan buscando río arriba',
	'- La corriente va para abajo',
	'- Es que la maldita siempre lleva la contraria'],

	['- ¿Nivel de ortografia?',
	'- Excelente',
	'- Mencione dos palabras con tilde',
	'- Matilde y Cleotilde',
	'- ¡Contratado!'],

	['Si la raja del culo fuera horizontal daríamos palmadas al subir las escaleras'],

	['- ¿Cómo te llamas?',
	'- No soy ni el ayer ni el mañana',
	'- ¿Qué coño dices?',
	'- Soy Eloy'],

	['- No eres tú, es tu ortografía',
	'- Entonces, ¿ya no nos vamos haber?'],

	['No se puede discutir con un DJ. Siempre te cambian de tema'],

	['Menuda mierda de fiesta. En cuanto encuentre las bragas me voy'],

	['- Cariño, ¿a ti cómo te gustan los huevos?',
	'- ¿A mi? Que me reboten en la barbilla'],

	['- Abra las piernas',
	'- Es que me cuesta vencer mi timidez, doctor',
	'- Pues con las piernas cerradas no puedo sacar al niño'],

	['- Papá, ¿que es ser bipolar?',
	'- Es cambiar de la noche al día sin razón alguna',
	'- ¿Cómo el tio Jorge?',
	'- No, el tio Jorge es Drag Queen'],

	['Si crees que estás mal recuerda que puede haber alguien conociendo a tu ex y pensando que ha triumfado'],

	['- No sé porqué dices que soy infantil',
	'- Porque me tienes desnuda en la cama y me estás coloreando el tatuaje',
	'- Calla, que me salgo'],

	['- Mi hijo está practicando natación', 
	'- ¿Y qué tal le va?',
	'- Nada mal'],

	['- ¿Cuáles son los requisitos para la extracción de sangre, doctor?',
	'- Solamente ayuno',
	'- ¿Y cuál es?'],

	['- ¿Le corto la pizza en cuatro trozos o en ocho, señora?',
	'- En cuatro, no creo que me vaya a comer los ocho',
	'- Entiendo'],

	['- Me siento solo',
	'- Yo también! Sentarse es fácil'],

	['- Entonces, ¿vendes el piso?',
	'- Alquilo',
	'- ¿Cuánto pesa?'],

	['- El mes pasado contraí matrimonio',
	'- Contraje',
	'- Claro, tenía que ser formal'],

	['- Hola, ¿es usted Clara?',
	'- Claro',
	'- Disculpe, señor'],

	['- Hazte para allá que no cabo',
	'- Se dice "quepo"',
	'- Da igual, al fin y al quepo me entendiste'],

	['- Es usted asmática',
	'- ¿Es grave?',
	'- No, señora, es esdrújula'],

	['Mi noiva me ha pedido tiempo y distancia. Creo que quiere calcular la velocidad'],

	['- Quisiera comprar los libros sobre la fatiga y el cansancio',
	'- Lo siento, están agotados'],

	['- ¿Sabes qué pasaría si la tierra fuera un cubo en lugar de una esfera?',
	'- Ni idea',
	'- Que todos seríamos cubanos'],

	['- ¿Sabes en qué se convierte un país cuando se prohiben los tacos?',
	'- Ni idea',
	'- En un país destacado'],

	['- ¿Sabes qué pasa cuando se va la luz en una escuela privada?',
	'- Ni idea',
	'- Que no se vee un pijo'],

	['- ¿Sabes qué es un pelo en una cama?',
	'- Ni idea',
	'- El bello durmiente'],

	['- ¿Sabes qué le dice una impresora a otra cuando imprime algo increible?',
	'- Ni idea',
	'- Me has impresionado'],

	['- ¿Sabes en qué se convierte un pájaro cuando lo aplastas?',
	'- Ni idea',
	'- En una avellana']
];

const jokes = source.map((text, index) => ({
	id: index,
	text
}));

const count = () => jokes.length;

const getAll = filter => {
	const parsedFilter = parseSearchText(filter);
	return jokes.filter(joke => parseSearchText(joke.text).indexOf(parsedFilter) > -1);
};

const getByIndex = index => jokes[index];

const parseSearchText = text => text
	.toLowerCase()
	.replace(/á/g, 'a')
	.replace(/é/g, 'e')
	.replace(/í/g, 'i')
	.replace(/ó/g, 'o')
	.replace(/ú/g, 'u');

module.exports = {
	count,
	getByIndex,
	getAll
};
