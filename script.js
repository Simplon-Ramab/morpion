//chaque joueur a un signe
var joueur1="X";
var joueur2="0";
var jeuFini=false;
// commence par joueur 1
var tourJoueur = joueur1;
// me retourne un élément que contient plateau
var plateau = document.getElementsByClassName('bloc');
var statut = document.getElementById('statut');
var vainqueur = document.getElementById('vainqueur');
//je rajoute un ecouteur d'evenement click avec le e.target(correspond à l'elemenet cliqué)
//plateau.addEventListener('click', eventHandler);

var startGame = (function initGame(){
  for(var i = 0; i < plateau.length; i++){
    plateau[i].innerHTML = "";
    plateau[i].addEventListener('click', eventHandler);
  }

  return initGame;
})();

function eventHandler(e) {
  e.target.innerHTML= tourJoueur;
  this.removeEventListener('click', eventHandler);
    tourJoueur=tourJoueur===joueur1 ? joueur2 : joueur1;
      if(tourJoueur=="X"){
        statut.innerText="Tour Joueur X";
      }else{
        statut.innerText="Tour Joueur 0";
           }
    // condition s'il y'a victoire arrete le jeu
      if(victoire()){
        if(tourJoueur=="0"){
          vainqueur.innerText="Joueur X a gagné";
          }else{
            vainqueur.innerText="Joueur 0 a gagné";
                }

                for(var j = 0; j < plateau.length; j++){
                  plateau[j].removeEventListener('click', eventHandler);
                }

                playAgain();
              };

};

function victoire(){
  // va me convertir tous mes objets en tableau Array.ptototype.slice.call
  var blocs = Array.prototype.slice.call(document.querySelectorAll(".bloc"), 0);
  var signes = blocs.map(function(bloc){
    return bloc.innerHTML;
  })
  var bonCombo=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return bonCombo.find(function(combo){
      if(signes[combo[0]]==signes[combo[1]]&& signes[combo[1]]==signes[combo[2]]){
        return signes[combo[0]];
        }else{
          return false;
        }
      })
    }

function playAgain() {
  return confirm('Rejouer ?') ? startGame() : alert('gg');
}
