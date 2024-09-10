class RecintosZoo {

    constructor(){
        this.recinto = [
            {
                id: 1,
                tamanho_total: 10,
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
                especies:{},
                permite_max:
                {
                    'MACACO': 5
                }
            },
            {
                id: 3,
                tamanho_total: 7,
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

        this.recintosViaveis = [];
        
        this.lista_recintosViaveis =
        {
            recintosViaveis: this.recintosViaveis
        };
    }

    analisaRecintos(animal, quantidade) {
        
        if(!this.animaisValidos.has(animal)){
            return console.log(this.animal_invalido);
        }
        
        for(let recinto of this.recinto){
            //console.log(recinto.especies);
            if(recinto.permite_max.hasOwnProperty(animal)){
                //console.log(recinto);
                this.recintosViaveis.push(`Recinto ${recinto.id} (espaço livre: ${recinto.id} total:${recinto.tamanho_total})`);
            }
        }
        console.log(this.lista_recintosViaveis);
    }

}

//export { RecintosZoo as RecintosZoo };

const zoo = new RecintosZoo();
//console.log(zoo.recinto[0]);

zoo.analisaRecintos("MACACO",2);
