
import Vertice from "./Vertice.js";

let y = new Vertice("Y");
let x = new Vertice("X");
let w = new Vertice("W");
let u = new Vertice("U");
let v = new Vertice("V");

v.adicionarAresta(u,0);
v.adicionarAresta(w,0);
v.adicionarAresta(x,0);
u.adicionarAresta(u,0);
u.adicionarAresta(x,0);
w.adicionarAresta(x,0);
w.adicionarAresta(x,0);
x.adicionarAresta(y,0);


