    export default class Rastreador {
        vertice = null;
        anterior = null;

        constructor(vertice, anterior) {
            this.vertice = vertice;
            this.anterior = anterior;
        }

        imprimeCaminho() {
            let atual = this;
            let saida = "";
            let somaCaminho = 0;
             
            saida += atual.vertice.valor;  

            console.log(atual.vertice.valor);

            while (atual.anterior != null) {

                atual = atual.anterior;

                saida = atual.vertice.valor + " --> " + saida;    

                somaCaminho += atual.vertice.heuristica;

            }   

            console.log(saida+"\n");
            console.log("Soma do Caminho: " + somaCaminho);
            

        }
    }   