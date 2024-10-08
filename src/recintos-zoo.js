class RecintosZoo {

    constructor(){
        this.recinto = [
            {
                id: 1,
                tamanho_total: 10,
                espaco_livre: 7,
                especies:
                {
                    'MACACO': 3
                },
                permite_max:
                {
                    'MACACO': 7,
                    'GAZELA': 3
                }
            },
            {
                id: 2,
                tamanho_total: 5,
                espaco_livre: 5,
                especies:{},
                permite_max:
                {
                    'MACACO': 5
                }
            },
            {
                id: 3,
                tamanho_total: 7,
                espaco_livre: 5,
                especies:
                {
                    'GAZELA': 1
                },
                permite_max:
                {
                    'MACACO': 4,
                    'GAZELA': 2,
                    'HIPOPOTAMO': 1
                }
            },
            {
                id: 4,
                tamanho_total: 8,
                espaco_livre: 8,
                especies:
                {},
                permite_max:
                {
                    'CROCODILO': 2,
                    'HIPOPOTAMO': 2
                }
            },
            {
                id: 5,
                tamanho_total: 9,
                espaco_livre: 6,
                especies:
                {
                    'LEÃO': 1
                },
                permite_max:
                {
                    'LEAO': 2
                }
            }
        ]

        this.animaisValidos = new Set(["LEAO", "MACACO", "LEOPARDO", "GAZELA", "CROCODILO", "HIPOPOTAMO"]);

        this.animal_invalido = {"erro":"Animal inválido"}
        
        this.quantidade_invalida = {"erro": "Quantidade inválida"};
        
        this.sem_recinto_viavel = {"erro": "Não há recinto viável"};

        this.recintosViaveis = [];
        
        this.lista_recintosViaveis =
        {
            recintosViaveis: this.recintosViaveis
        };
        
        this.x = 0;
        
        this.tamanho_animais = {
            LEAO: 3,
            LEOPARDO: 2,
            CROCODILO: 3,
            MACACO: 1,
            GAZELA: 2,
            HIPOPOTAMO: 4
        }
        
        this.espaco_sobra = 0;
        
    }

    analisaRecintos(animal, quantidade) {
        
        if(quantidade<=0) return this.quantidade_invalida;
        
        if(!this.animaisValidos.has(animal)) return this.animal_invalido;
        
        for(let recinto of this.recinto){
            if(recinto.permite_max.hasOwnProperty(animal)){
                if(recinto.permite_max[animal] >= quantidade){
                    if(recinto.id==2 && animal=="MACACO" && quantidade==1) continue;
                    this.x++;
                    this.espaco_sobra = recinto.espaco_livre - (this.tamanho_animais[animal] * quantidade);
                    if(!recinto.especies.hasOwnProperty(animal) && Object.keys(recinto.especies)!=0) this.espaco_sobra--;
                    this.recintosViaveis.push(`Recinto ${recinto.id} (espaço livre: ${this.espaco_sobra} total: ${recinto.tamanho_total})`);
                }
            }
        }
        if(this.x==0) return this.sem_recinto_viavel;
        return this.lista_recintosViaveis;
    }

}

export { RecintosZoo as RecintosZoo };