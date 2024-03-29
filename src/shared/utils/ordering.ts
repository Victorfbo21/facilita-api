// Função para calcular a distância euclidiana entre dois pontos
import { Point } from "./types";

function distancia(ponto1: Point, ponto2: Point) {
    const dx = ponto1.locationX - ponto2.locationX;
    const dy = ponto1.locationY - ponto2.locationY;
    return Math.sqrt(dx * dx + dy * dy);
}

// Função para encontrar o vizinho mais próximo de um ponto não visitado
function vizinhoMaisProximo(ponto: Point, pontos: Point[], visitados: Boolean[]) {
    let menorDistancia = Infinity;
    let vizinhoMaisProximo = null;

    pontos.forEach((p, index) => {
        if (!visitados[index]) {
            const d = distancia(ponto, p);
            if (d < menorDistancia) {
                menorDistancia = d;
                vizinhoMaisProximo = index;
            }
        }
    });

    return vizinhoMaisProximo;
}

// Função para calcular a rota mais curta
export function calculateRoute(pontos: Point[]) {
    const rota = [0]; // Começamos na empresa, que é o primeiro ponto
    const visitados = Array(pontos.length).fill(false);
    visitados[0] = true;

    for (let i = 0; i < pontos.length - 1; i++) {
        const pontoAtual = pontos[rota[rota.length - 1]];
        const vizinho = vizinhoMaisProximo(pontoAtual, pontos, visitados);

        // Verifica se vizinho é nulo ou undefined antes de adicionar à rota
        if (vizinho !== null && vizinho !== undefined) {
            rota.push(vizinho);
            visitados[vizinho] = true;
        } else {
            console.error("vizinhoMaisProximo retornou valor inválido");
            break; // Interrompe o loop em caso de erro
        }
    }

    // Voltamos para a empresa no final
    rota.push(0);

    return rota;
}
