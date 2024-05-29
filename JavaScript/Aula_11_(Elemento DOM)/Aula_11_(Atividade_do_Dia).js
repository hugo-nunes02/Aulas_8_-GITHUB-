//Mensagem
window.alert("Bem-vindo à minha página! Com ela espero que conheça muito mais sobre os estados de Avatar: A Lenda de Aang.");

      const pageTitle = document.title;
      console.log("Título da página:", pageTitle);

      //section
      const sectionElement = document.createElement("section");
      sectionElement.innerHTML = "<h1>Estados de Avatar</h1><h2>Estado Avatar</h2><p> O modo avatar é um modo que so o avatar consegue, permitindo elevar os seus poderes durante a sua utilização e é caracterizado com os olhos e tatuagens a brilhar. Porém o problema é que se o avatar morre usando este modo todo o ciclo avatar e quebrado (o ciclo é ar, agua, terra e fogo, para quem não sabia) e o avatar deixa de existir. Porém o problema é que se o avatar morre usando este modo todo o ciclo avatar e quebrado (o ciclo é ar, agua, terra e fogo, para quem não sabia) e o avatar deixa de existir.</p>";

      document.body.appendChild(sectionElement);
      //article
      const articleElement = document.createElement("article");
      articleElement.innerHTML = "<h2>Estado da força de cem sóis do cometa Sozin</h2><p>O Cometa de Sozin também conhecido como Grande Cometa é um cometa que passa perto do Mundo de Avatar a cada cem anos. O cometa passa perto o suficiente para que os dominadores de fogo extraiam energia do mesmo jeito que fazem com o Sol, aumentando. O Senhor do Fogo Ozai alegou, figurativamente, que o cometa dá o poder de cem sóis aos dominadores de fogo.'</p>";

    
      // Adicionar o article a section
      sectionElement.appendChild(articleElement);